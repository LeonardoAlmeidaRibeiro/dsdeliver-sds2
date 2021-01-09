import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routers from './Routes';

function App() {
  return (
  <>
      <Routers />
      <ToastContainer />
  </>  
  );
}

export default App;
