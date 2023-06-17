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
        id: detailgunung.id,
        nama: detailgunung.nama,
        bentuk: detailgunung.bentuk,
        tinggi: detailgunung.tinggi_meter,
        letusan_terakhir: detailgunung.estimasi_letusan_terakhir,
        geolokasi: detailgunung.geolokasi,
        status: detailgunung.status,
        keamanan: detailgunung.keamanan,
        gambar: detailgunung.gambar,
      },
    });
  },
};

export default Detail;
