import UrlParser from '../../routes/url-parser';
import gunungResource from '../../data/gunung-resource';
import { createGunungDetailTemplate } from '../templates/templates-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detailGunung" class="detailGunung"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const gunung = await gunungResource.detailGunung(url.id);
    const detailgunung = gunung.data.note;
    const gunungContainer = document.querySelector('#detailGunung');
    gunungContainer.innerHTML = createGunungDetailTemplate(detailgunung);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      gunung: {
        nama: gunung.nama,
        bentuk: gunung.bentuk,
        tinggi: gunung.tinggi,
        letusan_terakhir: gunung.letusan_terakhir,
        geolokasi: gunung.geolokasi,
        status: gunung.status,
        keamanan: gunung.keamanan,
      },
    });
  },
};

export default Detail;
