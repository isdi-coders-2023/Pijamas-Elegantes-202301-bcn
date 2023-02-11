import { screen, render } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it renders itself", () => {
    test("Then it should show a loader", () => {
      render(<Loading />);

      const loader = screen.getByRole("dialog", {
        name: "the page is loading",
      });

      expect(loader).toBeInTheDocument();
    });
  });
});
