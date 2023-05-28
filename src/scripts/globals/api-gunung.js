import data from './gunung.json'
class ApiGunung {
    static async getAll() {
        const response = await data;
        return response;
    }
}
export default ApiGunung