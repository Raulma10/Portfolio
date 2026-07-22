export const metadata = {
  title: "Raúl Martín | Portfolio",
  description: "Software Developer Portfolio",
};

import"./globals.css";

export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
