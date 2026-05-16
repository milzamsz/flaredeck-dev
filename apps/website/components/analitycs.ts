type GAEventProps = {
	action: string;
	category: string;
	label: string;
};

export function trackGAEvent({ action, category, label }: GAEventProps) {
	if (typeof window !== "undefined" && "gtag" in window) {
		(window as any).gtag("event", action, {
			event_category: category,
			event_label: label,
		});
	}
}
