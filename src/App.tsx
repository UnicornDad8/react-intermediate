import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TasksProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";
import "./App.css";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </>
  );
}

export default App;
