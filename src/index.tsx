import * as React from "react";
import * as Terminal from "./components/Terminal";
import * as ContextProvider from "./contexts";
import {
  TerminalContext as _TerminalContext,
  TerminalContextProvider as _TerminalContextProvider
} from "./contexts/TerminalContext";

export function ReactTerminal(props: any): any {
  return (
    <ContextProvider.default>
      <Terminal.default {...props} />
    </ContextProvider.default>
  );
}

export const TerminalContext = _TerminalContext;
export const TerminalContextProvider = _TerminalContextProvider;

export default {
  ReactTerminal,
  TerminalContextProvider,
  TerminalContext
};
