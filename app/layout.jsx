import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransiton"
import StairTransition from "@/components/StairTransition"

const jetbrainsMono =  JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono' });

export const metadata = {
  title: "Luan Duarte",
  description: "Portfólio do Luan ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
}
