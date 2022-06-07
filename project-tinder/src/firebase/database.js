import { firestore } from "./init";
import {collection, addDoc, Timestamp, query, where, getDocs} from 'firebase/firestore'


export const addNewStudent = async (user) => {
    try {
        await addDoc(collection(firestore, 'students'), {
            name: user.name,
            email: user.email,
            description: user.description,
            subject: user.subject,
            tags: user.tags,
          });
    } catch (err) {
        console.log({err});
    }
}

export const addNewGroup = async (group) => {
    try {
        await addDoc(collection(firestore, 'groups'), {
            name: group.name,
            description: group.description,
            members: group.members,
            subject: group.subject,
            emails: group.emails,
          });
    } catch (err) {
        console.log({err});
    }
}

export const addNewUser = async (username, email, password) => {
    try {
        await addDoc(collection(firestore, 'users'), {
            username: username,
            email: email,
            password: password,
          });
    } catch (err) {
        console.log({err});
    }
}

export const getAllStudents = async () => {
    const q = collection(firestore, "students");

    const students = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            students.push(doc.data());
        });
    } catch (err) {
        console.log({err});
    }
    console.log({students});
    return students;
}

export const getAllGroups = async () => {
    const q = collection(firestore, "groups");

    const groups = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            groups.push(doc.data());
        });
    } catch (err) {
        console.log({err});
    }
    console.log({groups});
    return groups;
}

export const getAllUsers = async () => {
    const q = collection(firestore, "users");

    const users = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            //console.log(doc.data());
            users.push(doc.data());
        });
    } catch (err) {
        console.log({err});
    }
    console.log({users});
    return users;
}