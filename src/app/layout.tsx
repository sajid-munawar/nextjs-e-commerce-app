import "./globals.css";
import { Sora } from "next/font/google";
import Providers from "@/store/Provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
