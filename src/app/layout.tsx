import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Global/Footer";
import StateProvider from "@/state/StateProvider";
import NavBar from "@/components/Global/NavBar";
import { ReactQueryProvider } from "@/Providers/ReactQueryProvider";
import { Toaster } from 'sonner';
import { WebsiteInfoLoading } from "@/components/Global/Loader/WebsiteInfoLoading";
import { WhatsappGlobalIcon } from "@/components/Global/WhatsappGlobalIcon";
import Head from "next/head";

// Font definitions
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify required weights
});

export const metadata: Metadata = {
  title: "ItechPro",
  description: "Taj Informatique – Des ordinateurs portables performants, alliant puissance et fiabilité pour tous vos besoins.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <!-- Meta Pixel Code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1368535597525995');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body
        className={`${montserrat.variable} antialiased bg-[#FDFCFC] text-customBlack`}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1368535597525995&ev=PageView&noscript=1" />
            `,
          }}
        />
        <ReactQueryProvider>
          <StateProvider>
            <NavBar type="transparent"/>
            <Toaster position="top-center" richColors/>
            {children}
            <Footer />
            <WhatsappGlobalIcon />
          </StateProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}