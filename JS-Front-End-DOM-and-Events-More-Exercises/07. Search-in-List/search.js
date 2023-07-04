function search() {
   
   let input = document.getElementById('searchText').value;
   let matchesFoundDiv = document.getElementById('result');
   let matches = 0;

   let towns =Array.from(document.getElementById('towns')
   .getElementsByTagName('li')).forEach((li) => {
      if (li.textContent.includes(input)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         matches++;
      }

      else {
         li.style.fontWeight = 'normal';
         li.style.textDecoration = 'none';
      }
   });

   matchesFoundDiv.textContent = `${matches} matches found`;
      
}
