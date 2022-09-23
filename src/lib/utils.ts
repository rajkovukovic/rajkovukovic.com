export function makeFinite(value: any, fallbackValue: number): number {
	return Number.isFinite(value) ? value : fallbackValue;
}
