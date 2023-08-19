export default async function handler(req, res) {

    const url = 'https://morocco.sakura.ne.jp/gogen/resist.php'
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body),
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    return res.status(200).json({ "message":"Success" })
  }
  