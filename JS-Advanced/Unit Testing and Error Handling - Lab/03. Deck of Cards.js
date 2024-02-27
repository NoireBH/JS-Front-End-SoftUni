function printDeckOfCards(cards){

    let deck = [];

    for (const card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            let cardObj = createCard(face, suit)
            deck.push(cardObj);
        } catch (ex) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }
    console.log(deck.join(' '));

    function createCard(face,suit){

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
        let validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
    
        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
            throw Error(`Invalid card: ${face + suit}`);
        }
    
    
        let card = {
            face,
            suit: validSuits[suit],
            toString(){
                return this.face + this.suit;
            }
        }
    
        return card.toString();
    }
    
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
