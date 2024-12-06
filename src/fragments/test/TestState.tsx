import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import CounterRatio from "./CounterRatio";
import MenuTypeSelect from "./MenuTypeSelect";
import MenuDisplay from "./MenuDisplay";

const TestState = () => {
  return (
    <div class="p-20 flex flex-row gap-2">

      <div class="flex-1 p-4 border border-gray-100">
        <div class="flex flex-col gap-2">
          Test counter
          <CounterDisplay />
          <CounterRatio />
          <CounterButton /> 
        </div>
      </div>

      <div class="flex-1 p-4 border border-gray-100">
        <div class="flex flex-col gap-2">
          Test fetch data
          <MenuTypeSelect />
          <MenuDisplay />
        </div>
      </div>

    </div>
  );  
}

export default TestState