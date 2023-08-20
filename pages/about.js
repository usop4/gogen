"use client"
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function About(){

  return (
    <Layout header="gogen with chatGPT" title="このサイトについて">
      <div className="container">
        <ul>
            <li>このサイトはOpenAIが提供するAPIにより、韓国語の語源を生成するサイトです。</li>
            <li>提供する情報に関する正確性については保証しかねます。</li>
            <li>APIは利用上限を設定しております。上限に達している場合は本サイトを利用できませんので、あらかじめご了承ください。</li>
            <li>掲載されている情報が著作権所有者の権利を侵害している場合、速やかに対処いたしますので、本サイトのGithubのissueにてご連絡ください。
                <ul>
                    <li>https://github.com/usop4/gogen/issues</li>
                </ul>
            </li>
        </ul>

      </div>
    </Layout>
  )
}
