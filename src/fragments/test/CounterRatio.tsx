import { TextField, TextFieldRoot, TextFieldLabel } from "@/components/shadcn/textfield";
import { getCounterRatio, setCounterRatio } from "@/states/counter";

function CounterRatio() {
  return (
    <TextFieldRoot>
      <TextFieldLabel>Ratio:</TextFieldLabel>
      <TextField
        value={getCounterRatio().toString()}
        onChange={(e) => {
          setCounterRatio(parseInt(e.target.value));
        }}
      />
    </TextFieldRoot>
  );
}

export default CounterRatio;
