function colorize() {
    
   let rowsToColorize = Array.from(document.querySelectorAll('table tr:nth-child(even)'));

    for (const row of rowsToColorize) {
         row.style.background = 'teal';
    }
}