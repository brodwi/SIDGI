import gunungResource from "../../data/gunung-resource";

const Main = {
  async render() {
    return `
      <h2>Halaman Utama SIDGI</h2>
      <h3>memuat tampilan utama dan fitur"</h3>
    `;
  },
 
  async afterRender() {
    const gunung = await gunungResource.listGunung();
    console.log(gunung);
  },
};
 
export default Main;