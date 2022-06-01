import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../styles/theme";
import { RegisterPatient } from "./index";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";

import "jest-styled-components";

jest.useFakeTimers();

const render = (component) =>
  create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

const navigationMock = jest.fn(() => undefined);

describe("<RegisterPatient />", () => {
  it("Should render by default", () => {
    const testRenderer = render(<RegisterPatient navigation={navigationMock} />);
    const testInstance = testRenderer.root;

    const textFields = testInstance.findAllByType(TextField);

    expect(textFields.length).toBe(5);

    const expectedPropsTextField = [
      { placeholder: "Nome completo", label: "Nome completo" },
      { placeholder: "E-mail", label: "E-mail" },
      { placeholder: "Senha", label: "Senha" },
      { placeholder: "(99) 99999-9999", label: "Telefone" },
      { placeholder: "DD/MM/AAAA", label: "Data de nascimento" },
    ];

    expectedPropsTextField.forEach((props, index) => {
      expect(textFields[index].props.placeholder).toBe(props.placeholder);
      expect(textFields[index].props.label).toBe(props.label);
    });

    const buttons = testInstance.findAllByType(Button);

    expect(buttons.length).toBe(2);
    expect(buttons[0].props.children).toBe("Criar Conta");
    expect(buttons[1].props.children).toBe("Cancelar");
  });
});
