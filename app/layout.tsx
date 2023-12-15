import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import StyledJsxRegistry from "./registry";
import { GlobalContextProvider } from "./context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medium Demo",
  description: "Built with Gluestack UI",
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
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
