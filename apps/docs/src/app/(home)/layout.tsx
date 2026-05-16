import { HomeLayout } from "fumadocs-ui/layouts/home";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { baseOptions, linkItems } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
	const base = baseOptions();

	return (
		<HomeLayout
			{...base}
			links={linkItems}
			searchToggle={{
				enabled: true,
				components: {
					lg: <HomeSearchLink className="max-w-[260px] flex-1" />,
					sm: <HomeSearchLink iconOnly className="md:hidden" />,
				},
			}}
			style={
				{
					"--spacing-fd-container": "1300px",
				} as object
			}
		>
			{children}
			<Footer />
		</HomeLayout>
	);
}

function HomeSearchLink({
	className,
	iconOnly,
}: {
	className?: string;
	iconOnly?: boolean;
}) {
	if (iconOnly) {
		return (
			<Link
				href="/docs"
				aria-label="Search documentation"
				className={`inline-flex size-9 items-center justify-center rounded-lg text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground ${className ?? ""}`}
			>
				<SearchIcon className="size-4" />
			</Link>
		);
	}

	return (
		<Link
			href="/docs"
			aria-label="Search documentation"
			className={`inline-flex h-9 w-full items-center gap-2 rounded-lg border bg-fd-secondary/50 px-3 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground ${className ?? ""}`}
		>
			<SearchIcon className="size-4" />
			<span className="flex-1 text-left">Search documentation</span>
			<kbd className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[10px] text-fd-muted-foreground">
				K
			</kbd>
		</Link>
	);
}

function Footer() {
	return (
		<footer className="mt-auto border-t bg-fd-card p-4 text-fd-secondary-foreground">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="mb-1 font-semibold text-sm">FlareDeck</p>
					<p className="text-xs">
						Desktop control panel for Cloudflare Tunnel.
					</p>
				</div>
			</div>
		</footer>
	);
}
