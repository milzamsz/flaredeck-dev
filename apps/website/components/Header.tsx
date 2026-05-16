"use client";

import { cn } from "@/lib/utils";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";
import { Container } from "./Container";
import { Logo } from "./shared/Logo";
import { Button } from "./ui/button";

const GITHUB_REPO = "https://github.com/milzam/flaredeck";
const GITHUB_RELEASES = "https://github.com/milzam/flaredeck/releases";
const DOCS_URL = "/docs";

function MobileNavLink({
	href,
	children,
	target,
}: {
	href: string;
	children: React.ReactNode;
	target?: string;
}) {
	return (
		<Popover.Button
			as={Link}
			href={href}
			target={target}
			className="block w-full p-2"
		>
			{children}
		</Popover.Button>
	);
}

function MobileNavIcon({ open }: { open: boolean }) {
	return (
		<svg
			aria-hidden="true"
			className="h-3.5 w-3.5 overflow-visible stroke-muted-foreground"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
		>
			<path
				d="M0 1H14M0 7H14M0 13H14"
				className={cn("origin-center transition", open && "scale-90 opacity-0")}
			/>
			<path
				d="M2 2L12 12M12 2L2 12"
				className={cn(
					"origin-center transition",
					!open && "scale-90 opacity-0",
				)}
			/>
		</svg>
	);
}

function BodyScrollLock({ lock }: { lock: boolean }) {
	useEffect(() => {
		document.body.style.overflow = lock ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [lock]);
	return null;
}

function MobileNavigation() {
	return (
		<Popover>
			{({ open, close }) => (
				<>
					<BodyScrollLock lock={open} />
					<Popover.Button
						className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
						aria-label="Toggle Navigation"
					>
						<MobileNavIcon open={open} />
					</Popover.Button>
					{open && createPortal(
						<div className="fixed inset-0 z-40 bg-background/50" onClick={() => close()} />,
						document.body
					)}
					<Transition.Root>
						<Transition.Child
							as={Fragment as any}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								as="div"
								className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl border border-border bg-background p-4 text-lg tracking-tight text-primary shadow-xl ring-1 ring-border/5 max-h-[80vh] overflow-y-auto"
							>
								<MobileNavLink href="/#features">Features</MobileNavLink>
								<hr className="m-2 border-border" />
								<MobileNavLink href="/#faqs">FAQ</MobileNavLink>
								<hr className="m-2 border-border" />
								<MobileNavLink href={DOCS_URL} target="_blank">
									Documentation
								</MobileNavLink>
								<hr className="m-2 border-border" />
								<MobileNavLink href={GITHUB_RELEASES} target="_blank">
									<Button className="w-full" asChild>
										<div className="group relative mx-auto flex w-full max-w-fit flex-row items-center justify-center rounded-2xl text-sm font-medium">
											<span>Download</span>
										</div>
									</Button>
								</MobileNavLink>
							</Popover.Panel>
						</Transition.Child>
					</Transition.Root>
				</>
			)}
		</Popover>
	);
}

export function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 py-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container>
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="/" aria-label="Home" className="flex items-center gap-2">
							<Logo className="h-8 w-auto" />
							<span className="text-lg font-semibold text-primary">FlareDeck</span>
						</Link>
						<div className="hidden md:flex md:items-center md:gap-x-6">
							<Link
								href="/#features"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
							>
								Features
							</Link>
							<Link
								href="/#faqs"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
							>
								FAQ
							</Link>
							<Link
								href={DOCS_URL}
								target="_blank"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
							>
								Documentation
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-x-4 md:gap-x-5">
						<Button
							variant="outline"
							className="rounded-full max-md:hidden"
							asChild
						>
							<Link
								href={GITHUB_REPO}
								target="_blank"
								aria-label="FlareDeck on GitHub"
								className="flex items-center gap-2"
							>
								<svg
									aria-hidden="true"
									className="h-4 w-4 fill-current"
									viewBox="0 0 24 24"
								>
									<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
								</svg>
								GitHub
							</Link>
						</Button>

						<div className="-mr-1 md:hidden">
							<MobileNavigation />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
}
