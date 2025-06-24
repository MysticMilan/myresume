import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mystic Milan | Full Stack Developer",
  description:
    "Portfolio and Resume of Mystic Milan - Full Stack Developer specializing in Backend Development, DevOps, and Security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body className={`${inter.className} bg-base-100 text-base-content`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
