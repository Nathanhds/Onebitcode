async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number")
    return Promise.reject("arguments must be of type number");
  else return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);
    const result = await imc(weight, height);
    console.log(`O resultado do Imc foi de ${result}`);
    if (result < 18.5) {
      console.log("Situação: Magreza");
    } else if (result < 25) {
      console.log("Situação: Normal");
    } else if (result < 30) {
      console.log("Situação: Sobrepeso");
    } else if (result < 40) {
      console.log("Situação: Obsidade");
    } else {
      console.log("Situação: Obesidade Grave");
    }
  } catch (err) {
    console.log(err);
  }
}
showImc(62, 1.82);
showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(120, 1.8);
