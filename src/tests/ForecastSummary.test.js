import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  it("renders the forecast details props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={Date.now()}
        temperature={{ min: 8, max: 16 }}
        description={"breezy as f*ck"}
        icon={"icon"}
      />
    );

    expect(getByText("breezy as f*ck")).toBeInstanceOf(HTMLDivElement);
  });
});
