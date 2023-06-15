import UrlParser from '../../routes/url-parser';
import gunungResource from '../../data/gunung-resource';
import { createGunungDetailTemplate } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
          <div id="detailGunung" class="detailGunung"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const gunung = await gunungResource.detailGunung(url.id);
    const detailgunung = gunung.data.note;
    const restaurantContainer = document.querySelector('#detailGunung');
    restaurantContainer.innerHTML = createGunungDetailTemplate(detailgunung);
  },
};

export default Detail;
