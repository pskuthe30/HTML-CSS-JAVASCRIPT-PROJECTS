//Construtor
function Book() {
    console.log(`book initalized`)
}

// Whenever new Object is created the constructor is executed and so 
// it will display the book initialized
const book1 = new Book();

//Constructor
function Book(title,author,year){
    this.title=title,
    this.author=author,
    this.year=year,
    
    this.  getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    }
    const book2= new Book('Book one','John Green', '2020');
    console.log(book2);
    console.log(book2.getSummary());


// Now we can create as many books I want with this constructor