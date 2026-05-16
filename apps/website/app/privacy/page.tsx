import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"How FlareDeck handles data — short answer: we don't collect any. The desktop app runs entirely on your machine.",
};

const LAST_UPDATED = "May 17, 2026";
const GITHUB_REPO = "https://github.com/milzamsz/flaredeck";
const CONTACT_EMAIL = "milzamsz@gmail.com";

export default function PrivacyPage() {
	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
			<header className="border-b border-border/60 pb-8">
				<p className="text-sm font-medium uppercase tracking-widest text-orange-500">
					Legal
				</p>
				<h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					Privacy Policy
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Last updated: {LAST_UPDATED}
				</p>
			</header>

			<div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
				<Section title="The short version">
					<p>
						<strong className="text-foreground">FlareDeck</strong> is an
						open-source desktop app for managing Cloudflare Tunnel. It runs
						entirely on your computer.
					</p>
					<ul className="ml-6 list-disc space-y-2">
						<li>We don't run any servers for the app.</li>
						<li>
							We don't collect telemetry, analytics, or usage data.
						</li>
						<li>
							We don't have user accounts, sign-ups, or payments.
						</li>
						<li>
							Your Cloudflare credentials and tunnel configs stay on your
							device.
						</li>
					</ul>
				</Section>

				<Section title="1. Data stored locally">
					<p>
						FlareDeck stores configuration, profiles, logs, and credentials in
						your operating system's standard application data directory. This
						data never leaves your machine through FlareDeck itself.
					</p>
					<p>
						You are responsible for the security of your device, your OS user
						account, and any backups you make of these files.
					</p>
				</Section>

				<Section title="2. Network requests">
					<p>FlareDeck only makes outbound network requests to:</p>
					<ul className="ml-6 list-disc space-y-2">
						<li>
							<strong className="text-foreground">Cloudflare</strong> — when
							you authenticate, manage tunnels, or update DNS routes. These
							requests use your own Cloudflare credentials and are governed by{" "}
							<ExternalLink href="https://www.cloudflare.com/privacypolicy/">
								Cloudflare's Privacy Policy
							</ExternalLink>
							.
						</li>
						<li>
							<strong className="text-foreground">Update checks</strong> —
							when enabled, FlareDeck checks GitHub Releases for a new version.
							This is a standard HTTP request to GitHub and is subject to{" "}
							<ExternalLink href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">
								GitHub's Privacy Statement
							</ExternalLink>
							.
						</li>
					</ul>
					<p>
						No request is sent to any FlareDeck-operated server, because there
						is no FlareDeck-operated server.
					</p>
				</Section>

				<Section title="3. This website">
					<p>
						This marketing site and the documentation site at{" "}
						<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
							/docs
						</code>{" "}
						are static pages. They do not set tracking cookies, run analytics
						scripts, or share data with third-party advertisers.
					</p>
					<p>
						Standard server access logs (IP address, user agent, requested
						URL) may be retained by the hosting provider for security and
						abuse-prevention purposes only.
					</p>
				</Section>

				<Section title="4. GitHub interactions">
					<p>
						FlareDeck is developed in public on GitHub at{" "}
						<ExternalLink href={GITHUB_REPO}>{GITHUB_REPO}</ExternalLink>. If
						you open an issue, comment, or submit a pull request, that activity
						is governed by{" "}
						<ExternalLink href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">
							GitHub's Privacy Statement
						</ExternalLink>
						.
					</p>
				</Section>

				<Section title="5. Children">
					<p>
						FlareDeck is a developer tool not directed at children under 13.
						We do not knowingly collect any data from anyone, including
						children.
					</p>
				</Section>

				<Section title="6. Changes">
					<p>
						If we change anything material about how the app or this website
						handles data, we will update this page and bump the "Last updated"
						date above.
					</p>
				</Section>

				<Section title="7. Contact">
					<p>
						Questions about this Privacy Policy? Open an issue on{" "}
						<ExternalLink href={`${GITHUB_REPO}/issues`}>
							GitHub
						</ExternalLink>{" "}
						or email{" "}
						<Link
							href={`mailto:${CONTACT_EMAIL}`}
							className="text-orange-500 hover:underline"
						>
							{CONTACT_EMAIL}
						</Link>
						.
					</p>
				</Section>
			</div>

			<footer className="mt-16 border-t border-border/60 pt-8 text-sm text-muted-foreground">
				<p>
					See also the{" "}
					<Link
						href="/terms-of-service"
						className="text-orange-500 hover:underline"
					>
						Terms of Service
					</Link>
					.
				</p>
			</footer>
		</div>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-3">
			<h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
				{title}
			</h2>
			{children}
		</section>
	);
}

function ExternalLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-orange-500 hover:underline"
		>
			{children}
		</a>
	);
}
