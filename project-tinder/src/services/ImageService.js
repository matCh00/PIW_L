import axios from "axios";
import DatabaseService from "./DatabaseService";


const getImageSource = () => {

  // pobranie listy studentów
  DatabaseService.getStudentList().then((res) => {
    // const data = res.data;
    const data = res;

    data.forEach((e) => {

      // zapytanie
      axios({
        url: "https://picsum.photos/200/200",
        method: "GET",
        responseType: "blob",
      })
      .then((response) => {
        
        // tworzenie objektu
        let blob = URL.createObjectURL(response.data);

        // zapisanie objektu w Local Storage
        localStorage.setItem(e.id + "_image", JSON.stringify(blob));
      });
    });
  });
};

const ImageService = {
  getImageSource,
};

export default ImageService;
