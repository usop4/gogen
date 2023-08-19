export default async function handler(req, res) {

    const url = 'http://ik1-201-74412.vs.sakura.ne.jp:5000/resist'
    console.log(req.body)
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 送信データがJSON形式であることを指定
      },
      body: JSON.stringify(req.body), // JSONデータを文字列に変換して送信
    };
    
    // fetchを使用してPOSTリクエストを送信
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data); // レスポンスデータを表示
      })
      .catch(error => {
        console.error('Error:', error);
      });

    //const response = await fetch(url)
    //const data = await response.json()
    //console.log(data)
    //return res.status(200).json({ "body":data })

    return res.status(200).json({ "message":"Hello" })
  }
  