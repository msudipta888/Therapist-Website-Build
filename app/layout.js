import "./globals.css";

export const metadata = {
  title: "Therapist Website Build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=' font-sans antialiased'
      >
        {children}
      </body>
    </html>
  );
}
