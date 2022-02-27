import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PokeQuiz from "./components/PokeQuiz";
import { scoreReducer } from "./utils/scoreReducer";
import { useReducer } from "react";

const client = new QueryClient();

function App() {
  const [score, dispatch] = useReducer(scoreReducer, 0);

  return (
    <QueryClientProvider client={client}>
      <div className="app-container">
        <h1 className="app-title">Poké-Quiz!</h1>
        <div className="app-score">Score: {score}</div>
        <main>
          <PokeQuiz dispatch={dispatch} />
        </main>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
