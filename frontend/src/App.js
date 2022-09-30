import "./App.css";
import { useGlobalContext } from "./context";
import Favorites from "./components/Favorites";
import Modal from "./components/Modal";
import Contacts from "./components/Contacts";
import Search from "./components/Search";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <div className="App">
      <main>
        <Search />
        {favorites.length > 0 && <Favorites />}
        <Contacts />
        {showModal && <Modal />}
      </main>
    </div>
  );
}

export default App;
