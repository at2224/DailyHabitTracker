const checklistContainer = document.getElementById("checklist-container");
const ulContainer = document.getElementById("ul-container");
const checkbox = document.querySelectorAll("checkbox");
const checkboxText = document.querySelectorAll("checkbox-text");
const topContainer = document.getElementById("top-container");


checklistContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON') {
        return;
    }
    
    const node = document.createElement('input');
    const node2 = document.createElement('input');
    const node3 = document.createElement('button');
    var li = document.createElement('li');
    node.type = 'checkbox';
    node.className = 'checkbox';
    node2.type = 'text';
    node2.className = 'checkbox-text';
    node3.textContent = 'X';
    li.appendChild(node);
    li.appendChild(node2);
    li.appendChild(node3);
    ulContainer.appendChild(li);
    
})