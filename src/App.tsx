import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";

const App = () => {
  return (
    <AppContainer>
      <Column text="To do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TS" />
      </Column>
      <Column text="Done">
        <Card text="Use Static typing" />
      </Column>
    </AppContainer>
  );
};

export default App;
