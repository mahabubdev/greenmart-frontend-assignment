// import logo from './logo.svg';
import './App.scss';
import Routers from './routes'
import { AuthContextProvider } from './context/authContext'

function App() {

  document.title = "Green Mart";

  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  );
}

export default App;
