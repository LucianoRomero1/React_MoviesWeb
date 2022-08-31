import React from "react";

export const EditMovie = ({movie, getMovies, setEdit, setListState}) => {
  const titleComponent = "Edit movie";
  const saveEdit = (e, id) => {
    e.preventDefault();

    //Conseguir el target del evento
    let target = e.target;

    //Buscar el indice del objeto de la pelicula a actualizar
    const movies = getMovies();
    const index  = movies.findIndex(movie => movie.id === id);
    
    //Crear objeto con ese id de ese indice, con titulo y descripcion del formulario
    let movie = {
      id,
      title: target.title.value,
      description: target.description.value
    }

    //Actualizar el elemento con ese indice
    movies[index] = movie;

    //Actualizar el localstorage
    localStorage.setItem("movies", JSON.stringify(movies));

    //Actualizar el estado asi se cierra el form de editar
    setListState(movies);
    setEdit(0);
  }
  return (
    <div className="edit_form">
      <h3 className="title">{titleComponent}</h3>
      <form onSubmit={e => saveEdit(e, movie.id)}>
        <input type="text" name="title" className="edited_title" defaultValue={movie.title} />
        <textarea name="description" className="edited_description" defaultValue={movie.description} />

        <input type="submit" className="edit" value="Update" />
      </form>
    </div>
  );
};
