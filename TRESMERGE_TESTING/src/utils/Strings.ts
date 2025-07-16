export const startWithLowerCase = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1);

export const startWithCapitalized = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const greeting = (name: string) => `Hello ${name}`;
