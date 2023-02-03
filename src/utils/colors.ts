export const COLORS = {
  primary: '#3558CD',
};

const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

const pokemonImageBackgroundColors: string[] = [
  convertHexToRGBA('#B692F6', 0.5),
  convertHexToRGBA('#FFAED7', 0.5),
  convertHexToRGBA('#6CE9A6', 0.5),
  convertHexToRGBA('#F65D97', 0.5),
  convertHexToRGBA('#OOOOOO', 0.5),
  convertHexToRGBA('#FFC200', 0.5),
  convertHexToRGBA('#8BF9F3', 0.5),
  convertHexToRGBA('#E9FC52', 0.5),
];

const pokemonImageFirstGroup: string[] = ['A', 'B', 'C', 'D'];
const pokemonImageSecondGroup: string[] = ['E', 'F', 'G', 'H'];
const pokemonImageThirdGroup: string[] = ['I', 'J', 'K'];
const pokemonImageFourthGroup: string[] = ['L', 'M', 'N'];
const pokemonImageFifthGroup: string[] = ['O', 'P', 'Q'];
const pokemonImageSixthGroup: string[] = ['R', 'S', 'T'];
const pokemonImageSeventhGroup: string[] = ['U', 'V', 'W'];
const pokemonImageEighthGroup: string[] = ['X', 'Y', 'Z'];

const pokemonImageAlphabetGroup = [
  pokemonImageFirstGroup,
  pokemonImageSecondGroup,
  pokemonImageThirdGroup,
  pokemonImageFourthGroup,
  pokemonImageFifthGroup,
  pokemonImageSixthGroup,
  pokemonImageSeventhGroup,
  pokemonImageEighthGroup,
];

// This method will return a color based on the {character} provided
// All the letters in the alphabet have been grouped into 7 categories and a specific color will be returned for all the characters per group

export const getPokemonImageBackgroundColors = (character: string) => {
  for (const element of pokemonImageAlphabetGroup) {
    if (element.includes(character.toUpperCase())) {
      return pokemonImageBackgroundColors[
        pokemonImageAlphabetGroup.indexOf(element)
      ];
    }
  }
  // default to a random color
  const tempColors = [...pokemonImageBackgroundColors];
  return tempColors.sort(() => Math.random() - 0.5)[0];
};
