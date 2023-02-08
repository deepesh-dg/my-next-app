import '@/assets/scss/global.scss';
import { ReduxWrapper } from '@/state';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, ...rest }: AppProps) {
    const { store, props } = ReduxWrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
