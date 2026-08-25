import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Enter the site password to continue.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}