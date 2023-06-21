function catsTask(array){

    class cat {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];

    for (let index = 0; index < array.length; index++) {
        
        let catInfo = array[index].split(' ');
        let name = catInfo[0];
        let age = catInfo[1];

        cats.push(new cat(name,age));
    }

    cats.forEach(cat => {
        cat.meow();
    });

}

catsTask(['Mellow 2', 'Tom 5']);
catsTask(['Candy 1', 'Poppy 3', 'Nyx 2']);