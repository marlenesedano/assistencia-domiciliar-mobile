import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../styles/theme";
import { Button } from "./index";

import "jest-styled-components";

const renderJson = (component) =>
  create(<ThemeProvider theme={theme}>{component}</ThemeProvider>).toJSON();

describe("<Button />", () => {
  it("Should render button with default props", () => {
    const tree = renderJson(<Button>My Label</Button>);

    const currentLabel = tree.children[0];

    expect(currentLabel.children[0]).toBe("My Label");
  });

  it("Should render button with loading", () => {
    const tree = renderJson(<Button isLoading>Label</Button>);

    expect(tree.children.length).toBe(1);
    expect(tree.children[0].type).toBe("ActivityIndicator");
  });
});
