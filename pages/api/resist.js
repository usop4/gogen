'use strict';
export default function handler(req, res) {

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
      .then(response => {
        return res.status(200).json({ "message":response.data.message })
      })
      .catch(error => {
        return res.status(200).json({ "message":error })
      });

  }
  