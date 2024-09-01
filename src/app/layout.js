import { Roboto } from "next/font/google";
import "@/app/assets/styles/globals.css";

const roboto = Roboto({ weight: '400', subsets: ["latin"], });

export const metadata = {
  title: "Currículo - Héuller",
  description: "Projeto do meu currículo, a qual constam minhas informações e projetos realizados por mim."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
