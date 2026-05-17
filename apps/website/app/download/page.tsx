import type { Metadata } from "next";
import { DownloadClient } from "./download-client";

export const metadata: Metadata = {
	title: "Download",
	description:
		"Download FlareDeck for Windows, macOS, or Linux. Free and open source.",
};

export default function DownloadPage() {
	return <DownloadClient />;
}
