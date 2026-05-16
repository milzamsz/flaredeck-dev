import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./shared/Logo";

const GITHUB_REPO = "https://github.com/milzamsz/flaredeck";

const links = [
	{ href: "/#features", label: "Features" },
	{ href: "/#faqs", label: "FAQ" },
	{ href: "https://docs.flaredeck.dev", label: "Docs", external: true },
	{ href: "https://docs.flaredeck.dev/docs/changelog", label: "Changelog", external: true },
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms-of-service", label: "Terms" },
] as const;

export function Footer() {
	return (
		<footer
			className="border-t border-border/40 bg-background"
			role="contentinfo"
		>
			<Container>
				<div className="flex flex-col items-center gap-6 py-8 md:grid md:grid-cols-3 md:gap-4">
					{/* Brand */}
					<Link
						href="/"
						aria-label="FlareDeck - Home"
						className="flex items-center gap-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:justify-self-start"
					>
						<Logo className="h-7 w-auto" />
						<span className="text-base font-semibold text-primary">
							FlareDeck
						</span>
					</Link>

					{/* Inline links */}
					<nav
						aria-label="Footer"
						className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground md:justify-self-center"
					>
						{links.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								target={"external" in item && item.external ? "_blank" : undefined}
								className="transition-colors hover:text-primary"
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Social */}
					<div
						className="flex items-center gap-4 md:justify-self-end"
						aria-label="Social links"
					>
						<Link
							href={GITHUB_REPO}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="FlareDeck on GitHub"
							className="text-muted-foreground transition-colors hover:text-primary"
						>
							<svg
								aria-hidden="true"
								className="h-5 w-5 fill-current"
								viewBox="0 0 24 24"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
							</svg>
						</Link>
					</div>
				</div>

				{/* Slim bottom row */}
				<div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
					FlareDeck is Open source under MIT license
					<span className="ml-1 text-rose-500" aria-hidden="true">
						❤
					</span>
				</div>
			</Container>
		</footer>
	);
}
