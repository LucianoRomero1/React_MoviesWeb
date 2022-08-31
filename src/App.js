import { AddMovie } from "./components/AddMovie";
import { Footer } from "./components/homepage/Footer";
import { Header } from "./components/homepage/Header";
import { List } from "./components/List";
import { Navbar } from "./components/homepage/Navbar";
import { Seeker } from "./components/Seeker";
import { useState } from "react";

function App() {
  const [listState, setListState] = useState([]);

  return (
    <div className="layout">
      <Header />

      <Navbar />

      <section id="content" className="content">
        {/* Listado de peliculas */}
        <List listState={listState} setListState={setListState} />
      </section>

      <aside className="lateral">
        <Seeker listState={listState} setListState={setListState} />
        <AddMovie setListState={setListState} />
      </aside>

      <Footer />
    </div>
  );
}

export default App;
