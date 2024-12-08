import { createStore } from 'solid-js/store'

type StoreTasks = {
  title: string,
  tasks: Array<Task>,
}

interface Task {
  id: number,
  text: string,
  isDone: boolean,
} 

const [store, setStore] = createStore<StoreTasks>({
  title: 'My Tasks',
  tasks: [],
})

const get = () => store
const set = setStore

export {
  get,
  set,
}