function solve() {

   let totalPrice = 0;
   let uniqueProducts = new Set();
   const addButtons =Array
   .from(document.querySelectorAll('button.add-product'));
   
   for (const button of addButtons) {
      button.addEventListener('click',function(e){

      let textArea = document.getElementsByTagName('textarea')[0];
      let parent = e.target.parentElement.parentElement;
      let name = parent.getElementsByClassName('product-title')[0].textContent;
      let price =parent
      .getElementsByClassName('product-line-price')[0].textContent;

      textArea.value += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;
      totalPrice += Number(price);
      uniqueProducts.add(name);
      });
   }

   let checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click',function(){
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value += 
      `You bought ${Array.from(uniqueProducts).join(', ')} for ${totalPrice.toFixed(2)}.`;

      let buttonsToDisable =Array.from(document.getElementsByTagName('button'));

      buttonsToDisable.forEach(button => {
         button.disabled = true;
      });
   })
   
}