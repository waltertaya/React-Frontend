import ListGroup from "./components/ListGroup";
function App() {
  const items = [
    "Money Heist",
    "Fatal Seduction",
    "The Hundred",
    "Lupin",
    "Yellow stone",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Movies and series" />
    </div>
  );
}

export default App;
