import firebase from '../database/firebase';
import { Todo } from '../components/types';
const fb = firebase.firestore().collection('todos');

export const getTodos = () => {
  const unsubscribe = fb
    .get()
    .then(snapshot => snapshot.docs.map(doc => ({ key: doc.id, ...doc.data() }) ) )
  return unsubscribe;
}

export const postTodo = (todo: string) => fb.add({ todo, done: false });

export const updateTodo = (todos: Todo[], key: string) => {
  const todo = todos.find((item: Todo) => item.key === key);
  if (todo) {
    fb.doc(key).update({ done: !todo.done })
  }
}

export const deleteTodo = (key: string) => fb.doc(key).delete();