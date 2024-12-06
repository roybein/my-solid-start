import { createSignal } from "solid-js";
import { Button } from '@/components/shadcn/button'

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button onClick={() => setCount(count() + 1)} as="button">
      Clicks: {count()}
    </Button>
  );
}
