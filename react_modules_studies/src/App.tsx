import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Foda-se</Alert>
      )}
      <Button
        color="dark"
        onClick={() => {
          setAlertVisibility(true);
          console.log("clicked!");
        }}
      >
        Clique-me
      </Button>

      <ListGroup
        heading="Cities List"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;

// learning elements
