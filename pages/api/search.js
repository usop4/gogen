export default async function handler(req, res) {

  const url = 'https://morocco.sakura.ne.jp/gogen/search.php?q='+req.body.word

  const response = await fetch(url)

  const data = await response.json()
  console.log(data)

  return res.status(200).json({ "body":data })
}
