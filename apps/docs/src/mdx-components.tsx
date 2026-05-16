import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import * as FilesComponents from "fumadocs-ui/components/files";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps, FC } from "react";

function APIPage(_props: Record<string, unknown>) {
	return null;
}

export function getMDXComponents(components?: MDXComponents) {
	return {
		...(icons as unknown as MDXComponents),
		...defaultMdxComponents,
		...FilesComponents,
		Accordion,
		Accordions,
		APIPage,
		Callout,
		Card,
		Cards,
		ImageZoom,
		Step,
		Steps,
		Tab,
		Tabs,
		TypeTable,
		blockquote: Callout as unknown as FC<ComponentProps<"blockquote">>,
		...components,
	} satisfies MDXComponents;
}

declare module "mdx/types.js" {
	namespace JSX {
		type Element = React.JSX.Element;
		type ElementClass = React.JSX.ElementClass;
		type ElementType = React.JSX.ElementType;
		type IntrinsicElements = React.JSX.IntrinsicElements;
	}
}

declare global {
	type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
