import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { FeaturesTabsSection } from "@/components/FeaturesTabs";
import { Hero } from "@/components/Hero";
import { FirstFeaturesSection } from "@/components/first-features";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "FlareDeck - Desktop Control Panel for Cloudflare Tunnel",
	},
	description:
		"Manage tunnel profiles, route DNS, monitor live logs, and edit configurations — all from a beautiful native desktop app. No API keys required.",
};

export default function Home() {
	return (
		<div>
			<main>
				<Hero />
				<FeaturesTabsSection />
				<FirstFeaturesSection />
				<Faqs />
				<CallToAction />
			</main>
		</div>
	);
}
