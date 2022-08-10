/*cualquier solicitud http se hará con las funciones de este archivo de servicios*/
/*se definirán las operaciones (funciones) necesarias para obtener datos (data fetching)*/

export async function getItems(){ /*esta función hace todo el fetching de los datos, o sea obtiene y retorna un arreglo de objetos de datos para que alguna otra función manipule este arreglo objetos como le plazca*/
  const request = await fetch('http://localhost:3000/api/items');
  const items = await request.json();

  return(
    items /*nada más devuelve un arreglo de objetos*/
  );
}

export async function getLastItems(){ /*esta función también hace todo el fetching de los datos pero llamando a la función que declaré arriba getItems*/
  const items = getItems();
  return(
    items.slice(0,3) /*nada más devuelve los 3 primeros elementos del arreglo de objetos obtenidos por getItems*/
  );
}