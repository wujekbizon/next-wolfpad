import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/chat.css';
import '../styles/resizable.css';
import '../styles/excalidraw.css';
import '../styles/error.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../state';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
