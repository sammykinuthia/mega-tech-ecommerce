import SideBar from "./components/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce application",
  description:
    "The website allows users to buy products that they wish. It is fast, reliable and safe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body
        className={`${inter.className} dark bg-slate-800 text-slate-50 min-h-screen min-w-screen`}
      >
        <div className="flex p-6 m-0 min-h-screen">
          <SideBar />
          <div className="glow main-section bg-slate-500 p-4 rounded-xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
