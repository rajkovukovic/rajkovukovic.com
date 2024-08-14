export function makeFinite(value: unknown, fallbackValue: number): number {
	return Number.isFinite(value) ? value as number : fallbackValue;
}
