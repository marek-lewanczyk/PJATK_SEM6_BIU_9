import { render, screen } from "@testing-library/react";
import WelcomeMessage from "./WelcomeMessage";
import { describe, it, expect } from "vitest";

describe("WelcomeMessage", () => {
  it("renders the name correctly", () => {
    render(<WelcomeMessage name="Marek" />);
    expect(screen.getByText("Welcome, Marek!")).toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(
      <WelcomeMessage name="Anna">
        <p>Dodatkowa treść</p>
      </WelcomeMessage>,
    );
    expect(screen.getByText("Dodatkowa treść")).toBeInTheDocument();
  });

  it("does not render children when not provided", () => {
    render(<WelcomeMessage name="Tomek" />);
    expect(screen.queryByText("Dodatkowa treść")).not.toBeInTheDocument();
  });
});
