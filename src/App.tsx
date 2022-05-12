import { Provider } from "react-redux";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <HomeScreen />
      <Footer />
    </Provider>
  );
}

export default App;
