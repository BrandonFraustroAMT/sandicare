import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css"

import ClientLayout from "./ClientLayout";
import Head from "next/head";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandicare",
  description: "Sandicare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-PJ5P1N4XW9`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PJ5P1N4XW9');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-16565622841/ob5UCL6By88ZELmwjds9'});
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <div className="container-background">
            {/* CIRCULO ROJO */}
            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-left ">
              <defs>
                <radialGradient id="Degradado_sin_nombre_38" data-name="Degradado sin nombre 38" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#f1d6dc"/>
                  <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle className="circuloRojo" cx="1500" cy="1500" r="2000" fill="url(#Degradado_sin_nombre_38)"/>
            </svg>

            {/* CIRCULO AZUL */}
            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3000 3000" className="svg-right">
              <defs>
                <radialGradient id="Degradado_sin_nombre_39" data-name="Degradado sin nombre 39" cx="1500" cy="1500" fx="1500" fy="1500" r="2000" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#cfd5dd"/>
                  <stop offset="1" stopColor="#f8f8f8" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle className="circuloAzul" cx="1500" cy="1500" r="2000"/>
            </svg>
        </div>
        <ClientLayout>{children}</ClientLayout>
      </body>
      <GoogleTagManager gtmId="G-PJ5P1N4XW9" />
      <GoogleAnalytics gaId="G-PJ5P1N4XW9" />
    </html>
  );
}
