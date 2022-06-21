import * as React from "react";
import * as Terminal from "./components/Terminal";
import * as ContextProvider from "./contexts";
import {
  TerminalContext as _TerminalContext,
  TerminalContextProvider as _TerminalContextProvider
} from "./contexts/TerminalContext";
import { StyleContext } from "./contexts/StyleContext";
import { ThemeContext } from "./contexts/ThemeContext";
import * as _Editor from "./components/Editor";
import { useClickOutsideEvent as _useClickOutsideEvent } from "./hooks/terminal";

export function ReactTerminal(props: any): any {
  return (
    <ContextProvider.default>
      <Terminal.default {...props} />
    </ContextProvider.default>
  );
}

export const TerminalContext = _TerminalContext;
export const TerminalContextProvider = _TerminalContextProvider;
export { StyleContext };
export { ThemeContext };
export const Editor = _Editor.default;
export const useClickOutsideEvent = _useClickOutsideEvent;

export default {
  ReactTerminal,
  TerminalContextProvider,
  TerminalContext,
  StyleContext,
  ThemeContext,
  Editor,
  useClickOutsideEvent
};
