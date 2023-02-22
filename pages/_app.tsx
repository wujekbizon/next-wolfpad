import '../styles/globals.css';
import '../styles/lexical.css';
import '../styles/chat.css';
import '../styles/resizable.css';
import '../styles/excalidraw.css';
import '../styles/error.css';
import '../styles/gradients.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import { Provider } from 'react-redux';
import { store } from '../state';
import Layout from '../components/Layout/Layout';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer, Zoom } from 'react-toastify';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            transition={Zoom}
            draggablePercent={60}
          />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
