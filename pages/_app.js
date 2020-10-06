import Head from 'next/head';
import Header from '../components/Header.jsx';
import '../styles/index.css';
import { primary } from '../tokens/colors';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brendan Davies</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={primary}></meta>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
