function solution(){

    let string = '';
    
    function append(inputString) {
        string = string + inputString;
    }

    function removeStart(n){
        string = string.slice(n);
    }

    function removeEnd(n){
        string = string.slice(0, -n);
    }

    function print() {
        console.log(string)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();