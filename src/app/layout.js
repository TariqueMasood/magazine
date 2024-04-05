import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import MgNavbar from "@/components/navbar/navbar";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Project Leaders - Project Leaders Magazine",
  description: "Project Leaders Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MgNavbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
