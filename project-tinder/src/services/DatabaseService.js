import axios from "axios";

const API = "http://localhost:5000/";


const checkConnection = () => {
  axios.get(API).catch((err) => {
    if (err) {
      alert(
        "json server is NOT running \nuse the command below: \nnpm run server"
      );
    }
  });
};

const getStudentList = () => {
  return axios.get(API + "students");
};

const getGroupList = () => {
  return axios.get(API + "groups");
};

const getUserList = () => {
  return axios.get(API + "users");
};

const addAnnouncement = (user) => {
  return axios.post(API + "students", {
    name: user.name,
    email: user.email,
    description: user.description,
    subject: user.subject,
    tags: user.tags,
  });
};

const addGroup = (group) => {
  return axios.post(API + "groups", {
    name: group.name,
    description: group.description,
    members: group.members,
    subject: group.subject,
    emails: group.emails,
  });
};

const addUser = (username, email, password) => {
  return axios.post(API + "users", {
    username: username,
    email: email,
    password: password,
  });
};


const DatabaseService = {
  checkConnection,
  getStudentList,
  getGroupList,
  getUserList,
  addAnnouncement,
  addGroup,
  addUser,
};

export default DatabaseService;
