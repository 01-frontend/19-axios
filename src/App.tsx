import { Provider } from "react-redux";

import { setupStore } from "./data/store";

const App = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <div>Hallo</div>
    </Provider>
  );
};

export default App;
