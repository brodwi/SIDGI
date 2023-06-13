import gunungResource from "../../data/gunung-resource";
import { createMountainItemTemplate } from "../templates/templates-creator";

const Main = {
  async render() {
    return `
      
    <div id="main" class="main"></div>
    `;
  },
 
  async afterRender() {
    const gunung = await gunungResource.listGunung();
    const gunungContainer = document.querySelector('#main');
    gunung.gunung.forEach((mains) => {
      gunungContainer.innerHTML += createMountainItemTemplate(mains);
    });
    // console.log(gunung);
  },
};
 
export default Main;