function solve() {
  
    let textArea = document.getElementsByTagName('textarea')[0];
    let output = document.getElementById('output');

    let textAreaText = textArea.value;
    let sentences = textAreaText.split('.');
    sentences.pop();

    
    
    while (sentences.length > 0) {
      
      let paragraphSentence = sentences.splice(0,3)
      .map((sentence) => sentence.trimStart());

      let p = document.createElement('p');
      p.textContent = paragraphSentence.join('.') + '.';
      output.appendChild(p);
    }
}