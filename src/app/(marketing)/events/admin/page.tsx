import { redirect } from "next/navigation";

export default function EventsAdminRedirect() {
  redirect("/login?redirect=/admin/events");
}
