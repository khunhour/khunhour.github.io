import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
	return (
		<footer>
			<div>Designed {"&"} Built By Khunhour</div>
			<div>
				<a href="https://github.com/khunhour/portfolio">
					<FaGithub className="footer-img" />
				</a>
			</div>
		</footer>
	);
}
