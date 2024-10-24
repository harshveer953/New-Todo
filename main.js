let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

const saveTodo = (e) => {                                                     
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "list-group-item rounded-0";
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
  li.appendChild(delBtn);
  ul.appendChild(li);
  form.reset();
};

form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let listItem = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(listItem);
    }
  }
};

ul.addEventListener("click", removeTodo);