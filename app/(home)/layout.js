import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidenav from "./_components/sidenav.jsx";
import dbConnect from "@/services/mongo";
import ContextProvider from "../../context/providers/ContextProvider.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex gap-6 my-6 px-12`}
      >
        <ContextProvider>
          <div className="flex-1/4">
            <Sidenav />
          </div>
          <div className="flex-3/4">{children}</div>
        </ContextProvider>
      </body>
    </html>
  );
}
