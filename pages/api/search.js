export default async function handler(req, res) {

  const url = 'http://ik1-201-74412.vs.sakura.ne.jp:5000/search/'+req.body.word
  console.log(url)

  const response = await fetch(url)
  const data = await response.json()
  console.log(data)

  return res.status(200).json({ "body":data })
}
