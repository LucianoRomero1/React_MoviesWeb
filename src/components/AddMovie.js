import React, { useState } from "react";
import { SaveDataStorage } from "../helpers/SaveDataStorage";

export const AddMovie = ({ setListState }) => {
  const titleComponent = "Add movie";
  const [movieState, setMovieState] = useState({
    title: "",
    description: "",
  });

  const { title, description } = movieState;

  const getDataForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let movie = {
      id: new Date().getTime(),
      //Poner sola la variable es lo mismo que poner title:title
      title,
      description,
    };

    //Guardar el estado
    setMovieState(movie);

    //Actualizar el estado del listado principal
    setListState((elements) => {
      return [...elements, movie];
    });

    //Guardarlo en el localstorage
    SaveDataStorage("movies", movie);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {title && description && "You have created the movie: " + title}
      </strong>
      <form onSubmit={getDataForm}>
        <input type="text" id="title" placeholder="Title" name="title" />
        <textarea
          id="description"
          placeholder="Description"
          name="description"
        ></textarea>
        <input type="submit" id="save" value="Save" />
      </form>
    </div>
  );
};
