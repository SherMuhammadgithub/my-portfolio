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

// Home page intro loader gate. The loader overlay is part of the prerendered
// HTML (see src/app/page.js), so it is what the browser paints first — but only
// while this attribute says so. It has to be decided here, synchronously in
// <head>, because sessionStorage is client-only and React hydrates too late to
// keep the content from flashing first.
//   "pending" -> this document load shows the loader (first visit this session
//                or a hard reload)
//   "skip"    -> already seen in this session, show the content straight away
//   "done"    -> set by page.js once the loader is finished
const LOADER_ATTR = "data-portfolio-loader";
// The last clause is a safety net: if the client bundle never hydrates (blocked,
// failed, brutal network), page.js never clears the attribute, so give up after
// 5s rather than leave the page black and unscrollable.
const loaderGateScript = `(function(){var root=document.documentElement;try{var nav=performance.getEntriesByType("navigation")[0];var seen=sessionStorage.getItem("portfolio-home-visited");var show=location.pathname==="/"&&((nav&&nav.type==="reload")||!seen);sessionStorage.setItem("portfolio-home-visited","true");root.setAttribute("${LOADER_ATTR}",show?"pending":"skip");if(show){setTimeout(function(){if(root.getAttribute("${LOADER_ATTR}")==="pending")root.setAttribute("${LOADER_ATTR}","skip");},5000);}}catch(e){root.setAttribute("${LOADER_ATTR}","skip");}})();`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the script below stamps an attribute on <html>
    // before hydration, which React would otherwise report as an extra
    // server/ client difference (one level deep only, children stay checked).
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: loaderGateScript }} />
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
