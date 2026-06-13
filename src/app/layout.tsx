import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

import { portfolioConfig } from "@/config/portfolioConfig";

export const metadata = {
  title: portfolioConfig.personalInfo.fullName,
  description: `Portfolio of ${portfolioConfig.personalInfo.fullName} - ${portfolioConfig.personalInfo.role}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}