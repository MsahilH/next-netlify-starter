import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sahil Starter!</title>
        <link rel="icon" href="./images/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my sahil's app!" />
        <p className="description">
          Get started changing for testing. <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
