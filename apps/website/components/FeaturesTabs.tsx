"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Code2,
	Route,
	Terminal,
	Users,
} from "lucide-react";

type FeatureTab = {
	value: string;
	label: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	bullets: string[];
	imageSrc: string;
	imageAlt: string;
};

const TABS: FeatureTab[] = [
	{
		value: "profiles",
		label: "Profiles",
		icon: <Users className="h-4 w-4" />,
		title: "Run multiple tunnels, side-by-side",
		description:
			"Create named profiles with isolated configs and credentials. Switch between dev, staging, and prod without ever touching a flag again.",
		bullets: [
			"Per-profile credentials and ingress",
			"Concurrent tunnels with one-click toggle",
			"Auto backups for every config edit",
		],
		imageSrc: "/features/profiles.png",
		imageAlt: "FlareDeck profile manager preview",
	},
	{
		value: "ingress",
		label: "Ingress",
		icon: <Route className="h-4 w-4" />,
		title: "Visual ingress rule editor",
		description:
			"Map hostnames to local services through a clean form-based UI. Drag to reorder, validate inline, and ship the YAML it writes for you.",
		bullets: [
			"Form + YAML stay in sync",
			"Inline rule validation",
			"Reusable service templates",
		],
		imageSrc: "/features/ingress.png",
		imageAlt: "FlareDeck ingress rule editor preview",
	},
	{
		value: "logs",
		label: "Live Logs",
		icon: <Terminal className="h-4 w-4" />,
		title: "Real-time stdout & stderr streaming",
		description:
			"Tail tunnels live with searchable, color-coded output. No more attaching to detached cloudflared processes from a terminal.",
		bullets: [
			"Per-profile log streams",
			"Search, filter, pause, copy",
			"Crash dumps surfaced automatically",
		],
		imageSrc: "/features/logs.png",
		imageAlt: "FlareDeck live log viewer preview",
	},
	{
		value: "yaml",
		label: "Raw YAML",
		icon: <Code2 className="h-4 w-4" />,
		title: "CodeMirror-powered config editor",
		description:
			"Drop down to raw YAML when you need it. Syntax highlighting, schema hints, and undo history — everything you’d miss from your editor.",
		bullets: [
			"Schema-aware autocomplete",
			"Diff against last working config",
			"Restore any backup in one click",
		],
		imageSrc: "/features/yaml.png",
		imageAlt: "FlareDeck raw YAML editor preview",
	},
];

function FeaturePreview({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="relative w-full overflow-hidden rounded-xl border border-border/60 bg-zinc-950 shadow-2xl shadow-orange-500/5">
			<Image
				src={src}
				alt={alt}
				width={1600}
				height={900}
				sizes="(min-width: 1024px) 50vw, 100vw"
				quality={100}
				unoptimized
				className="h-auto w-full"
			/>
		</div>
	);
}

export function FeaturesTabsSection() {
	return (
		<section
			id="features-tabs"
			className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-28"
		>
			<div className="mx-auto max-w-2xl text-center">
				<p className="text-sm font-medium uppercase tracking-widest text-orange-500">
					Core features
				</p>
				<h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					Everything cloudflared should ship with
				</h2>
				<p className="mt-4 text-base leading-relaxed text-muted-foreground">
					Four focused tools that turn the Cloudflare Tunnel CLI into a real
					control panel. Pick a tab to see what FlareDeck does.
				</p>
			</div>

			<Tabs defaultValue={TABS[0].value} className="mt-12 w-full">
				<TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap justify-center gap-2 bg-transparent p-0">
					{TABS.map((tab) => (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className="gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm data-[state=active]:border-orange-500/40 data-[state=active]:bg-orange-500/10 data-[state=active]:text-orange-500"
						>
							{tab.icon}
							{tab.label}
						</TabsTrigger>
					))}
				</TabsList>

				{TABS.map((tab) => (
					<TabsContent key={tab.value} value={tab.value} className="mt-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
							<div>
								<h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
									{tab.title}
								</h3>
								<p className="mt-4 text-base leading-relaxed text-muted-foreground">
									{tab.description}
								</p>
								<ul className="mt-6 space-y-3">
									{tab.bullets.map((b) => (
										<li
											key={b}
											className="flex items-start gap-3 text-sm text-foreground"
										>
											<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
											{b}
										</li>
									))}
								</ul>
							</div>
							<FeaturePreview src={tab.imageSrc} alt={tab.imageAlt} />
						</div>
					</TabsContent>
				))}
			</Tabs>
		</section>
	);
}
