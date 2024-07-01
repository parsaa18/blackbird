const DashBoardIcon = ({ color = "#292D32", w = "32", h = "32" }) => {
	return (
		<svg
			width={w}
			height={h}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.7193 30.3333H8.27935C4.62602 30.3333 1.66602 27.36 1.66602 23.7067V13.8267C1.66602 12.0133 2.78602 9.73332 4.22602 8.61332L11.4127 3.01332C13.5727 1.33332 17.026 1.25332 19.266 2.82665L27.506 8.59999C29.0927 9.70665 30.3327 12.08 30.3327 14.0133V23.72C30.3327 27.36 27.3727 30.3333 23.7193 30.3333ZM12.6393 4.58665L5.45268 10.1867C4.50602 10.9333 3.66602 12.6267 3.66602 13.8267V23.7067C3.66602 26.2533 5.73268 28.3333 8.27935 28.3333H23.7193C26.266 28.3333 28.3327 26.2667 28.3327 23.72V14.0133C28.3327 12.7333 27.4127 10.96 26.3593 10.24L18.1193 4.46665C16.5993 3.39999 14.0927 3.45332 12.6393 4.58665Z"
				fill={color}
			/>
			<path
				d="M16 25C15.4533 25 15 24.5467 15 24V20C15 19.4533 15.4533 19 16 19C16.5467 19 17 19.4533 17 20V24C17 24.5467 16.5467 25 16 25Z"
				fill={color}
			/>
		</svg>
	);
};
export default DashBoardIcon;