import type { NextPage } from 'next';
import Head from 'next/head';

import { Navigation } from '../components/global/Navigation';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DeVontae Moore</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navigation />
    </div>
  );
};

export default Home;
