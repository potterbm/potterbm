export default string => string
  .replace(/[A-Z]/g, (char) => ` ${char}`)      // Add a space before capital letters
  .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first character
