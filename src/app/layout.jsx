import { poppins } from "@/font/customFont";
import "./globals.css";

export const metadata = {
  title: "Github Search Repos",
  description: "you can search my github repositories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
