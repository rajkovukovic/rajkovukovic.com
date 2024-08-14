export function generateStars(inputString: string): string {
	// Get the length of the input string
	const length = inputString.length;

	// Generate a string of asterisks with the same length
	const stars = '•'.repeat(length);

	return stars;
}
