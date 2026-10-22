import { Roboto } from "next/font/google";
import "@/app/assets/styles/globals.css";
import ProviderLayout from "./ProviderLayout";

const roboto = Roboto({ weight: ["400", "900"], subsets: ["latin"], });

export const metadata = {
  metadataBase: new URL("https://www.heuller.com.br"),
  title: {
    default: "Héuller Soares | Desenvolvedor de software",
    template: "%s | Héuller Soares",
  },
  description: "Portfólio de Héuller Soares, desenvolvedor de software full stack. Conheça seus projetos, habilidades e formas de contato.",
  applicationName: "Portfólio de Héuller Soares",
  authors: [{ name: "Héuller Soares", url: "https://www.heuller.com.br" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.heuller.com.br",
    siteName: "Héuller Soares",
    title: "Héuller Soares | Desenvolvedor de software",
    description: "Portfólio de Héuller Soares, desenvolvedor de software full stack.",
    locale: "pt_BR",
    images: [{ url: "/profile_picture.jpg", width: 2208, height: 2944, alt: "Héuller Soares" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Héuller Soares | Desenvolvedor de software",
    description: "Portfólio de Héuller Soares, desenvolvedor de software full stack.",
    images: ["/profile_picture.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ProviderLayout>
          {children}
        </ProviderLayout>
      </body>
    </html>
  );
}
