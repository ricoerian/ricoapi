import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Rico Eriansyah, Full Stack Web & Mobile Developer Enthusiast" />
        <meta name="keywords" content="Rico Eriansyah, Full Stack Developer, Web Developer, Mobile Developer, Portfolio" />
        <meta name="author" content="Rico Eriansyah" />
        <title>Portfolio Rico Eriansyah</title>
      </head>
      <body className="bg-[#03001C]" id="top">
        {children}
      </body>
    </html>
  );
}