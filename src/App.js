import "./App.css";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import {makeStyles} from '@material-ui/core';
import CompanyValues from './components/CompanyValues';
import CoverPage from "./components/CoverPage";
import NavBar from "./components/NavBar";
import CardMenus from "./components/CardMenus";
import Brands from "./components/Brands";
import BlogPosts from "./components/BlogPosts";
import FooterOffers from "./components/FooterOffers";
import FooterNewsletter from "./components/FooterNewsletter";
import FooterLast from "./components/FooterLast";
import Products from "./components/Products";
import HightlightProduct from "./components/HightlightProduct";

const useStyles = makeStyles( (theme) => ({
  flexRowCenterCenter: {
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  cardLayout: {
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={theme}>
        <div className='header'>
           <NavBar/>
           <CoverPage/>
        </div>
        <div className='indented'>
          <HightlightProduct/>
          <CardMenus/>
          <Brands/>
          <CompanyValues/>
          <Products/>
          <BlogPosts/>
        </div>
        <div className='footer'>
          <FooterOffers/>
          <FooterNewsletter/>
        </div>
        <div className='indented'>
          <FooterLast/>
        </div>
      </ThemeProvider>
  );
}

export default App;
