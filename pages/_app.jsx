import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        />
        <link
          async
          href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'
          rel='stylesheet'
        />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
