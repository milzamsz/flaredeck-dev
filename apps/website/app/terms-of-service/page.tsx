import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"The terms of service for using FlareDeck — the open-source desktop control panel for Cloudflare Tunnel.",
};

const LAST_UPDATED = "May 17, 2026";
const GITHUB_REPO = "https://github.com/milzamsz/flaredeck";
const CONTACT_EMAIL = "milzamsz@gmail.com";

export default function TermsOfServicePage() {
	return (
		<div className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
			<header className="border-b border-border/60 pb-8">
				<p className="text-sm font-medium uppercase tracking-widest text-orange-500">
					Legal
				</p>
				<h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
					Terms of Service
				</h1>
				<p className="mt-3 text-sm text-muted-foreground">
					Last updated: {LAST_UPDATED}
				</p>
			</header>

			<div className="prose prose-invert mt-10 max-w-none space-y-10 text-base leading-relaxed text-muted-foreground">
				<Section title="1. Agreement">
					<p>
						These Terms of Service ("Terms") govern your use of{" "}
						<strong className="text-foreground">FlareDeck</strong>, an
						open-source desktop application for managing Cloudflare Tunnel,
						along with this website and any related materials we publish.
					</p>
					<p>
						By downloading, installing, or using FlareDeck, you agree to be
						bound by these Terms. If you do not agree, please do not use the
						app.
					</p>
				</Section>

				<Section title="2. The software">
					<p>
						FlareDeck is distributed as free, open-source software under the
						MIT License. The full source code is available at{" "}
						<ExternalLink href={GITHUB_REPO}>{GITHUB_REPO}</ExternalLink>.
					</p>
					<p>
						The MIT License governs the rights and limitations that apply to
						the software itself. These Terms cover your use of the website and
						the broader FlareDeck project; in case of conflict regarding the
						software, the MIT License prevails.
					</p>
				</Section>

				<Section title="3. Local-first usage">
					<p>
						FlareDeck runs entirely on your own machine. We do not host the
						app, your tunnels, your credentials, or your data. All
						configuration, profiles, and logs stay on your device.
					</p>
					<p>
						You are solely responsible for the credentials, tokens, and
						Cloudflare account you connect to FlareDeck, and for any actions
						the app performs on your behalf.
					</p>
				</Section>

				<Section title="4. Acceptable use">
					<p>You agree not to use FlareDeck to:</p>
					<ul className="ml-6 list-disc space-y-2">
						<li>Violate any applicable law or regulation.</li>
						<li>
							Infringe the intellectual property or privacy rights of others.
						</li>
						<li>
							Distribute malware, conduct phishing, or attack any system you
							don't own or have permission to test.
						</li>
						<li>
							Bypass, abuse, or violate the terms of Cloudflare or any other
							third-party service FlareDeck connects to.
						</li>
					</ul>
				</Section>

				<Section title="5. Third-party services">
					<p>
						FlareDeck is an unofficial client. It is not affiliated with,
						endorsed by, or sponsored by Cloudflare, Inc. "Cloudflare" and{" "}
						<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
							cloudflared
						</code>{" "}
						are trademarks of their respective owners.
					</p>
					<p>
						When you connect FlareDeck to Cloudflare or any other third-party
						service, your use of that service is governed by its own terms and
						privacy policies.
					</p>
				</Section>

				<Section title="6. No warranty">
					<p>
						FlareDeck is provided <strong className="text-foreground">"as is"</strong>{" "}
						and{" "}
						<strong className="text-foreground">"as available"</strong>, without
						warranty of any kind, express or implied, including but not limited
						to merchantability, fitness for a particular purpose, and
						non-infringement.
					</p>
					<p>
						The app is in active development. Features may change, break, or be
						removed without notice. You are responsible for backing up your
						configuration before upgrading or modifying tunnels.
					</p>
				</Section>

				<Section title="7. Limitation of liability">
					<p>
						To the maximum extent permitted by law, the FlareDeck maintainers
						and contributors shall not be liable for any indirect, incidental,
						special, consequential, or punitive damages, or any loss of
						profits, data, tunnels, DNS records, or service availability,
						arising out of or in connection with your use of the app.
					</p>
				</Section>

				<Section title="8. Contributions">
					<p>
						Contributions to the FlareDeck project (issues, pull requests,
						discussions) are governed by the terms in the project repository.
						By submitting a contribution you agree it can be used and
						redistributed under the project's license.
					</p>
				</Section>

				<Section title="9. Changes">
					<p>
						We may update these Terms from time to time. The "Last updated"
						date at the top of this page reflects the latest revision.
						Continued use of FlareDeck after changes take effect constitutes
						acceptance of the updated Terms.
					</p>
				</Section>

				<Section title="10. Contact">
					<p>
						Questions about these Terms? Open an issue on{" "}
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
						href="/privacy"
						className="text-orange-500 hover:underline"
					>
						Privacy Policy
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
