export const convertToIdHash = (id: number) => {
  return `#${id.toString().padStart(3, '0')}`;
};

export const convertPokemonTypesToString = (typesList: string[]) => {
  return typesList.join(', ').toString();
};

export const capitalise = (str: string) => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calculateBMI = (weight: number, height: number) => {
  return (weight / (height * height)).toFixed(2);
};
