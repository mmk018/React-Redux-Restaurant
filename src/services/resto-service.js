export default class RestoService {
  getMenuItems = async () => {
    const res = await fetch("http://localhost:3004/menu").then((response) => {
      return response.json();
    });
    return res;
  };
}
