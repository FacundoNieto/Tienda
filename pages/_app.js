/*página muy importante, resumir acá qué rol cumple en la app, por lo pronto puede verse que importa
los estilos globales del proyecto*/

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

/*https://nextjs.org/docs/advanced-features/custom-app
Next.js uses the App component to initialize pages. You can override it and control the page initialization.
Which allows you to do amazing things like:

Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages
Add global CSS
*/
