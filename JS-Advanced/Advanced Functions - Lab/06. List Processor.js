function solve(input){

    function createProcessor(){
    let array = [];

    function add(string){
        array.push(string);
    }

    function remove(string){
        array = array.filter(s => s !== string);
    }

    function print(string){
        console.log(array.join(','));
    }

    return {
        add,
        remove,
        print
    }

    }

    let processor = createProcessor();

    input.forEach(e => {
    let [command, value] = e.split(' ');
    processor[command](value);
    });
    
}




solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

