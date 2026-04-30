export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;

  const dataFormatada = "2024-04-30"; // DATA FIXA PRA TESTAR

  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures?date=${dataFormatada}&season=2024`,
    {
      headers: {
        "x-apisports-key": API_KEY
      }
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
