import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AvatarsProvider } from "./store/AvatarsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New Router by LM",
  description: "Generated new router avatar application",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AvatarsProvider>
          <Navbar />
          {children}
          <Footer />
        </AvatarsProvider>
      </body>
    </html>
  );
}
