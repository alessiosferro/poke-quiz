import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PokeQuiz from "./components/PokeQuiz";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <h1>Poké-Quiz!</h1>
      <PokeQuiz />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
