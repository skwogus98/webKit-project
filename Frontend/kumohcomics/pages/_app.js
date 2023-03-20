import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Header from "./../components/Header";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <div className="max-w-5xl mx-auto my-10">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    );
}
