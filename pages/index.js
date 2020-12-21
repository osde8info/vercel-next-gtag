import Html from 'next/html'
import Head from 'next/head'
import Page from '../components/Page'

export default function Home() {
  return (
    <Html>
      <Head>
        <title>not amazon shopping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <h1>This is the Home page</h1>
      </Page>
    </Html>
  )
}
