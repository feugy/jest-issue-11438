import { sayHi } from "../src/index.js";

it("should greet", async () => {
  expect(await sayHi()).toEqual("Hi!");
});
