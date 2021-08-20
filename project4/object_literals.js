const book1={
    title:`Book One`,
    author:`John Doe`,
    year:`2013`,
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
console.log(book1);
console.log(Object.values(book1))
console.log(Object.keys(book1))


