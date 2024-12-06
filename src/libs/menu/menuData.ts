import fs from 'fs'
import path from 'path'

const __dirname = import.meta.dirname
const file = path.resolve(__dirname, './menu.json');
const menuJson = fs.readFileSync(file, 'utf8');
const menuData = JSON.parse(menuJson);

export default menuData