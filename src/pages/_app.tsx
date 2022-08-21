import { useEffect } from 'react';
import '../styles/index.css'; 
import '../components/features.css';
import { AppProps } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import theme from '../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

Router.events.on('routeChangeComplete', () => {
    window.scroll({
      top: 0,
      left: 0,
    //   behavior: 'smooth'
    });
  });

const App = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
            <QueryClientProvider
                client={
                    new QueryClient({
                        defaultOptions: {
                            queries: {
                                refetchOnWindowFocus: false,
                                staleTime: 5000 * 60,
                            },
                        },
                    })
                }
            >
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />

                    <div>
                        <Component {...pageProps} />
                    </div>
                </MuiThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    );
};
export default App;
