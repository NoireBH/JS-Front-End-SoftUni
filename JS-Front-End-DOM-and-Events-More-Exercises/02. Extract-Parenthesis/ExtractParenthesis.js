function extract(content) {

    let extractedContent = [];
    let idToExtract = document.getElementById(content);
    var matched = idToExtract.textContent
    .match(/\([^)]*\)/g).map(function(s){ return s.slice(1, -1);});
    let result = matched.join('; ');
    console.log(result);
    return result;
}