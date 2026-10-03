import { Raleway, Titillium_Web } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-titillium",
});

export const metadata = {
  title: "Sher Muhammad Iqbal — Full-Stack Developer | Angular, NestJS, Real-Time Systems",
  description:
    "Full-stack developer specializing in Angular, NestJS, and real-time systems — from enterprise vehicle surveillance platforms to AI voice agents and e-commerce backends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${raleway.variable} ${titilliumWeb.variable}`}>
        {children}
      </body>
    </html>
  );
}
