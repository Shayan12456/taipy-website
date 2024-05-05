import type { Viewport } from 'next';
import Script from 'next/script';

import Banner from '@/components/shared/banner';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header/header';

import { getBanner } from '@/lib/sanity/client';

import '@/styles/globals.css';

import { ibmPlexMono, inter, jetBrainsMono } from './fonts';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

async function RootLayout({ children }: { children: React.ReactNode }) {
  const banner = await getBanner();

  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${jetBrainsMono.variable} ${inter.variable}`}
    >
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script src="https://plausible.io/js/script.tagged-events.js" data-domain="taipy.io" />
            <Script
              src="https://tag.clearbitscripts.com/v1/pk_1733d1e9903ce4818fec6c5fdd8118cf/tags.js"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <Script strategy="beforeInteractive" id="axeptio_overlay">
              {`
            window.axeptioSettings = {
              clientId: "6630e24fbbf25171c10a2e12",
              cookiesVersion: "taipy-en-EU",
            };
            
            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
            `}
            </Script>
            <Script id="hotjar_analytics">
              {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:4945188,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
            </Script>
          </>
        )}
      </head>
      <body>
        {banner && (
          <Banner title={banner.title} linkText={banner.linkText} linkUrl={banner.linkUrl} />
        )}
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const revalidate = 60;

export default RootLayout;
