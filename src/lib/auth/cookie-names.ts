/**
 * Cookie name constants, isolated from any runtime-specific code.
 *
 * Edge middleware needs these names but must not pull in Node's `crypto`,
 * so they deliberately live in their own module with zero imports. Importing
 * them from `@/lib/admin/session` is what dragged `node:crypto` into the Edge
 * bundle and produced the "not supported in the Edge Runtime" warning on every
 * boot.
 */

/** Admin console session, host-locked in production. */
export const ADMIN_SESSION_COOKIE_NAME = '__Host-careeros-admin-session';

/** Admin fallback for localhost, where `__Host-` requires HTTPS. */
export const ADMIN_FALLBACK_COOKIE_NAME = 'careeros_admin_session';

/** Signed end-user session issued alongside the Supabase SSR session. */
export const USER_SESSION_COOKIE_NAME = 'careeros_user_session';
