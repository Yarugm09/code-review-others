const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se le agrega punto faltante para seleccionar por clase 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


//se cambio por Async  ( funcion asicrona que le permite al wait funcionar )
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); 
  // se cambio  ya que en consol.log no exisita tal varible  ,nunca se definio 
$n.textContent = `${data.name}`;
$b.textContent = `${data.blog}`;
$l.textContent = `${data.location}`;

// se cambian las comillas simples por backticks para poder insertar las variables correctamente 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
  //se agrego prefico para saber que esta variable representa un objeto del DOM
}

displayUser('stolinski').catch(handleError);