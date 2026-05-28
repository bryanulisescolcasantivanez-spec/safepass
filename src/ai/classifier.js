export function classifyPassword(features, entropy) {

  if (
    features.length < 8 ||
    entropy < 40 ||
    features.hasPattern
  ) {
    return {
      level: "Débil",
      color: "red",
      score: 30,
      message:
        "La contraseña tiene patrones inseguros o poca complejidad."
    };
  }

  if (
    features.length >= 8 &&
    entropy >= 40 &&
    entropy < 70
  ) {
    return {
      level: "Media",
      color: "orange",
      score: 65,
      message:
        "Buena base, pero puedes agregar símbolos y más longitud."
    };
  }

  return {
    level: "Segura",
    color: "green",
    score: 100,
    message:
      "Excelente contraseña. Alta entropía y buena diversidad."
  };
}