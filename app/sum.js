import { createEffect, createComputed } from "../lib";

export function setupLargest(element, counters) {
  const [sum] = createComputed(() => {
    let result = null;

    for (const count of counters) {
      result = Math.max(result ?? 0, count());
    }

    return result;
  });

  createEffect(() => {
    element.innerHTML = `max is ${sum()}`;
  });
}
