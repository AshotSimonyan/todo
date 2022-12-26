import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD8RLvJSFIGXBSa8YtRcpzlEK80wEf1dU8",
  authDomain: "react-task-99b16.firebaseapp.com",
  projectId: "react-task-99b16",
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

export function getUsers(cb) {
  return firestore
      .collection("users")
      .onSnapshot(cb);
}

export function getUser(documentId) {
  return firestore
      .collection("users")
      .doc(documentId)
      .get();
}

export function updateUser(documentId, data) {
  return firestore
      .collection("users")
      .doc(documentId)
      .update(data);
}

export function getUserTodos(documentId, cb) {
  firestore
    .collection("users")
    .doc(documentId)
    .collection("todos")
    .onSnapshot(cb);
}

export function addTodo(userId, todo) {
  return firestore
    .collection("users")
    .doc(userId)
    .collection("todos")
    .add(todo);
}

export function updateTodo(userId, todoId, data) {
  return firestore
    .collection("users")
    .doc(userId)
    .collection("todos")
    .doc(todoId)
    .update(data);
}
