import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "@/styles/tailwind.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
	metadataBase: new URL("https://flaredeck.com"),
	title: {
		default: "FlareDeck - Desktop Control Panel for Cloudflare Tunnel",
		template: "%s | FlareDeck",
	},
	description:
		"Manage tunnel profiles, route DNS, monitor live logs, and edit configurations — all from a beautiful native desktop app.",
	icons: {
		icon: "icon.svg",
	},
	openGraph: {
		title: "FlareDeck - Desktop Control Panel for Cloudflare Tunnel",
		description:
			"Manage tunnel profiles, route DNS, monitor live logs, and edit configurations — all from a beautiful native desktop app.",
		images: "/og.png",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "FlareDeck - Desktop Control Panel for Cloudflare Tunnel",
		description:
			"Manage tunnel profiles, route DNS, monitor live logs, and edit configurations — all from a beautiful native desktop app.",
		images: ["/og.png"],
	},
};
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={clsx(
				"h-full scroll-smooth antialiased",
				inter.variable,
				lexend.variable,
			)}
		>
			<body>
				<div className="flex h-full flex-col">
					<Header />
					{children}
					<Footer />
				</div>
				<Script
					src="https://analytics.cloudbisnis.id/script.js"
					data-website-id="6da5d9b4-3a3e-46ed-8185-73cfd3ef3797"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
