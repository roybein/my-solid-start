import { createEffect, createSignal } from "solid-js";

const [getCounter, setCounter] = createSignal(0);
const [getCounterRatio, setCounterRatio] = createSignal(1);

createEffect(() => {
  console.log('getCounterRatio', getCounterRatio())
})

export {
  getCounter,
  setCounter,
  getCounterRatio,
  setCounterRatio
}
