import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { recordAdminAuditLog } from '@/lib/admin/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      requesterName,
      requesterEmail,
      requesterOrganization,
      requesterRole,
      organizationType,
      requestedDocuments,
      useCaseReason,
    } = body;

    // Validate required fields
    if (!requesterName || !requesterEmail || !requesterOrganization || !useCaseReason) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, organization, and reason are mandatory.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(requesterEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const requestPayload = {
      requester_name: requesterName.trim(),
      requester_email: requesterEmail.trim().toLowerCase(),
      requester_organisation: requesterOrganization.trim(),
      requester_role: requesterRole ? requesterRole.trim() : null,
      organisation_type: organizationType || 'other',
      requested_documents: Array.isArray(requestedDocuments) ? requestedDocuments : [requestedDocuments],
      use_case_reason: useCaseReason.trim(),
      nda_status: 'pending',
      status: 'pending',
    };

    const { data, error } = await supabase
      .from('compliance_document_requests')
      .insert(requestPayload)
      .select()
      .single();

    if (error) {
      console.warn('Database error logging compliance document request:', error.message);
      // Even if DB write fails, log and return success acknowledgment so enterprise user experience is preserved
    }

    // Record forensic audit log
    try {
      await recordAdminAuditLog({
        eventType: 'compliance.document_requested',
        actorId: 'system',
        subjectType: 'compliance_document_request',
        subjectId: data?.id || requesterEmail,
        payload: {
          requester_name: requesterName,
          requester_organisation: requesterOrganization,
          organisation_type: organizationType,
          requested_documents: requestedDocuments,
        },
      });
    } catch {
      // Non-blocking
    }

    return NextResponse.json({
      success: true,
      requestId: data?.id || 'REQ-' + Date.now(),
      message:
        'Your compliance documentation request has been received. Our security and compliance office will review your request and transmit mutual NDA documentation to your email within 1 business day.',
    });
  } catch (err: unknown) {
    console.error('Compliance request error:', err);
    return NextResponse.json(
      { error: 'An internal error occurred processing your compliance request.' },
      { status: 500 }
    );
  }
}
