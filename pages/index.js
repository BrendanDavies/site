import Head from 'next/head';
import { Header } from '../components/Header';
import { Title } from '../components/Title';

const App = () => (
  <>
    <Head>
      <title>Brendan Davies</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#09111C"></meta>
    </Head>
    <div className="h-screen">
      <Header></Header>
      <Title></Title>
    </div>
  </>
);

export default App;
