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
  const res = await fetch(`http://localhost:3000/api/avatars?number=5`);

  const initialAvatars = await res.json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AvatarsProvider initialAvatars={initialAvatars}>
          <Navbar />
          {children}
          <Footer />
        </AvatarsProvider>
      </body>
    </html>
  );
}
