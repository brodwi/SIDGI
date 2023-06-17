import FavoriteGunungIdb from '../data/favorite-gunung-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/templates-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, gunung }) {
    this._likeButtonContainer = likeButtonContainer;
    this._gunung = gunung;

    await this._renderButton();
  },

  async _renderButton(){
    const { id } = this._gunung;

    if (await this._isGunungExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isGunungExist(id) {
    const gunung = await FavoriteGunungIdb.getGunung(id);
    return !!gunung;
  },
 
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteGunungIdb.putGunung(this._gunung);
      await this._renderButton();
    });
  },
 
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteGunungIdb.deleteGunung(this._gunung.id);
      await this._renderButton();
    });
  },
};

export default LikeButtonInitiator;