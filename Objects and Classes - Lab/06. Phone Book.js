function makePhoneBook(phones){

    let phoneBook = {};

    for (const key of phones) {
        
        let pair = key.split(' ');
        let name = pair[0];
        let number = pair[1];

        phoneBook[name] = number;
    }

    for (const phone in phoneBook) {
        
        console.log(`${phone} -> ${phoneBook[phone]}`);
    }
}

makePhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

makePhoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);