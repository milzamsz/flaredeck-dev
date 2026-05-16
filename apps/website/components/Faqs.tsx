import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./Container";

const faqs = [
	{
		question: "What is FlareDeck?",
		answer:
			"FlareDeck is a free, open-source desktop application that provides a graphical interface for managing Cloudflare Tunnels on your local machine. It wraps the cloudflared CLI with an intuitive UI for profile management, DNS routing, and real-time monitoring.",
	},
	{
		question: "How does FlareDeck differ from the Cloudflare Dashboard?",
		answer:
			"Unlike the Cloudflare Dashboard which manages tunnels via API, FlareDeck works locally with your cloudflared CLI and configuration files. It's designed for development workflows where you need quick tunnel management without leaving your desktop.",
	},
	{
		question: "Is FlareDeck free?",
		answer:
			"Yes! FlareDeck is completely free and open-source under the MIT license. You can use it for personal and commercial projects without any restrictions.",
	},
	{
		question: "What platforms are supported?",
		answer:
			"FlareDeck currently supports Windows (native and WSL) with macOS and Linux support planned. The application is built with Tauri for native performance on each platform.",
	},
	{
		question: "Does FlareDeck require a Cloudflare API key?",
		answer:
			"No. FlareDeck communicates directly with your local cloudflared CLI binary and configuration files. It never connects to the Cloudflare API. You just need cloudflared installed and authenticated.",
	},
	{
		question: "How does WSL support work?",
		answer:
			"FlareDeck automatically detects WSL environments and rewrites localhost addresses to your WSL VM's IP. This means services running in Ubuntu WSL are seamlessly accessible through your Cloudflare Tunnel without manual configuration.",
	},
	{
		question: "Can I run multiple tunnels simultaneously?",
		answer:
			"Yes! FlareDeck supports multiple named tunnel profiles that can run concurrently. Each profile has its own ingress rules, DNS configuration, and log stream.",
	},
	{
		question: "Where is my configuration stored?",
		answer:
			"FlareDeck stores tunnel configurations in the standard cloudflared directory (~/.cloudflared/). Your configs are plain YAML files compatible with cloudflared CLI, so you're never locked into FlareDeck.",
	},
];

export function Faqs() {
	return (
		<section
			id="faqs"
			aria-labelledby="faq-title"
			className="relative overflow-hidden bg-black py-20 sm:py-32"
		>
			<Container className="relative flex flex-col gap-10">
				<div className="mx-auto w-full justify-center lg:mx-0">
					<h2
						id="faq-title"
						className="text-center font-display text-3xl tracking-tight text-primary sm:text-4xl"
					>
						Frequently asked questions
					</h2>
					<p className="mt-4 text-center text-lg tracking-tight text-muted-foreground">
						If you can't find what you're looking for, please open an issue
						on our GitHub repository.
					</p>
				</div>

				<Accordion
					type="single"
					collapsible
					className="mx-auto  w-full max-w-3xl"
				>
					{faqs.map((faq, columnIndex) => (
						<AccordionItem value={`${columnIndex}`} key={columnIndex}>
							<AccordionTrigger className="text-left">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</Container>
		</section>
	);
}
