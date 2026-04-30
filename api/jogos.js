export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;

  const hoje = new Date();
  const dataFormatada = hoje.toISOString().split("T")[0];

  const ano = hoje.getFullYear(); // pega ano automático

  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures?date=${dataFormatada}&season=${ano}`,
    {
      headers: {
        "x-apisports-key": API_KEY
      }
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
