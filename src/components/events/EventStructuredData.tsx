import React from 'react';
import { CareerEvent } from '@/types/events/platform';

interface EventStructuredDataProps {
  event: CareerEvent;
}

export function EventStructuredData({ event }: EventStructuredDataProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.shortSummary,
    startDate: `${event.startDate}T${event.startTime}:00`,
    endDate: `${event.endDate}T${event.endTime}:00`,
    eventStatus:
      event.moderation.status === 'canceled'
        ? 'https://schema.org/EventCancelled'
        : 'https://schema.org/EventScheduled',
    eventAttendanceMode:
      event.format === 'online'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : event.format === 'hybrid'
        ? 'https://schema.org/MixedEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@type': 'Organization',
      name: event.organizer.name,
      url: event.organizer.website,
    },
    image: [event.heroImageUrl],
    offers: {
      '@type': 'Offer',
      price: event.costType === 'free' ? '0' : '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: event.registrationUrl,
      validFrom: event.createdAt,
    },
  };

  if (event.venue) {
    schema.location = {
      '@type': 'Place',
      name: event.venue.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.venue.addressLine1,
        addressLocality: event.venue.city,
        addressRegion: event.venue.regionState,
        postalCode: event.venue.postalCode,
        addressCountry: event.venue.country,
      },
    };
  } else if (event.virtualAccess) {
    schema.location = {
      '@type': 'VirtualLocation',
      url: event.registrationUrl,
    };
  }

  if (event.speakers && event.speakers.length > 0) {
    schema.performer = event.speakers.map((spk) => ({
      '@type': 'Person',
      name: spk.name,
      jobTitle: spk.role,
      worksFor: {
        '@type': 'Organization',
        name: spk.organization,
      },
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
