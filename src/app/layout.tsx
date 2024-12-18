import "./globals.css";
import { Jost, Metrophobic, Bungee_Hairline } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import favicon from "./favicon.ico";

// const inter = Inter({ subsets: ["latin"] });
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const metrophobic = Metrophobic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-metrophobic",
  display: "swap",
});

const bungee_hairline = Bungee_Hairline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee-hairline",
  display: "swap",
});

export const metadata = {
  title: "AVIAT'R | UCR",
  description: "The official website for the Aviat'r Club @ UCR.",
  icons: {
    icon: favicon.src,
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${jost.variable} ${metrophobic.variable} ${bungee_hairline.variable}`}
      >
        <NavBar />
        <div className="h-12"></div>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
