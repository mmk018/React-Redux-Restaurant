export default class RestoService {
  getMenuItems = async () => {
    await fetch("http://localhost:3004/menu")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        /*  console.log(data); */
        console.log(data);
      });
    /*  return []; */
  };
}
