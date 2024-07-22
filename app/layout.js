import { Inter, Sarabun, Satisfy } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "400", variable: "--font-inter" });
const satisfy = Satisfy({ subsets: ["latin"], weight: "400", variable: "--font-satisfy" });
const sarabun = Sarabun({ subsets: ["latin"], weight: "400", variable: "--font-sarabun" });

export const metadata = {
  title: "Bermal Aratoğlu - Software Engineer Portfolio",
  description: "Welcome to the portfolio of Bermal Aratoğlu, a passionate software engineer specializing in web development, AI, and cloud solutions. Explore projects, skills, and blog posts.",
  keywords: "Bermal Aratoğlu, software, software engineer, web, dev,  development, AI, cloud solutions, frontend, backend, fullstack",
  author: "Bermal Aratoğlu",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
      
        <link rel="icon" href="/Bcon.png" />
        <title>{metadata.title}</title>
      </head>
      <body className={`${inter.className} ${satisfy.variable} ${sarabun.variable}`}>
        {children}
      </body>
    </html>
  );
}
