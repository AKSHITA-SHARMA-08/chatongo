import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLaMA 3 Chatbot",
  description: "A premium chatbot powered by LLaMA 3 and Groq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
