function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let textArea = document.querySelector('#result')
    let listArray = Array.from(listItems);

    for (const iterator of listArray) {
        
        textArea.value += iterator.textContent + '\n';
    }
}