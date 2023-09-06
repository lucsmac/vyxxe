import { render, screen } from "@testing-library/react";
import Page from "../pages/index";

describe("<Component />", () => {
  it("should render correctly", () => {
    render(<Page />);

    expect(screen.getByText("Hello, Next.js!")).toBeVisible();
  });
});
