var form = document.getElementById("addForm");
var items = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
items.addEventListener("click", deleteItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
	e.preventDefault();

	var newItem = document.getElementById("item").value;

	//console.log(newItem);

	var li = document.createElement("li");

	li.className = "list-group-item";

	li.appendChild(document.createTextNode(newItem));

	var deleteBtn = document.createElement("button");

	deleteBtn.className = "btn btn-danger btn-sm float-right delete";

	deleteBtn.appendChild(document.createTextNode("X"));

	li.appendChild(deleteBtn);

	items.appendChild(li);
}

function deleteItem(e) {
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you sure?")) {
			var li = e.target.parentElement;
			items.removeChild(li);
		}
	}
}

function filterItem(e) {
	var text = e.target.value.toLowerCase();

	var itemList = items.getElementsByTagName("li");

	Array.from(itemList).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
