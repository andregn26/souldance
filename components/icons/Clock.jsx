import React from "react";

const Clock = ({ className, fill = "currentColor" }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={fill} className={`${className} w-5 h-5`}>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Clock;
