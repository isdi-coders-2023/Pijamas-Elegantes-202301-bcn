import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("given a herosection component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Browse Games By Popularity and Genre'", () => {
      render(<HeroSection />);

      const heroSectionText = screen.getByRole("heading", {
        name: "Browse Games By Popularity and Genre",
      });
      expect(heroSectionText).toBeInTheDocument();
    });
  });
});
