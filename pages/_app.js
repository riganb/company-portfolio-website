import '../styles/main.css'
import Master from '../components/layout/Master';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Master>
    <Component {...pageProps} />
    </Master>
    </>
  )
}
