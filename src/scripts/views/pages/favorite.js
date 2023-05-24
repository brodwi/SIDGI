const Favorite = {
    async render() {
      return `
        <h2>Halaman Favorit SIDGI</h2>
        <h3>memuat tampilan item favorite</h3>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Favorite;