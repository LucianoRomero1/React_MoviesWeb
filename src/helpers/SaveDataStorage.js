export const SaveDataStorage = (key, element) => {
  //Uso key y element para usar este metodo reutilizable
  //Conseguir los elementos en el localstorage
  let data = JSON.parse(localStorage.getItem(key));

  //Comprobar si es array
  if (Array.isArray(data)) {
    //Añadir elemento al array
    data.push(element);
  } else {
    data = [element];
  }

  //Añadir el elemento al storage
  localStorage.setItem(key, JSON.stringify(data));

  //Retornar pelicula creada
  return element;
};
