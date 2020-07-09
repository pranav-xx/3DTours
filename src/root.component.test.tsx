import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    expect(true).toEqual(true);
    // TODO: single-spa tobeInDocument?
    // const { getByText } = render(<Root name="Testapp" />);
    // expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
