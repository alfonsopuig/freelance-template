import '../styles/globals.css';

import localFont from '@next/font/local';
import Layout from '../components/Layout';

const outfitFont = localFont({ src: '../public/fonts/Outfit-VariableFont_wght.woff2' });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfitFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
