import axios from "axios";

const LINK = "https://picsum.photos/";


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min)) + min;
}

const getImageSource = () => {
  //return LINK + "200";
  return LINK + "id/" + getRandomInt(1, 1084).toString() + "/200";
};


const ImageService = {
  getImageSource,
};

export default ImageService;
