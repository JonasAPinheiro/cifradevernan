export function decifrar(textoCifrado, chave) {
  if (!/^[01]*$/.test(textoCifrado) || textoCifrado.length % 8 !== 0) {
    throw new Error("Texto cifrado deve conter grupos de 8 bits.");
  }

  const chaveBuffer = Buffer.from(chave, "utf-8");

  const mensagemBuffer = Buffer.alloc(textoCifrado.length / 8);

  for (let i = 0; i < mensagemBuffer.length; i++) {
    const byte = textoCifrado.slice(i * 8, (i + 1) * 8);
    mensagemBuffer[i] = parseInt(byte, 2);
  }

  if (mensagemBuffer.length !== chaveBuffer.length) {
    throw new Error(
      "A chave deve ter o mesmo tamanho do texto cifrado em bytes.",
    );
  }

  const resultado = Buffer.alloc(mensagemBuffer.length);

  for (let i = 0; i < mensagemBuffer.length; i++) {
    resultado[i] = mensagemBuffer[i] ^ chaveBuffer[i];
  }

  return resultado.toString("utf-8");
}
