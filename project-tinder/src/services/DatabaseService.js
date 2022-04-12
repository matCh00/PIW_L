import axios from "axios";

const API = "http://localhost:3000/";


const getStudentList = () => {
  return axios.get(API + "database/students.json");
};

const getGroupList = () => {
  return axios.get(API + "database/groups.json");
};


const DatabaseService = {
  getStudentList,
  getGroupList,
};

export default DatabaseService;
