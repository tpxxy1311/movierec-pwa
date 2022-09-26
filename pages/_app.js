import "../styles/globals/globals.scss";
import 'normalize.css/normalize.css';
import Router  from "next/router"
import { parseCookies } from "nookies"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultSeo } from "next-seo";
import getConfig from "next/config";
import SEO from "../next-seo.config";
import MobileNav from "../components/mobileNav";
import Header from "../components/header";
import HelpPanel from "../components/helpPanel";
import ContextWrapper from '../components/contextWrapper';

const {publicRuntimeConfig}=getConfig();
const queryClient = new QueryClient();

function MyApp({ Component, pageProps, lgInfo, cookieInfo, seenlistNumbers, watchlistNumbers, reclistNumbers }) {
  
  return (
  <>
  <DefaultSeo {...SEO} />
  <ThemeProvider defaultTheme="dark">
    <ContextWrapper lgInfo={lgInfo} cookieInfo={cookieInfo} seenlistNumbers={seenlistNumbers} watchlistNumbers={watchlistNumbers} reclistNumbers={reclistNumbers}>
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <HelpPanel/>
      <MobileNav/>
    </ContextWrapper>
  </ThemeProvider>
  </>
  )
}

function redirectUser(ctx, location) {
  if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
  } else {
      Router.push(location);
  }
}


MyApp.getInitialProps = async ({ctx}) => {
  
  const jwt = parseCookies(ctx).jwt;
  const cookie  = parseCookies(ctx).accept;
  let id;
  
  if(parseCookies(ctx).id){
    id=parseCookies(ctx).id
  }
  else{
    id=2
  }

  let lgInfo;
  let cookieInfo;
  
  const res1 = await fetch(`${publicRuntimeConfig.API_URL}/api/seenlists/?populate=*&&filters[user][id][$eq]=${id}`)
  const seenlist = await res1.json()
  const seenlistNumbers = seenlist.data.map(item => item.attributes.movie.data.id)
    
  const res2 = await  fetch(`${publicRuntimeConfig.API_URL}/api/watchlists/?populate=*&&filters[users_permissions_user][id][$eq]=${id}`)
  const watchlist = await res2.json()
  const watchlistNumbers = watchlist.data.map(item => item.id)
  
  const res3 = await  fetch(`${publicRuntimeConfig.API_URL}/api/reclists/?populate=*&&filters[user][id][$eq]=${id}`)
  const reclist = await res3.json()
  const reclistNumbers = reclist.data.map(item => item.attributes.movie.data.id)
  
 
  if (!jwt || jwt=="undefined") {
    lgInfo=false;
    if (ctx.pathname === "/dashboard") {
        redirectUser(ctx, "/login");
    }
  }
  else{
    lgInfo=true;
  }
  if(!cookie){
    cookieInfo=false
  }
  else{
    cookieInfo=true
  }
  return{
    jwt,
    lgInfo,
    cookieInfo,
    seenlistNumbers,
    watchlistNumbers,
    reclistNumbers
  }
}

export default MyApp
