import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
<body>
  <div>
    <h1>please pass this test</h1>
  </div>
</body>
import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
