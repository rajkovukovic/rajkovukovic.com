import {
	IoCloseCircleOutline,
	IoDocumentOutline,
	IoLockOpenOutline,
	IoSettingsOutline,
} from '$lib/icons';

export const routes = [
	{ path: '/password-generator', icon: IoLockOpenOutline },
	{ path: '/resume-248', icon: IoDocumentOutline },
	{ path: '/settings', icon: IoSettingsOutline },
];

export const route404 = { path: '', icon: IoCloseCircleOutline };
