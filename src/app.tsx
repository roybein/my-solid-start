import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, For } from "solid-js";
import "./app.css";
import { NavigationMenu, NavigationMenuTrigger } from "@/components/shadcn/navigation-menu";

export default function App() {
  const meus = [
    { name: "Index", path: "/" },
    { name: "About", path: "/about" },
    { name: "Test UI", path: "/test/ui" },
    { name: "Test State", path: "/test/state" },
    { name: "Test Store", path: "/test/store" },
  ]
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <NavigationMenu class="m-2">
            <For each={meus}>
              {item => (
                <NavigationMenuTrigger
                  as="a"
                  href={item.path}
                >
                  {item.name}
                </NavigationMenuTrigger>
              )}
            </For>  
          </NavigationMenu>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
