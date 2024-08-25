import type { Metadata } from "next";
import { IBM_Plex_Sans,} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-ibm-plex'
 });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI Power Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider appearance={ {
      variables: { colorPrimary: '#F93646'},
    }

    }>
      <html lang="en">
        <body>
          <header>
       
          </header>
          <main>{children}</main>
        </body>
      </html>
  </ClerkProvider>
  );
}
