import { Title } from "@solidjs/meta";
import Counter from "@/components/Counter";
import { Alert, AlertDescription, AlertTitle } from "@/components/shadcn/alert";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>

      <div class="flex flex-col items-center justify-center gap-20">
        <h1>Hello world</h1>

        <Counter />

        <div>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Visit{" "}
              <a href="https://start.solidjs.com" target="_blank">
                start.solidjs.com
              </a>{" "}
              to learn how to build SolidStart apps.
            </AlertDescription>
          </Alert>
        </div>

      </div>

    </main>
  );
}