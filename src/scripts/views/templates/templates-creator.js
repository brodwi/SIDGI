const createMountainItemTemplate = (gunung) => `
  <div class="card-gunung">
  <div class="gunung-item">
    
    <div class="gunung-item__content">
      <h3 class="gunung__title"><a href="/#/detail">${gunung.nama}</a></h3>
      <p>${gunung.nama}</p>
      <p>${gunung.status}</p>
    </div>
  </div>
  </div>
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
  createAboutTemplate,
}
