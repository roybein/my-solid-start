import { createSignal } from "solid-js";

const [getMenuOptions, setMenuOptions] = createSignal<any>([]);
const [getMenuType, setMenuType] = createSignal<string>();
const [getMenuInfo, setMenuInfo] = createSignal<any>();

const fetchMenuOptions = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/menu/options')
    const data = await res.json()

    setMenuOptions(data.options ?? [])
  } catch (err) {
    console.error(err)
  } 
}

const fetchMenuInfo = async () => {
  console.log('fetchMenuInfo')
  try {
    let url = 'http://localhost:3000/api/menu/info'
    if (getMenuType()) {
      url += '?type=' + getMenuType()
    } 
    const res = await fetch(url)
    const data = await res.json()

    setMenuInfo(data.info)
  } catch (error) {
    console.error(error)
  }
}

export {
  getMenuType,
  setMenuType,
  getMenuInfo,
  setMenuInfo,
  getMenuOptions,
  setMenuOptions,
  fetchMenuOptions,
  fetchMenuInfo,
}
