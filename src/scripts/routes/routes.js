import About from '../views/pages/about-us';
import Favorite from '../views/pages/favorite';
import LandingPage from '../views/pages/landing-page';
import Main from '../views/pages/main';
 
const routes = {
  '/': LandingPage,
  '/favorite': Favorite,
  '/main': Main,
  '/about-us': About,
};
 
export default routes;