import React, { useEffect, useState } from "react";
import { EditMovie } from "./EditMovie";

export const List = ({ listState, setListState }) => {
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies);

    return movies;
  };

  const deleteMovie = (id) => {
    //Consigo la lista de pelis
    let movies = getMovies();

    //Filtrar para que elimine la que NO quiero
    //Parse int por si el ID es string
    let newListMovies = movies.filter((movie) => movie.id !== parseInt(id));

    //Actualizar el estado de la lista
    setListState(newListMovies);

    //Actualizar el localstorage
    localStorage.setItem("movies", JSON.stringify(newListMovies));
  };

  return (
    <>
      {listState != null ? (
        listState.map((movie) => {
          return (
            <article key={movie.id} className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>

              <button className="edit" onClick={() => setEdit(movie.id)}>
                Edit 
              </button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Delete
              </button>

              {/* Aparece formulario de editar */}
              {edit === movie.id && (
                <EditMovie movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState} />
              )}
            </article>
          );
        })
      ) : (
        <h2>Dont have movies to show</h2>
      )}
    </>
  );
};
