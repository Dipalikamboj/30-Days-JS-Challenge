// Task 1

const book = {
    title : "Ramayan",
    author : "Valmiki",
    year : 1700,

    printAuthor : function() 
    {
        const result = `Author of ${this.title} is ${this.author}`;
        console.log(result);
    },

    printYear : function(year){
        this.year = year;
        console.log(book);
    },

    printDetails : function(){
        const res = `${this.title}'s author is ${this.author} and it was published in ${this.year}`
        return res;
    },

    library :  {
        name : "Ram Das Library",
        books : [
            {
                title : "Ramayan",
                author : "Valmiki",
            },
            {
                title : "Mahabharat",
                author : "Vyas",
            }

        ]
    }

}

// console.log(book);

// Task 2

// console.log(book.title);
// console.log(book["author"]);


// Task 3
// book.print();

//Task 4


// book.printYear(2023)


// Task 5

// console.log(book.library);

// Task 6
// console.log(book.library.name);

book.library.books.forEach(element => {
    // console.log(element["title"]);
});


// Task 7
// console.log(book.printDetails());

// Task 8

for (const key in book) {
    // console.log(key , book[key]);
    }


// console.log(Object.keys);
for (const key in book) {
    if (Object.keys.call(book, key)) {
        // console.log(key);
    }
}


for (const key in book) {
    if (Object.keys.call(book, key)) {
        console.log(book[key]);
    }
}