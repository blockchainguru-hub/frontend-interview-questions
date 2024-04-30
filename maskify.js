/**
 * Implement a Credit Card Masker | Klarna Frontend Interview Question | JavaScript
 *
 * In this question the candidate needs to implement a function that takes a credit
 * card number and returns the masked version. Many users have reported that this
 * question was asked in the frontend interview process of global companies like Klarna.
 *
 * Functional Requirements
 *  It should replace all but the 1st and last 4 digits in the provided sequence.
 *  Should not mask input shorter than 6 characters. Done
 *  Should not mask non-numeric characters.
 *  Should return empty string for all other input types apart from string and number. Done
 *
 * Syntax - maskify(cardNumber);
 *
 * Examples
 * maskify('5512103073210694');  => // 5###########0694
 * maskify('4556-3646-0793-5616') => // 4###-####-####-5616
 */

const maskify = (cardNumber) => {
  const cardNumberType = typeof cardNumber;
  if (cardNumberType !== "string" && cardNumberType !== "number") {
    return "";
  }
  const stringedCardNumber = String(cardNumber);
  if (stringedCardNumber.length < 6) {
    return cardNumber;
  }

  const firstCharacter = stringedCardNumber.slice(0, 1);
  const lastFourCharacters = stringedCardNumber.slice(-4);
  const maskedCharacters = stringedCardNumber
    .slice(1, stringedCardNumber.length - 4)
    .replace(/\d/g, "#");
  return `${firstCharacter}${maskedCharacters}${lastFourCharacters}`;
};

console.log(maskify("1123-3213-1231"));