import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';

export default function Layout(props){
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="google-site-verification" content="Q7DcTQpJOvWdN9iyyI_w7SfMmN7KY0tkw_xPF11qYnE" />
            </Head>
            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {props.title}
                </h3>
                {props.children}
            </div>
            <Footer footer=""></Footer>
            <Analytics />
        </div>

    )
}