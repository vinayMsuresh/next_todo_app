import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return <>
      <h2 className='bg-dark text-white mb-4 py-2 px-5'>Todo App</h2>
      <Component {...pageProps} />
    </>
}

export default MyApp
