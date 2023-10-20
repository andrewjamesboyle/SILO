import { render } from "@redwoodjs/testing/web";

import MapLayout from "./MapLayout";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("MapLayout", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MapLayout />);
    }).not.toThrow();
  });
});
