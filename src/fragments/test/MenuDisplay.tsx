import { getMenuInfo } from '@/states/menu'

const MenuDisplay = () => {
  return (
    <div class="overflow-auto">
      {JSON.stringify(getMenuInfo())}
    </div>
  )
}

export default MenuDisplay
