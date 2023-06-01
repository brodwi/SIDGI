const LandingPage = {
    async render() {
      return `
        <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/hero1.jpeg');">
    <div class="heroinner">
        <h1 class="hero-title">SIDGI</h1>
        <p class="hero-desc">Sistem Informasi Data Gunung di indonesia.</p>
        
        <button onclick="window.location.href='#/main'" class="btn">START</button>
    </div>
</div>  
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default LandingPage;