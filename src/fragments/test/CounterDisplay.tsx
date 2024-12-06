import { getCounter, setCounter } from '@/states/counter';

const CounterDisplay = () => {
  return (
    <div>
      <h1>Counter: {getCounter()}</h1>
    </div>
  );
}

export default CounterDisplay;
