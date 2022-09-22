export const ownerName = typeof window !== 'undefined' ?
	window.location.hostname.toLocaleLowerCase() : '---';