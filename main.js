const BASE_URL = 'https://62860d21f0e8f0bb7c0f434d.mockapi.io/todos';

let elementArray = [];

function startLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
  const refresh = document.getElementById('refresh-btn');
  refresh.style.display = 'none';
}

function stopLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  const refresh = document.getElementById('refresh-btn');
  refresh.style.display = 'inline-block';
}

function filterElement(el1, el2) {
  return el1.id !== el2.id;
}

function removeAndRefresh(element) {
  stopLoading();
  elementArray = elementArray.filter(el1 => filterElement(el1, element));
  displayElements(elementArray);
}

function deleteElement(id) {
  const confirmDelete = confirm('sicuro di voler procedere?')
  if (confirmDelete) {
    startLoading()
  const deleteUrl = BASE_URL + '/' + id;
  const fetchOptions = { method: 'delete' };
  fetch(deleteUrl, fetchOptions)
    .then(response => response.json())
    .then(result => removeAndRefresh(result))
    .catch(error => stopLoading())
  }
}

function displayElements(array) {
  const container = document.getElementById('card-container');
  container.innerHTML = "";
  console.log(array);

  for (const element of array) {
    const card = document.createElement('div');
    card.classList.add('card');

    const nameTodo = document.createElement('p');
    const textTodo = document.createTextNode(element.name);
    nameTodo.appendChild(textTodo);
    card.appendChild(nameTodo);

    for (const tags of element.tags) {
      const tagTodo = document.createElement("span");
      const tagNode = document.createTextNode(tags);
      tagTodo.classList.add("tags");

      tagTodo.appendChild(tagNode);
      card.appendChild(tagTodo);
    }

    const dateTodo = document.createElement("p");
    const dateNode = document.createTextNode(Todo.getFormatteDate(element.creationDate));
    dateTodo.appendChild(dateNode);
    card.appendChild(dateTodo);

    const divTodo = document.createElement("div");
    divTodo.classList.add("div-sep");
    card.appendChild(divTodo);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.onclick = () => deleteElement(element.id);
    card.appendChild(trashButton);

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    card.appendChild(doneButton);

    if (element.priority === 0) {
      card.style["background"] = "#b5e48c";
      divTodo.style["background"] = "#497C1D";
    } else if (element.priority === 1) {
      card.style["background"] = "#fdf1ad";
      divTodo.style["background"] = "#AE9504";
    } else if (element.priority === 2) {
      card.style["background"] = "#FBBB62";
      divTodo.style["background"] = "#C77605";
    } else if (element.priority === 3) {
      card.style["background"] = "#ff392e";
      divTodo.style["background"] = "#b32620";

    } else {
      card.style["background"] = "#a7a4a4";
      divTodo.style["background"] = "#757374";

    }
    container.appendChild(card);
  }

}

function initApp(array) {
  stopLoading();
  elementArray = array;
  displayElements(elementArray);
}

function loadApp() {
  startLoading();
  fetch(BASE_URL)
    .then(response => response.json())
    .then(result => initApp(result.map(obj => Todo.fromObj(obj))))
    .catch(error => stopLoading())
}

loadApp()