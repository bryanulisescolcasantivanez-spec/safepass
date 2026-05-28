export function calculateEntropy(password) {
  let poolSize = 0;

  if (/[a-z]/.test(password)) poolSize += 26;
  if (/[A-Z]/.test(password)) poolSize += 26;
  if (/[0-9]/.test(password)) poolSize += 10;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) poolSize += 32;

  if (poolSize === 0) return 0;

  return Math.round(
    password.length * Math.log2(poolSize)
  );
}