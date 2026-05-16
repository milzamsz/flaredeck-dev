import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const GITHUB_REPO = "https://github.com/milzamsz/flaredeck";

export function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-background">
			{/* Decorative blurred orange glow — flame motif unique to FlareDeck */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 -top-32 -z-10 transform-gpu blur-3xl"
			>
				<div
					className="relative left-1/2 aspect-[1155/678] w-[60rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-orange-500 via-amber-400 to-rose-500 opacity-25"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.7%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>

			<div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-24 text-center lg:px-8 lg:pb-32 lg:pt-32">
				<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">
					<Sparkles className="h-3.5 w-3.5" />
					Open source · Native desktop app
				</div>

				<h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
					Your Cloudflare Tunnels,
					<br />
					<span className="bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500 bg-clip-text text-transparent">
						finally on a real dashboard.
					</span>
				</h1>

				<p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
					FlareDeck is the local-first desktop console for{" "}
					<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
						cloudflared
					</code>
					. Spin up profiles, route DNS, tail logs, and edit configs — no API
					keys, no terminal gymnastics.
				</p>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
					<Button asChild size="lg" className="rounded-full">
						<Link href="https://docs.flaredeck.dev" target="_blank" aria-label="Get Started">
							Get started
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="rounded-full"
					>
						<Link
							href={GITHUB_REPO}
							target="_blank"
							aria-label="View on GitHub"
						>
							<Github className="mr-2 h-4 w-4" />
							Star on GitHub
						</Link>
					</Button>
				</div>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
					<span className="inline-flex items-center gap-2">
						<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_theme(colors.emerald.500)]" />
						Available on Windows
					</span>
					<span className="hidden h-3 w-px bg-border sm:inline-block" />
					<span className="inline-flex items-center gap-2">
						<span className="relative inline-flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_theme(colors.amber.400)]" />
						</span>
						macOS & Linux in testing
					</span>
				</div>
			</div>
		</section>
	);
}
