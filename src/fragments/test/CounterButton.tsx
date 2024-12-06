import { getCounter, getCounterRatio, setCounter } from '@/states/counter';
import { Button } from '@/components/shadcn/button'

const CounterButton = () => {
  return (
    <div>
      <Button
        onClick={() => setCounter(getCounter() + getCounterRatio())}
      >
        Increment
      </Button>
    </div>
  )
}

export default CounterButton;
