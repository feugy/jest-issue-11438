export async function sayHi() {
  return (await import("./internals.js")).sayHi();
}
