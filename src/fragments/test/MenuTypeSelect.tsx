import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from '@/components/shadcn/select'
import {
  getMenuType, setMenuType, getMenuOptions,
  fetchMenuOptions, fetchMenuInfo,
} from '@/states/menu';
import {
  FaSolidSort as SortIcon, FaSolidCheck as CheckIcon
} from 'solid-icons/fa'

const MenuTypeSelect = () => {
  fetchMenuOptions()

  const onChangeType = (type) => {
    setMenuType(type);
    fetchMenuInfo();
  }

  return (
    <>
      <Select
        options={getMenuOptions()}
        onChange={onChangeType}
        itemComponent={props => (
          <SelectItem item={props.item}>
            {props.item.rawValue}
          </SelectItem>
        )}
      >
        <SelectTrigger>
          <SelectValue<string>>
            {state => state.selectedOption()}
          </SelectValue>
        </SelectTrigger>
        <SelectContent />
      </Select>
    </>
  );
};

export default MenuTypeSelect;  