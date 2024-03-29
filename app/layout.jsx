// ? START COMPONENTS ---
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
// ! END COMPONENTS ---

// ? START FONTS ---
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin']
});
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
// ! END FONTS ---

// ? START STYLES ---
import "/public/globals.css";
// ! END STYLES ---

export const metadata = {
  title: "JKCA Portfolio",
  description: "Powered by Next.JS and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">

      <body className={`${poppins.className } bg-slate-900`}>

        <Topnav />

        <main>
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}
