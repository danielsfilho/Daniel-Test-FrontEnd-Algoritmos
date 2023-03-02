function generarId() {
  const caracteresDefault = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let standard1 = "";
  let standard2 = "";
  let standard3 = "";
  let standard4 = "";

  for (let i = 0; i < 4; i++) {
    standard1 += caracteresDefault.charAt(Math.floor(Math.random() * caracteresDefault.length));
    standard2 += caracteresDefault.charAt(Math.floor(Math.random() * caracteresDefault.length));
    standard3 += caracteresDefault.charAt(Math.floor(Math.random() * caracteresDefault.length));
    standard4 += caracteresDefault.charAt(Math.floor(Math.random() * caracteresDefault.length));
  }

  return `${standard1}-${standard2}-${standard3}-${standard4}`;
}

console.log(generarId());