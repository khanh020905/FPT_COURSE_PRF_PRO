import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "DUO TECH COURSE | Trở thành Product Builder chuẩn Doanh nghiệp",
  description: "Khóa học lập trình (C, C++, Java) thực chiến - Nơi hệ thống logic và kỷ luật kỹ sư tạo ra thế hệ Builder tiếp theo cùng 2 Mentors Thuần & Khánh.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231e40af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m18 16 4-4-4-4'/><path d='m6 8-4 4 4 4'/><path d='m14.5 4-5 16'/></svg>",
  },
  openGraph: {
    title: "DUO TECH COURSE | Build Your Way Through Code",
    description: "Khóa học lập trình thực chiến (C, C++, Java). Lộ trình 3 tháng tinh gọn vượt ải PE Test cùng Duo Tech.",
    url: "https://duotechcourse.com",
    siteName: "DUO TECH COURSE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DUO TECH COURSE - Lộ trình trở thành Product Builder",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUO TECH COURSE | Build Your Way Through Code",
    description: "Khóa học lập trình thực chiến ngôn ngữ C, C++, Java.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
