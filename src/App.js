
import './App.css';
import "./components/NavBar/NavBar";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a ferreteria NFP"}/>
    </div>
  );
}

export default App;
