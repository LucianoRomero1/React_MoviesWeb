import React, { useState } from "react";

export const Seeker = ({ listState, setListState }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    //Crear un estado y actualizarlo
    setSearch(e.target.value);

    //Filtrar para buscar coincidencias
    let foundMovies = listState.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });

    if (search.length <= 1 || foundMovies == 0) {
      //Sino hace una busqueda decente, mostrar todas
      foundMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    //Actualizar estado del listado principal con lo filtrado
    setListState(foundMovies);
  };

  return (
    <div className="search">
      <h3 className="title">Seeker: {search}</h3>
      {  (notFound && search.length > 1) && <span className="notFound">No match found</span>}
      <form>
        <input
          type="text"
          id="search_field"
          autoComplete="off"
          value={search}
          onChange={searchMovie}
        />
        <button id="search">Search</button>
      </form>
    </div>
  );
};
