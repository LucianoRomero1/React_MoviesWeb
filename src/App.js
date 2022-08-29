function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>My movies</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="content" className="content">
        <article className="movie-item">
          <h3 className="title">Dev Web</h3>
          <p className="description">Luciano Romero</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>

        <article className="movie-item">
          <h3 className="title">Dev Web</h3>
          <p className="description">Luciano Romero</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>

        <article className="movie-item">
          <h3 className="title">Dev Web</h3>
          <p className="description">Luciano Romero</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>

        <article className="movie-item">
          <h3 className="title">Dev Web</h3>
          <p className="description">Luciano Romero</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </article>
      </section>

      <aside className="lateral">
        <div className="search">
          <h3 className="title">Seeker</h3>
          <form>
            <input type="text" id="search_field" />
            <button id="search">Search</button>
          </form>
        </div>

        <div className="add">
          <h3 className="title">Add movie</h3>
          <form>
            <input type="text" id="title" placeholder="Title" />
            <textarea id="description" placeholder="Description"></textarea>
            <input type="submit" id="save" value="Save" />
          </form>
        </div>
      </aside>

      <footer className="footer">
        &copy; React JS - <a href="#">Luciano Romero / Dev </a>
      </footer>
    </div>
  );
}

export default App;
