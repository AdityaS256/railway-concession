import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Railway Concession",
  description:
    "This website is created by Naitik Lodha and Arhaan Bhiwandkar from GDSC MPSTME",
};

export default function RootLayout({ children }) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ReCaptchaProvider>
  );
}
