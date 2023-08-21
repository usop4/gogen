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
        if (!response.ok) {
          console.error('response.ok:', response.ok);
          console.error('esponse.status:', response.status);
          console.error('esponse.statusText:', response.statusText);
          throw new Error(response.statusText);
        }
        console.log('Response data:', data);
        return res.status(200).json({ "message":"Success" })
      })
      .catch(error => {
        console.error('Error:', error);
        return res.status(200).json({ "message":error })
      });

  }
  