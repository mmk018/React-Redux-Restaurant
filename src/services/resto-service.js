export default class RestoService {
  _apiBase = "http://localhost:3004";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const result = await res.json();
    console.log(result);
    return result.menu;

    //return await res.json();
  }

  async getMenuItems() {
    return await this.getResource("/menu/");
  }

  async getItem(id) {
    const res = await this.getResource("/menu/");
    const item = res.find((el) => {
      console.log(`el.id: ${el.id}, id: ${id}`);
      return el.id === +id;
    });
    return item;
  }
}
