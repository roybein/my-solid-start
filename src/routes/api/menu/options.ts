import menuData from '@/libs/menu/menuData'

export const GET = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const options =  Object.keys(menuData)

  return {
    options
  }
}


