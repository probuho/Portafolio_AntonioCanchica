import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Antonio Ruiz Canchica | Junior Full Stack Developer",
    description: "Portafolio de Antonio José Ruiz Canchica - Junior Full Stack Developer especializado en React, TypeScript, Next.js. Apasionado por la ciencia ficción y la cultura geek.",
    keywords: ["desarrollador web", "full stack", "react", "typescript", "nextjs", "portfolio", "antonio ruiz canchica"],
    authors: [{ name: "Antonio José Ruiz Canchica" }],
    creator: "Antonio José Ruiz Canchica",
    openGraph: {
        title: "Antonio Ruiz Canchica | Junior Full Stack Developer",
        description: "Portafolio de Antonio José Ruiz Canchica - Junior Full Stack Developer",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Antonio Ruiz Canchica | Junior Full Stack Developer",
        description: "Portafolio de Antonio José Ruiz Canchica - Junior Full Stack Developer",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
