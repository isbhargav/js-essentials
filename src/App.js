import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Flex, Text } from "@chakra-ui/react";
import ArrayComponent from "./Components/ArrayComponent";
import ObjectComponent from "./Components/ObjectComponent";
import ArrayPageComponent from "./Components/ArrayPageComponent";
import ObjectPageComponent from "./Components/ObjectPageComponent";
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
        <Route path="/array/view/:page" component={ArrayPageComponent} exact />
        <Route path="/object" component={ObjectComponent} exact />
        <Route
          path="/object/view/:page"
          component={ObjectPageComponent}
          exact
        />
      </Switch>
    </>
  );
}

export default App;
