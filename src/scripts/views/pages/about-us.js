import { createAboutTemplate } from "../templates/templates-creator";
import profilResource from "../../data/profil-resource";

const About = {
    async render() {
      return `   
      <h3 class="about-us">Meet Our Team</h3>
      <h4 class="about-us">C23-M4064</h4>
      <div id="about" class="about"></div>
      `;
    },
   
    async afterRender() {
      const profil = await profilResource.listProfil();
      const profilContainer = document.querySelector('#about');
      profil.profil.forEach((abouts) => {
        profilContainer.innerHTML += createAboutTemplate(abouts);
      });
    },
  };
   
  export default About;