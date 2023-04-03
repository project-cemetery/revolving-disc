import { createSignal, createEffect } from "../lib";

export function setupCounter(element) {
  const [count, setCount] = createSignal(0);

  element.addEventListener("click", () => setCount(count() + 1));

  createEffect(() => {
    element.innerHTML = `count is ${count()}`;
  });

  return [count];
}
