function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchField = document.getElementById('searchField');

   function onClick() {
      
      let searchedWord = searchField.value;
      let tableRows =Array.from(document.querySelectorAll('tbody tr'));

      for (const row of tableRows) {
         
         let rowTextContent = row.textContent;

         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }

         if (rowTextContent.includes(searchedWord)) {
            row.classList.add('select');
         }
      }

      searchField.value = '';
   }
}