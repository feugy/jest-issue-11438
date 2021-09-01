import { sayHi } from "../src/index.js";

it("should greet a second time", async () => {
  expect(await sayHi()).toEqual("Hi!");
});
