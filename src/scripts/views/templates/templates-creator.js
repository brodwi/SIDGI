const createAboutTemplate = (profil) => `
<div class="about-container">
<div class="slide-content">
  <div class="card-wrapper">
    <div class="card">
      <div class="image-content">
        <span class="overlay"></span>
        <div class="card-image">
          <img class="card-img" src="${profil.gambar}" alt="${profil.nama}" ></img>
        </div>
      </div>
      <div class="card-content">
        <h2 class="name">${profil.nama}</h2>
        <p class="description">${profil.kampus}</p>
        <a href="${profil.contact}"><button  class="button">Contact</button></a>
      </div>
    </div>
  </div>
</div>
</div>`;
export {createAboutTemplate}
