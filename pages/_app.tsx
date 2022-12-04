import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import Head from 'next/head';

import { mainStore } from '../stores/main.store';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

import '../styles/globals.scss';

const store = mainStore.create();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <div className='app'>
         <Head>
            <title>Animetwork</title>
            <link rel='icon' href='/favicon.ico' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
         </Head>
         <BrowserRouter>
            <Provider store={store}>
               <Header />
               <div className='appContainer'>
                  {store.authorized ? (
                     <>
                        <Navbar />
                        <div className='appContainer__Content'>
                           <Component {...pageProps} />
                        </div>
                     </>
                  ) : (
                     <Component {...pageProps} />
                  )}
               </div>
            </Provider>
         </BrowserRouter>
      </div>
   );
};

export default MyApp;
