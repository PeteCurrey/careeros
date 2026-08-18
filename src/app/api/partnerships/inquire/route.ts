import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { recordAdminAuditLog } from '@/lib/admin/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      workEmail,
      organisation,
      website,
      organisationType,
      partnershipType,
      approximateReach,
      message,
      privacyConsent,
    } = body;

    // Validate required fields
    if (!name || !workEmail || !organisation || !organisationType || !partnershipType || !message) {
      return NextResponse.json(
        { error: 'Please provide all mandatory fields (name, work email, organisation, organisation type, partnership type, message).' },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { error: 'You must agree to the privacy policy to submit an inquiry.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }

    const adminSupabase = createAdminClient();

    const { data, error } = await adminSupabase
      .from('partnership_inquiries')
      .insert({
        name,
        work_email: workEmail,
        organisation,
        website: website || null,
        organisation_type: organisationType,
        partnership_type: partnershipType,
        approximate_reach: approximateReach || null,
        message,
        privacy_consent: privacyConsent,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting partnership inquiry:', error);
      return NextResponse.json(
        { error: 'Failed to record partnership inquiry. Please try again or contact partners@careeros.com.' },
        { status: 500 }
      );
    }

    // Record forensic audit event
    try {
      await recordAdminAuditLog({
        eventType: 'partnership.inquiry_received',
        actorId: 'public_lead',
        subjectType: 'partnership_inquiry',
        subjectId: data?.id || workEmail,
        payload: {
          name,
          organisation,
          workEmail,
          organisationType,
          partnershipType,
          approximateReach,
        },
      });
    } catch {
      // Non-blocking
    }

    return NextResponse.json({
      success: true,
      inquiryId: data?.id,
      message: 'Thank you for reaching out. Our Strategic Partnerships team will review your inquiry and follow up within 2 business days.',
    });
  } catch (err: any) {
    console.error('Unexpected error processing partnership inquiry:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
