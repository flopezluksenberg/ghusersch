const Endpoint = `https://api.github.com`;

export default async function handler(req, res) {
  try {
    const url = `${Endpoint}/${req.url.replace('/api/', '')}`;

    const response = await fetch(url);

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e?.message });
  }
}
