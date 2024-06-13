import "@/styles/globals.css";

import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
          <div>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
