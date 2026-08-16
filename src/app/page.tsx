import { redirect } from 'next/navigation';

/**
 * Root page — redirects to the marketing homepage.
 * The actual homepage is rendered by (marketing)/page.tsx.
 */
export default function RootPage() {
  redirect('/');
}
