"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * FlareDeck download page.
 *
 * - Detects the visitor's OS via userAgentData / userAgent.
 * - Resolves the latest version from `/latest.json` (committed to this
 *   site's `public/` folder by the flaredeck release workflow).
 * - All download links point at GitHub Releases via stable
 *   `/releases/latest/download/<asset>` URLs, so this page does NOT
 *   need to be redeployed when a new version ships — the workflow
 *   updates `latest.json` and the page picks it up automatically.
 *
 * If `latest.json` is missing (e.g. before the first release lands),
 * the page renders without a version number and falls back to linking
 * to the GitHub releases index page directly.
 */

const GH_REPO = "milzamsz/flaredeck";
const ALL_RELEASES = `https://github.com/${GH_REPO}/releases`;

type OSKey = "windows" | "macos" | "linux";

type Asset = {
	label: string;
	filename: string;
	hint?: string;
};

// Keep filename templates in sync with what tauri-action uploads in
// the flaredeck release workflow. `{version}` is substituted at runtime.
const ASSETS: Record<OSKey, Asset[]> = {
	windows: [
		{
			label: "Windows installer (.exe)",
			filename: "FlareDeck_{version}_x64-setup.exe",
			hint: "Recommended. Handles WebView2 bootstrap.",
		},
		{
			label: "Windows portable (.exe)",
			filename: "flaredeck.exe",
			hint: "Single-file binary. Needs WebView2 already installed.",
		},
	],
	macos: [
		{
			label: "macOS Universal (.dmg)",
			filename: "FlareDeck_{version}_universal.dmg",
			hint: "Apple Silicon + Intel.",
		},
	],
	linux: [
		{
			label: "Linux AppImage",
			filename: "FlareDeck_{version}_amd64.AppImage",
			hint: "Mark executable, then double-click.",
		},
		{
			label: "Debian / Ubuntu (.deb)",
			filename: "FlareDeck_{version}_amd64.deb",
		},
	],
};

const OS_LABEL: Record<OSKey, string> = {
	windows: "Windows",
	macos: "macOS",
	linux: "Linux",
};

const releaseUrl = (filename: string) =>
	`https://github.com/${GH_REPO}/releases/latest/download/${filename}`;

function detectOS(): OSKey | null {
	if (typeof navigator === "undefined") return null;
	// userAgentData is the modern way; not everywhere yet
	const uaData = (
		navigator as Navigator & { userAgentData?: { platform?: string } }
	).userAgentData;
	if (uaData?.platform) {
		const p = uaData.platform.toLowerCase();
		if (p.includes("win")) return "windows";
		if (p.includes("mac")) return "macos";
		if (p.includes("linux")) return "linux";
	}
	const ua = navigator.userAgent.toLowerCase();
	if (ua.includes("windows")) return "windows";
	if (ua.includes("mac os") || ua.includes("macintosh")) return "macos";
	if (ua.includes("linux")) return "linux";
	return null;
}

export function DownloadClient() {
	const [os, setOs] = useState<OSKey | null>(null);
	const [version, setVersion] = useState<string | null>(null);
	const [resolved, setResolved] = useState(false);

	useEffect(() => {
		setOs(detectOS());
		fetch("/latest.json", { cache: "no-store" })
			.then((r) => (r.ok ? r.json() : null))
			.then((data) => {
				if (data && typeof data.version === "string") {
					setVersion(String(data.version).replace(/^v/, ""));
				}
			})
			.catch(() => {})
			.finally(() => setResolved(true));
	}, []);

	const fill = (filename: string) =>
		version ? filename.replace("{version}", version) : null;

	const primary = os ? ASSETS[os][0] : null;
	const primaryUrl = primary
		? (fill(primary.filename) && releaseUrl(fill(primary.filename)!)) ||
		  ALL_RELEASES
		: ALL_RELEASES;

	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
			<header className="border-b border-border/60 pb-8">
				<p className="text-sm font-medium uppercase tracking-widest text-orange-500">
					Get FlareDeck
				</p>
				<h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					Download FlareDeck
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Free and open source.{" "}
					{version ? (
						<span className="text-foreground">Latest: v{version}</span>
					) : (
						<span>Latest releases available on GitHub.</span>
					)}
				</p>
			</header>

			{/* Primary CTA for the visitor's detected OS */}
			{primary && (
				<section className="mt-10 rounded-2xl border border-border/60 bg-background/60 p-6">
					<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
						For your system — {OS_LABEL[os!]}
					</p>
					<div className="mt-4 flex flex-wrap items-center gap-4">
						<Button asChild size="lg" className="rounded-full">
							<Link
								href={primaryUrl}
								aria-label={`Download ${primary.label}`}
								className="flex items-center gap-2"
							>
								{primary.label}
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
						{primary.hint && (
							<p className="text-sm text-muted-foreground">{primary.hint}</p>
						)}
					</div>
					{!version && resolved && (
						<p className="mt-3 text-xs text-amber-500">
							Latest version not detected yet — the link above will redirect
							to the most recent GitHub release.
						</p>
					)}
				</section>
			)}

			{/* All platforms */}
			<section className="mt-10">
				<h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
					All platforms
				</h2>
				<div className="mt-4 grid gap-4 sm:grid-cols-2">
					{(Object.keys(ASSETS) as OSKey[]).map((key) => (
						<div
							key={key}
							className="rounded-xl border border-border/60 bg-background/30 p-4"
						>
							<h3 className="font-display text-lg font-semibold text-foreground">
								{OS_LABEL[key]}
							</h3>
							<ul className="mt-3 space-y-3 text-sm">
								{ASSETS[key].map((a) => {
									const url = fill(a.filename);
									const href = url ? releaseUrl(url) : ALL_RELEASES;
									return (
										<li key={a.filename}>
											<Link
												href={href}
												className="inline-flex items-center gap-1 text-orange-500 hover:underline"
											>
												{a.label}
												<ArrowUpRight className="h-3.5 w-3.5" />
											</Link>
											{a.hint && (
												<span className="block text-xs text-muted-foreground">
													{a.hint}
												</span>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className="mt-10 rounded-xl border border-border/40 bg-background/30 p-4 text-sm text-muted-foreground">
				<p>
					Already have FlareDeck installed? It checks for new versions from
					Settings → App updates, signed with our updater key.
				</p>
				<p className="mt-2">
					Looking for an older version?{" "}
					<Link
						href={ALL_RELEASES}
						className="text-orange-500 hover:underline"
					>
						Browse all releases on GitHub
					</Link>
					.
				</p>
			</section>
		</div>
	);
}
