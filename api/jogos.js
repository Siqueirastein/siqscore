export default async function handler(req, res) {

const API_KEY = "7f170775b65df8153a04c39d74efaqd";

const hoje = new Date().toISOString().split("T")[0];

const response = await fetch(
`https://v3.football.api-sports.io/fixtures?date=${hoje}`,
{
headers: {
"x-apisports-key": API_KEY
}
}
);

const data = await response.json();

res.status(200).json(data);

}
