import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DragScrollWrapper from "../DragScrollWrapper";
import "@testing-library/jest-dom/vitest";

/**
 * Pruebas básicas para DragScrollWrapper
 */

describe("DragScrollWrapper", () => {
  it("renderiza el contenido hijo", () => {
    render(
      <DragScrollWrapper>
        <span>Contenido</span>
      </DragScrollWrapper>
    );

    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });
});
