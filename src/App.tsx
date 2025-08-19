import Button from "./components/Button/Button";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Button label="Click Me 🚀" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

export default App;
