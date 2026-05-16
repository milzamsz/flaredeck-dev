import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";

export const source = loader({
	baseUrl: "/docs",
	source: docs.toFumadocsSource(),
	plugins: [lucideIconsPlugin()],
});

export type Page = InferPageType<typeof source>;
