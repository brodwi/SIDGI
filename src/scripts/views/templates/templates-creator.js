import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createMountainItemTemplate = (gunung) => `
  <div class="card-gunung">
  <div class="gunung-item">
  <img class="gunung-poster lazyload" data-src="${gunung.gambar}" alt="${gunung.nama}" crossorigin="anonymous"></img>
    <div class="gunung-item__content">
      <h3 class="gunung__title"><a href="/#/detail/${gunung.id}">${gunung.nama}</a></h3>
      <p>Status : ${gunung.status}</p>
      <p>Keamanan : ${gunung.keamanan}</p>
      <p>Lokasi : <a href="https://www.google.com/maps/place/${gunung.geolokasi}">${gunung.geolokasi}</a></p>
    </div>
  </div>
  </div>
`;

const createGunungDetailTemplate = (gunung) => `
  <h2 class="gunung__name">${gunung.nama}</h2>
  <img class="gunung__image" src="${gunung.gambar}" alt="${gunung.nama}" crossorigin="anonymous"/>
  <div class="gunung__info">
    <h3>Information</h3>
    <h4>Bentuk</h4>
    <p>${gunung.bentuk}</p>
    <h4>Tinggi</h4>
    <p>${gunung.tinggi_meter}</p>
    <h4>Letusan Terakhir</h4>
    <p>${gunung.estimasi_letusan_terakhir}</p>
    <h4>Geolokasi</h4>
    <p><a href="https://www.google.com/maps/place/${gunung.geolokasi}">${gunung.geolokasi}</a></p>
    <h4>Status</h4>
    <p>${gunung.status}</p>
    <h4>Keamanan</h4>
    <p>${gunung.keamanan}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this mountain" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this mountain" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createAboutTemplate = (profil) => `
<div class="about-container">
<div class="slide-content">
    <div class="card">
      <div class="image-content">
        <span class="overlay"></span>
        <div class="card-image">
          <img class="card-img" src="${profil.gambar}" alt="${profil.nama}" ></img>
        </div>
      </div>
      <div class="card-content">
        <h2 class="name">${profil.nama}</h2>
        <p class="id">${profil.id}</p>
        <p class="description">${profil.kampus}</p>
        <a href="${profil.contact}"><button  class="button">Contact</button></a>
      </div>
    </div>
</div>
</div>`;

export {
  createMountainItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createAboutTemplate,
  createGunungDetailTemplate
}
