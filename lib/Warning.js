import React from "react";

const SvgWarning = ({ width = 24, height = 24, ...props }) => (
	<svg fill="none" className="icon" aria-hidden="true" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M429.067 456.4H82.342c-20.328 0-36.703-8.151-44.91-22.369-8.195-14.205-7.081-32.449 3.097-50.05L213.89 83.695C224.07 66.093 239.302 56 255.718 56c16.417 0 31.649 10.107 41.814 27.709L470.88 383.995c10.178 17.602 11.306 35.845 3.097 50.05-8.208 14.204-24.568 22.355-44.91 22.355zM255.718 92.445c-2.384 0-6.467 2.927-10.249 9.493L72.106 402.21c-3.783 6.553-4.282 11.563-3.097 13.619 1.185 2.056 5.767 4.126 13.347 4.126h346.739c7.566 0 12.148-2.084 13.348-4.14 1.199-2.056.685-7.052-3.098-13.619L265.983 101.91c-3.783-6.552-7.88-9.479-10.25-9.479l-.015.014zm-21.641 202.898c.956 9.95 2.57 17.274 4.939 22.385 2.97 6.438 8.48 9.835 15.946 9.835 7.309 0 12.848-3.44 16.046-9.964 2.598-5.31 4.24-12.534 4.982-22.013l6.424-73.633a200.589 200.589 0 0 0 1.071-20.571c0-12.078-1.585-21.2-4.854-27.923-2.627-5.396-8.566-11.821-21.87-11.821-8.551 0-15.589 2.898-20.928 8.594-5.254 5.611-7.909 13.32-7.909 22.927 0 6.195.457 16.417 1.356 30.407l4.797 71.777zm1.884 56.004c5.325-5.325 11.906-8.038 19.601-8.038 7.651 0 14.275 2.684 19.7 7.98 5.467 5.339 8.223 11.906 8.223 19.501 0 8.522-2.856 15.36-8.466 20.357-5.453 4.854-11.891 7.295-19.157 7.295-7.352 0-13.862-2.413-19.344-7.181-5.696-4.94-8.594-11.835-8.594-20.457 0-7.58 2.712-14.133 8.037-19.457z"
			fill="currentColor"
		/>
	</svg>
);

export default SvgWarning;