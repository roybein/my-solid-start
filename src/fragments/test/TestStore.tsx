import * as storeTasks from '@/states/test/tasks'
import { TextFieldRoot, TextField } from '@/components/shadcn/textfield'
import { Button } from '@/components/shadcn/button'
import { Checkbox, CheckboxControl, CheckboxLabel } from '@/components/shadcn/checkbox'
import { For, createEffect, createMemo } from 'solid-js'
import { produce } from 'solid-js/store'

const TestStore = () => {
  // use ref
  let input!: HTMLInputElement

  // use signal
  // const [getText, setText] = createSignal("")

  const addTask = (text: string) => {
    console.log('addTask', text)

    // storeTasks.set((state) => ({
    //   tasks: [
    //     ...state.tasks,
    //     {
    //       id: state.tasks.length,
    //       text,
    //       isDone: false,
    //     }
    //   ],
    // }))

    // use produce instead
    storeTasks.set(produce((state) => {
      state.tasks.push({
        id: state.tasks.length,
        text,
        isDone: false,
      })
    }))
  }

  const removeTask = (id: number) => {
    storeTasks.set({
      tasks: [...storeTasks.get().tasks].filter(t => t.id !== id),
    })
  } 

  const toggleTask = (id: number) => {
    console.log('toggleTask', id)

    // storeTasks.set((state) => {
    //   const taskNew = {...state.tasks[id]}
    //   taskNew.isDone = !taskNew.isDone

    //   const tasksNew = [...state.tasks]
    //   tasksNew[id] = taskNew

    //   const stateNew = {
    //     ...state,
    //     tasks: taskNew
    //   }

    //   return stateNew
    // })

    // use produce instead
    storeTasks.set(produce((state) => {
      state.tasks[id].isDone = !state.tasks[id].isDone
    }))
  }

  createEffect(() => {
    console.log('watch tasks[2] isDone', storeTasks.get().tasks[2]?.isDone)
  })

  const taskTotal = createMemo(() => {
    const total = storeTasks.get().tasks.length
    console.log('memo taskTotal', total)

    return total
  })

  const taskDone = createMemo(() => {
    const done = storeTasks.get().tasks.filter(task => task.isDone).length
    console.log('memo taskDone', done)

    return done 
  })

  return (
    <div class="w-full p-8 flex flex-col gap-y-4">
      <div class="font-bold text-2xl">
        {storeTasks.get().title}
      </div>
      <div>
        <div>
          Tasks Total: {taskTotal()}
        </div>
        <div>
          Tasks Done: {taskDone()}
        </div>
      </div>
      <div>
        <TextFieldRoot>
          <TextField
            // use signal
            // value={getText()}
            // onChange={(e) => setText(e.target.value)} 

            // use ref
            ref={input}
          />
        </TextFieldRoot>
      </div>
      <Button
        onClick={() => {
          if (!input.value.trim()) return
          addTask(input.value)
          input.value = ""
        }}
      >
        Add Task
      </Button>
      <div class="flex flex-col gap-y-4">
        <For each={storeTasks.get().tasks}>
          {
            (task) => (
              <div class="flex flex-row justify-between gap-x-4">
                <Checkbox class="flex items-center space-x-2"
                  checked={task.isDone}
                  onChange={() => {
                    toggleTask(task.id)
                  }}
                >
                  <CheckboxControl />
                  <CheckboxLabel class="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {task.text}
                  </CheckboxLabel>
                </Checkbox>
                <Button
                  size="sm"
                  class="text-xs"
                  onClick={() => removeTask(task.id)}
                >
                  Remove
                </Button>
              </div>
            )
          }
        </For>  
      </div>
      <div>
        <pre>
          {JSON.stringify(storeTasks.get(), null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default TestStore;
