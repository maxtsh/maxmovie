import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import type { Metadata } from "next";

type Props = Readonly<React.PropsWithChildren>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Movie",
  description: "The greatest movie database in the world",
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;

