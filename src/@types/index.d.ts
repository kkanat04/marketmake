declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.mp4' {
	const src: string;
	export default src;
}
declare module '*.gif';
