import {
	IoChevronBack,
	IoCloseCircleOutline,
	IoContrast,
	IoHammerOutline,
	IoLanguageOutline,
	IoLockOpenOutline,
	IoSettingsOutline,
} from '$lib/icons';


export const routes = [
	{ action: 'settings', icon: IoSettingsOutline },
	{ path: '/password-generator', icon: IoLockOpenOutline },
	{ path: '/resume-248', icon: IoHammerOutline },
];

export const settingsRoutes = [
	{ action: 'back', icon: IoChevronBack },
	{ action: 'language', icon: IoLanguageOutline, emoji: undefined },
	{ action: 'theme', icon: IoContrast },
];

export const route404 = { path: '', icon: IoCloseCircleOutline };
