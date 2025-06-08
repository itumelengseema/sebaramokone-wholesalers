import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nyami Nyami",
  description: "Get in touch with us!",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}