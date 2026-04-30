export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;

  // 🔥 DATA CORRIGIDA
  const hoje = new Date();
  const dataFormatada =
    hoje.getFullYear() + "-" +
    String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoje.getDate()).padStart(2, "0");

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${dataFormatada}&league=71&season=2024`,
      {
        headers: {
          "x-apisports-key": API_KEY
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar jogos",
      detalhes: error.message
    });
  }
}
