import '../styles/globals.css';
import {NextUIProvider} from '@nextui-org/react';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return(
    <NextUIProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </NextUIProvider>
  );
}

export default MyApp
