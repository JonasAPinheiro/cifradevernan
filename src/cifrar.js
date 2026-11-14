export function cifrar(textoClaro, chave) {
  const mensagemBuffer = Buffer.from(textoClaro, "utf-8");
  const chaveBuffer = Buffer.from(chave, "utf-8");

  if (mensagemBuffer.length !== chaveBuffer.length) {
    throw new Error("A chave deve ter o mesmo tamanho da mensagem em bytes.");
  }

  let resultado = "";

  for (let i = 0; i < mensagemBuffer.length; i++) {
    const xor = mensagemBuffer[i] ^ chaveBuffer[i];

    resultado += xor.toString(2).padStart(8, "0");
  }

  return resultado;
}
