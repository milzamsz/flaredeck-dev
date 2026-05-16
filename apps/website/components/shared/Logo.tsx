export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1024 1024"
			className="h-7 w-7"
			{...props}
		>
			<defs>
				<linearGradient id="flaredeck-bg" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0" stopColor="#FAAD3F" />
					<stop offset="1" stopColor="#FFD580" />
				</linearGradient>
			</defs>
			{/* Rounded square background */}
			<rect
				x="18"
				y="18"
				width="988"
				height="988"
				rx="200"
				ry="200"
				fill="url(#flaredeck-bg)"
				stroke="#F38020"
				strokeWidth="36"
			/>
			{/* Flame + two stacked bars */}
			<g fill="#1c1812">
				<rect x="205" y="635" width="676" height="123" rx="22" />
				<rect x="164" y="522" width="635" height="154" rx="22" />
				<polygon points="307,564 326,519 430,361 433,328 595,328 598,361 702,519 721,564" />
			</g>
		</svg>
	);
}
