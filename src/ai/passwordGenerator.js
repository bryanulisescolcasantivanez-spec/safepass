export function generatePassword(length = 16) {

  const uppercase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase =
    "abcdefghijklmnopqrstuvwxyz";

  const numbers =
    "0123456789";

  const specials =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allChars =
    uppercase +
    lowercase +
    numbers +
    specials;

  let password = "";

  const randomValues =
    new Uint32Array(length);

  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {

    const index =
      randomValues[i] % allChars.length;

    password += allChars[index];
  }

  return password;
}