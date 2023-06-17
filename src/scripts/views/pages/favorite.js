import FavoriteGunungIdb from '../../data/favorite-gunung-idb';
import { createMountainItemTemplate } from '../templates/templates-creator';

const Favorite = {
  async render() {
    return `
      <div id="main" class="main"></div>
    `;
  },
   
  async afterRender() {
    const gunungs = await FavoriteGunungIdb.getAllGunungs();
    const gunungsContainer = document.querySelector('#main');
    gunungs.forEach((gunung) => {
      gunungsContainer.innerHTML += createMountainItemTemplate(gunung);
    });
  },
};
   
export default Favorite;
