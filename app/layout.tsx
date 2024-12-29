
import "./globals.css";
import AuthProvider from "@/utils/nextauth-session-provider";

export default async function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}