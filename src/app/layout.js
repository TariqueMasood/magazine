import { Mulish } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import MgNavbar from "@/components/navbar/navbar";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Project Leaders - Project Leaders Magazine",
  description: "Project Leaders Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <MgNavbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
