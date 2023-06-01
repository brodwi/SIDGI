import data from '../globals/profil.json';
class profilResource {
    static async listProfil() {
        const response = await data;
        return response;
    }
}
export default profilResource;