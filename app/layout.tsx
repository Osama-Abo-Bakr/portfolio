import type { Metadata, Viewport } from "next"
import { Archivo, Bodoni_Moda, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { identity, deck } from "@/lib/content"

// Display: a magazine didone. Kept to headline sizes, where its
// hairlines are an asset rather than a liability.
const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

// Body: a grotesque with newspaper lineage.
const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Data: the instrument voice — labels, figures, detection tags.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(identity.site),
  title: {
    default: `${identity.name} — ${identity.role}`,
    template: `%s — ${identity.name}`,
  },
  description: deck,
  keywords: [
    "AI Engineer",
    "Solution Architect",
    "Machine Learning",
    "LLM",
    "RAG",
    "Computer Vision",
    "OCR",
    "LangChain",
    "Cairo",
    "Osama Abo-Bakr",
  ],
  authors: [{ name: identity.name, url: identity.site }],
  creator: identity.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: identity.site,
    siteName: `${identity.name} — ${identity.role}`,
    title: `${identity.name} — ${identity.role}`,
    description: deck,
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — ${identity.role}`,
    description: deck,
  },
  alternates: { canonical: identity.site },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#343c33",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        {/* Arm the scroll reveal only once we know a script can run and
            observe. Runs before first paint, so there is no flash — and if
            it never runs, the CSS leaves every section visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.IntersectionObserver)document.documentElement.dataset.reveal="on"`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
