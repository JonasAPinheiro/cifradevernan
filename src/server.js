import express from "express";
import cors from "cors";
import { cifrar } from "./cifrar.js";
import { decifrar } from "./decifrar.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Cifra de Vernam funcionando!",
  });
});

app.post("/cifrar", (req, res) => {
  const { textoClaro, chave } = req.body;

  if (
    typeof textoClaro !== "string" ||
    typeof chave !== "string" ||
    textoClaro.length === 0 ||
    chave.length === 0
  ) {
    return res.status(400).json({
      message: "Texto claro e chave são obrigatórios.",
    });
  }

  try {
    const textoCifrado = cifrar(textoClaro, chave);

    return res.status(200).json({
      textoCifrado,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Erro interno.",
    });
  }
});

app.post("/decifrar", (req, res) => {
  const { textoCifrado, chave } = req.body;

  if (
    typeof textoCifrado !== "string" ||
    typeof chave !== "string" ||
    textoCifrado.length === 0 ||
    chave.length === 0
  ) {
    return res.status(400).json({
      message: "Texto cifrado e chave são obrigatórios.",
    });
  }

  try {
    const textoClaro = decifrar(textoCifrado, chave);

    return res.status(200).json({
      textoClaro,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Erro interno.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
