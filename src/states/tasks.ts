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

const [state, setState] = createStore<StoreTasks>({
  title: 'My Tasks',
  tasks: [],
})

export {
  state,
  setState
}