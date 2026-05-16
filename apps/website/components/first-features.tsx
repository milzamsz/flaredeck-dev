"use client";
import { cn } from "@/lib/utils";
import {
	IconArchive,
	IconCode,
	IconDeviceLaptop,
	IconLayout,
	IconLock,
	IconRoute,
	IconStack2,
	IconTerminal,
	IconUsers,
	IconWorld,
} from "@tabler/icons-react";

export function FirstFeaturesSection() {
	const features = [
		{
			title: "Profile Management",
			description:
				"Create and manage named tunnel profiles. Run multiple profiles concurrently with per-profile isolation.",
			icon: <IconUsers />,
		},
		{
			title: "Ingress Rule Editor",
			description:
				"Visual hostname-to-service mapping interface. Configure routes without touching YAML manually.",
			icon: <IconRoute />,
		},
		{
			title: "Raw YAML Editor",
			description:
				"CodeMirror-powered YAML editor for advanced users who prefer direct configuration control.",
			icon: <IconCode />,
		},
		{
			title: "Live Log Monitoring",
			description:
				"Real-time streaming of tunnel stdout and stderr. Debug connection issues instantly.",
			icon: <IconTerminal />,
		},
		{
			title: "DNS Routing",
			description:
				"One-click DNS route management through cloudflared. Map hostnames to your local services effortlessly.",
			icon: <IconWorld />,
		},
		{
			title: "Authentication Management",
			description:
				"Simplified cloudflared login flow. Manage cert.pem and tunnel credentials from the UI.",
			icon: <IconLock />,
		},
		{
			title: "WSL Support",
			description:
				"Seamless Windows + WSL Ubuntu development. Automatic localhost-to-WSL IP rewriting.",
			icon: <IconDeviceLaptop />,
		},
		{
			title: "System Tray Integration",
			description:
				"Minimize to system tray with single-instance management. Always accessible, never in the way.",
			icon: <IconLayout />,
		},
		{
			title: "Multi-Tunnel Support",
			description:
				"Run multiple tunnel profiles simultaneously. Each profile operates independently.",
			icon: <IconStack2 />,
		},
		{
			title: "Automatic Backups",
			description:
				"Configuration versioning with automatic backup retention. Never lose a working config.",
			icon: <IconArchive />,
		},
	];
	return (
		<div
			id="features"
			className="mt-20 flex flex-col items-center  justify-center px-4"
		>
			<h2 className="text-center font-display text-3xl tracking-tight text-primary sm:text-4xl">
				Everything You Need to Manage Tunnels
			</h2>
			<p className="mt-4 text-center text-lg  tracking-tight text-muted-foreground">
				A comprehensive desktop toolkit for Cloudflare Tunnel development —
				profile management, live monitoring, DNS routing, and more.
			</p>
			<div className="relative z-10 mx-auto mt-10 grid  max-w-7xl grid-cols-1 py-10 max-sm:mx-0 max-sm:w-full max-sm:p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</div>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"group/feature relative flex  flex-col border-neutral-800 py-10 lg:border-r",
				(index === 0 || index === 4 || index === 8) &&
					"dark:border-neutral-800 lg:border-l",
				(index < 4 || index < 8) && "dark:border-neutral-800 lg:border-b",
			)}
		>
			{index < 4 && (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
			)}
			{index >= 4 && (
				<div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
			)}
			<div className="relative z-10 mb-4 px-10 text-neutral-400">{icon}</div>
			<div className="relative z-10 mb-2 px-10 text-lg font-bold">
				<div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-700 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-white" />
				<span className="inline-block text-neutral-100 transition duration-200 group-hover/feature:translate-x-2">
					{title}
				</span>
			</div>
			<p className="relative z-10 px-10 text-sm text-neutral-300 lg:max-w-xs">
				{description}
			</p>
		</div>
	);
};
