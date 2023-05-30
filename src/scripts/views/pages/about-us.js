import { createAboutTemplate } from "../templates/templates-creator";
import profilResource from "../../globals/profil-resource.js";

const About = {
    async render() {
      return `
      <div id="about" class="about"></div>
      `;
    },
   
    async afterRender() {
      const profil = await profilResource.listProfil();
      const profilContainer = document.querySelector('#about');
      console.log(profil);
      profil.profil.forEach((abouts) => {
        profilContainer.innerHTML += createAboutTemplate(abouts);
      });
    },
  };
   
  export default About;