import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Flex, Text } from "@chakra-ui/react";
import ArrayComponent from "./Components/ArrayComponent";
import ObjectComponent from "./Components/ObjectComponent";
function App() {
  return (
    <>
      <Flex justifyContent="center" mt="5%">
        <Text color="#2c3e50" fontSize="6xl" fontFamily="monospace">
          Js-Essentials
        </Text>
      </Flex>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/array" component={ArrayComponent} exact />
        <Route path="/object" component={ObjectComponent} exact />
      </Switch>
    </>
  );
}

export default App;
