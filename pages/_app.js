import '../styles/globals.css'
import Navbar from '../components/Navbar';
import Age from '../components/Age';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    
    <>
    <Age />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp
