"use client"
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Form, Navbar, Container, Nav } from 'react-bootstrap';

export default function Home(){

  const url = 'https://morocco.sakura.ne.jp/gogen/list.php'

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
    await setGogen("...")

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
    fetchData()
  }

  const fetchData = async() =>{
    const response = await fetch(url)
    const responseData = await response.json()
    setData(responseData)
  }

  useEffect(() => {
    fetchData()
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

        <Table bordered >
          <thead>
            <tr>
              <th>単語</th>
              <th>語源</th>
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
        </Table>
      </div>
    </Layout>
  )
}
