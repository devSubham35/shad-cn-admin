import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';
import Provider from "@/components/layout/Provider";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';


export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Basic dashboard with Next.js and Shadcn'
};

const inter = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

const toastOptions = {
  classNames: {
    error: '!bg-red-600 !text-white !border-0',
    success: '!bg-green-600 !text-white !border-0',
    warning: '!bg-yellow-600 !text-black !border-0',
    info: '!bg-blue-600 !text-white !border-0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader showSpinner={false} color="#E11D48" height={2} />
        <Provider>
          <Toaster position="bottom-right" toastOptions={toastOptions} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
