import React from "react";
import { css, keyframes } from "styled-components";

// Default content if component is empty - good for prototyping
export const Skeleton = css`
	content: "";
	display: block;
	background: linear-gradient(-90deg, #f0f0f0 0%, #f4f4f8 50%, #f0f0f0 100%);
	background-size: 200px 32px;
	border-radius: 4px;
	animation: pulse 1.5s ease-in-out infinite;
	@keyframes pulse {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: -135% 0%;
		}
	}
`;
