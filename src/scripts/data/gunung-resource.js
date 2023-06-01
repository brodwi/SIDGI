import data from '../globals/gunung.json';
class gunungResource {
    static async listGunung() {
        const response = await data;
        return response;
    }
}
export default gunungResource;
