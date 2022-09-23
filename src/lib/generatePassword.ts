
function getRandom(max: number) {
	return Math.floor(Math.random() * max);
}

function randomCharacter(characters: string): string {
	return characters.charAt(getRandom(characters.length));
}

function shuffle<T>(array: T[]): T[] {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const digitChars = '01234567890';
const specialChars = '-+.:,!?*';

const withouthSpecialChars = [upperChars, lowerChars, digitChars];
const withSpecialChars = [...withouthSpecialChars, specialChars];

export function generatePassword(characterCount: number, useSpecialCharacters: boolean): string {
	const availableGroups = useSpecialCharacters ? withSpecialChars : withouthSpecialChars;
	const minCharsPerGroup = Math.floor(characterCount / availableGroups.length);

	const result: string[] = [];

	// add minCharsPerGroup from each group
	for (let i = 0; i < minCharsPerGroup; i++) {
		for (const currentGroup of availableGroups) {
			result.push(randomCharacter(currentGroup));
		}
	}

	// fill missing chars by adding from all groups
	const availableChars = availableGroups.join('');
	while (result.length < characterCount) {
		result.push(randomCharacter(availableChars));
	}

	return shuffle(result).join('');
}
