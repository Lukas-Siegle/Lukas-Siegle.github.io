import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	const scaleConversion = (
		valueA: number,
		scaleA: [number, number],
		scaleB: [number, number]
	) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (
		style: Record<string, number | string | undefined>
	): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export function ExactBirthdate(date: Date): { years: number, months: number, days: number, hours: number, minutes: number, seconds: number } {
	const now = new Date();

	let years = now.getFullYear() - date.getFullYear();
	let months = now.getMonth() - date.getMonth();
	let days = now.getDate() - date.getDate();
	let hours = now.getHours() - date.getHours();
	let minutes = now.getMinutes() - date.getMinutes();
	let seconds = now.getSeconds() - date.getSeconds();
	if (seconds < 0) {
		minutes -= 1;
		seconds += 60;
	}
	if (minutes < 0) {
		hours -= 1;
		minutes += 60;
	}
	if (hours < 0) {
		days -= 1;
		hours += 24;
	}
	if (days < 0) {
		months -= 1;
		const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
		days += previousMonth.getDate();
	}
	if (months < 0) {
		years -= 1;
		months += 12;
	}
	const exact_birthdate = {
		years: years,
		months: months,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	}
	return exact_birthdate

}