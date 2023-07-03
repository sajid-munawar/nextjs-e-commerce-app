import "./globals.css";
import { Sora } from "next/font/google";
import Providers from "@/store/Provider";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/footer";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "E Commerce App",
  description: "Where you can buy your clothing items",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
          <Footer />
          </Providers>
      </body>
    </html>
  );
}
