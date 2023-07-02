import { poppins } from "@/font/customFont";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Github Search Repos",
  description: "you can search my github repositories",
  keywords: "web development , github search ,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
