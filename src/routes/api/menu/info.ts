import type { APIEvent } from '@solidjs/start/server'
import menuData from '@/libs/menu/menuData'

export const GET = async (apiEvent: APIEvent) => {
  const url = new URL(apiEvent.request.url)
  const type = url.searchParams.get('type')
  const info = type ?  menuData[type] : null

  return {
    info,
  }
}
