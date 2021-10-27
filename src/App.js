import { ContextProvider } from './Context/Context';
import './index.scss'
import Mainrout from "./pages/Mainrout";

function App() {
  return (
    <>
      <ContextProvider>
        <Mainrout />
      </ContextProvider>


    </>
  );
}

export default App;
