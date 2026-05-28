const commonPatterns = [
  "1234",
  "password",
  "qwerty",
  "admin",
  "abcd",
];

export function extractFeatures(password) {
  const length = password.length;

  const numbers =
    (password.match(/[0-9]/g) || []).length;

  const specials =
    (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

  const uppercase =
    (password.match(/[A-Z]/g) || []).length;

  const lowercase =
    (password.match(/[a-z]/g) || []).length;

  const hasPattern = commonPatterns.some(pattern =>
    password.toLowerCase().includes(pattern)
  );

  return {
    length,
    numbers,
    specials,
    uppercase,
    lowercase,
    hasPattern: hasPattern ? 1 : 0
  };
}