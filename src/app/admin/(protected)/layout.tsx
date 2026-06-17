import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken, AUTH } from "@/lib/auth";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get(AUTH.COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }
  return <>{children}</>;
}
