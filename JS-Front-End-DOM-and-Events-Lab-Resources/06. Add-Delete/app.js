function addItem() {

    let text = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    li.appendChild(document.createTextNode(text));

    let newAnchor = document.createElement('a');
    newAnchor.textContent = '[Delete]';
    newAnchor.setAttribute('href','#');
    newAnchor.addEventListener('click',deleteEmail);
    li.appendChild(newAnchor);

    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';
   
    function deleteEmail(e){

        let emailToDelete = e.currentTarget.parentElement;
        emailToDelete.remove();
    }

}

