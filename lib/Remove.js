import React from "react";

const SvgRemove = ({ width = 24, height = 24, ...props }) => (
	<svg fill="none" className="icon" aria-hidden="true" {...props}>
		<path
			d="M480 392.508c0 10.052-3.52 18.598-10.559 25.637l-51.296 51.296C411.106 476.48 402.56 480 392.508 480c-10.053 0-18.598-3.52-25.638-10.559L256 358.571l-110.87 110.87C138.09 476.48 129.545 480 119.492 480c-10.052 0-18.598-3.52-25.637-10.559l-51.296-51.296C35.52 411.106 32 402.56 32 392.508c0-10.053 3.52-18.598 10.56-25.638L153.428 256 42.559 145.13C35.52 138.09 32 129.545 32 119.492c0-10.052 3.52-18.598 10.56-25.637l51.295-51.296C100.894 35.52 109.44 32 119.492 32c10.053 0 18.598 3.52 25.638 10.56L256 153.428l110.87-110.87C373.91 35.52 382.455 32 392.508 32c10.052 0 18.598 3.52 25.637 10.56l51.296 51.295C476.48 100.894 480 109.44 480 119.492c0 10.053-3.52 18.598-10.559 25.638L358.571 256l110.87 110.87C476.48 373.91 480 382.455 480 392.508z"
			fill="currentColor"
		/>
	</svg>
);

export default SvgRemove;