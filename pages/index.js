"use client"
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Navbar, Container, Nav } from 'react-bootstrap';

export default function Home(){

  const url = 'http://ik1-201-74412.vs.sakura.ne.jp:5000/list'

  const [data,setData] = useState({data:[]})
  const [word, setWord] = useState('')
  const [gogen, setGogen] = useState('')

  const onChangeHandler = (e) => {
    setWord(e.target.value)
  }

  const onGogenChangeHandler = (e) => {
    setGogen(e.target.value)
  }

  const searchButtonHandler = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "word":word }),
    })

    const resjson = await res.json()
    console.log(resjson.body.data.gogen)
    setGogen(resjson.body.data.gogen)
  }

  const resistButtonHandler = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/resist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": word,
        "gogen": gogen
      }),
    })

    const resjson = await res.json()
    console.log(resjson)
    alert("登録完了")
  }

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      setData(res);
    });
  },[])
 
  return (
    <Layout header="gogen with chatGPT" title="韓国語の語源検索">
      <div className="container">

        <Form onSubmit={searchButtonHandler}>
          <Form.Group className="mb-3">
            <Form.Control className="mb-3" type="text" value={word} onChange={onChangeHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="primary mb-3" type="submit">語源を検索する</Button>
          </Form.Group>
        </Form>

        <Form onSubmit={resistButtonHandler}>
          <Form.Group className="mb-3">
            <Form.Control rows={5} as="textarea" aria-label="With textarea" value={gogen} onChange={onGogenChangeHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="secondary" size="sm" type="submit">この語源をDBに登録する</Button>
          </Form.Group>
        </Form>

        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>gogen</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((value, key)=>(
              <tr key={key}>
                <th>{value.id}</th>
                <th>{value.gogen}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
