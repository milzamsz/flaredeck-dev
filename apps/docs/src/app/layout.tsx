import "@/styles/globals.css";
import { NextProvider } from "fumadocs-core/framework/next";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { source } from "@/lib/source";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const mono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "FlareDeck Documentation",
		template: "%s | FlareDeck",
	},
	description: "Desktop control panel for Cloudflare Tunnel",
	keywords: [
		"flaredeck",
		"cloudflare",
		"tunnel",
		"desktop",
		"control panel",
	],
	authors: [{ name: "FlareDeck" }],
	openGraph: {
		title: "FlareDeck Documentation",
		description: "Desktop control panel for Cloudflare Tunnel",
		type: "website",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
		{ media: "(prefers-color-scheme: light)", color: "#fff" },
	],
};

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html
			className={`${inter.variable} ${mono.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<body className="relative flex min-h-screen flex-col" suppressHydrationWarning>
				<NextProvider>
					<TreeContextProvider tree={source.getPageTree()}>
						<Providers>{children}</Providers>
					</TreeContextProvider>
				</NextProvider>
				<Script
					src="https://analytics.cloudbisnis.id/script.js"
					data-website-id="6da5d9b4-3a3e-46ed-8185-73cfd3ef3797"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
