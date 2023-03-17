import Footer from '@/components/Footer';
import '@/styles/globals.css'
import Header from './../components/Header';

export default function App({ Component, pageProps }) {
    return (
        <div className="max-w-5xl mx-auto">
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}
