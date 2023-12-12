import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import StyledJsxRegistry from "./registry";
import { GlobalContextProvider } from "./context/store";
// import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="gs">
      <body className={inter.className}>
        <Providers>
          <StyledJsxRegistry>
            <GlobalContextProvider>
            {/* <Navigation /> */}
              {children}
              </GlobalContextProvider>
          </StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
