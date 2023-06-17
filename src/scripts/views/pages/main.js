import gunungResource from "../../data/gunung-resource";
import { createMountainItemTemplate } from "../templates/templates-creator";
import Spinner from "../../utils/spinner";

const Main = {
  async render() {
    Spinner.show();
    return `<center><h1 class="judulsearch">Daftar Gunung di Indonesia</h1></center>
    <center><input class="searchinputcontainer" type="text" id="search-input" placeholder="Cari Gunung"></center>
    <div id="main" class="main"></div>
    `;
  },
 
  async afterRender() {
    const gunung = await gunungResource.listGunung();
    const gunungContainer = document.querySelector('#main');
    gunung.data.gunung.forEach((mains) => {
      gunungContainer.innerHTML += createMountainItemTemplate(mains);
      Spinner.hide();
    });

    const searchInput = document.querySelector('#search-input');
    searchInput.addEventListener('keyup', () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredGunung = gunung.data.gunung.filter((mains) => {
        const nama = mains.nama.toLowerCase();
        return nama.includes(searchValue);
      });

      gunungContainer.innerHTML = '';
      filteredGunung.forEach((mains) => {
        gunungContainer.innerHTML += createMountainItemTemplate(mains);
      });
    });
  },
};
 
export default Main;