export const identity = {
	name: 'NaviTheCoderboi',
	fullName: 'Navinder Singh',
	title: 'Developer & Student',
	location: 'Punjab, India',
	bio: 'A high school student from India who codes across the full stack — from low-level systems in C++ to polished web apps in TypeScript and Svelte. Surprisingly also a medical student.',
	github: 'https://github.com/NaviTheCoderboi',
	twitter: 'https://x.com/NaviTheCoderboi'
} as const;

export interface Project {
	title: string;
	description: string;
	tags: string[];
	year: string;
	link: string;
}

export const projects: Project[] = [
	{
		title: 'hq',
		description:
			'A study time tracker app built using web technologies and C++. Helps students manage and visualize their study sessions.',
		tags: ['TypeScript', 'C++', 'Desktop App'],
		year: '2025',
		link: 'https://github.com/NaviTheCoderboi/hq'
	},
	{
		title: 'ace-map',
		description:
			'An interactive map practicing tool for class 10 CBSE students. Built to make geography prep less painful.',
		tags: ['TypeScript', 'Vercel', 'Education'],
		year: '2025',
		link: 'https://github.com/NaviTheCoderboi/ace-map'
	},
	{
		title: 'vajra',
		description:
			'A fast, accurate, and beautiful command-line benchmarking tool written in C++. Designed for precise performance measurement.',
		tags: ['C++', 'CLI', 'Benchmarking'],
		year: '2025',
		link: 'https://github.com/NaviTheCoderboi/vajra'
	},
	{
		title: 'gleam',
		description:
			'A lightweight, minimal file system implementation in C++ that simulates basic Unix-like file operations on a virtual disk image.',
		tags: ['C++', 'Filesystem', 'Systems'],
		year: '2025',
		link: 'https://github.com/NaviTheCoderboi/gleam'
	}
];

export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		category: 'Languages',
		items: ['TypeScript', 'C++', 'Python', 'JavaScript', 'C']
	},
	{
		category: 'Frontend',
		items: ['Svelte', 'React', 'Astro', 'Tailwind CSS', 'HTML/CSS']
	},
	{
		category: 'Backend & Tools',
		items: ['Node.js', 'Bun', 'Git', 'Linux', 'Docker']
	}
];

export const stats = {
	repos: 38,
	stars: 25,
	followers: 18
} as const;

export const socials = [
	{ label: 'GitHub', href: identity.github, icon: 'GH' },
	{ label: 'X / Twitter', href: identity.twitter, icon: 'X' }
] as const;
