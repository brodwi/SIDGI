const LandingPage = {
    async render() {
      return `
        <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/hero1.jpeg');">
    <div class="heroinner">
        <h1 class="hero-title">SIDGI</h1>
        <p class="hero-desc">SIDGI (Sistem Informasi Data Gunung di Indonesia) merupakan ensiklopedia mengenai data gunung di Indonesia. Sistem ini menyajikan beberapa informasi seperti sejarah gunung, lokasi gunung, hingga status gunung.</p>
        
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