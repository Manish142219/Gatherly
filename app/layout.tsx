import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
//import '../app/globals.css';
import './globals.css'; // Ensure the path is correct




const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Bondville",
  description: 'Bondville is a platform for event management.',
  icons:{
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayobutton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
