import App from 'next/app';
import GlobalStyle from 'styles/globalStyles';

export default class Portfolio extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <GlobalStyle />
                <Component {...pageProps} />
            </>
        );
    }
}
