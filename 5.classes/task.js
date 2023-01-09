class PrintEditionItem {
    constructor (name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.check(this.state * 1.5)
    }

    check (num) {
        if (num <0 ) {
            return 0;
        } else if (num > 100){
            return 100;
        } else {
            return num;
        }
    }

    set state(ste){
        this._state = this.check(ste);
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name,releaseDate,pagesCount){
        super(PrintEditionItem);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author,name,releaseDate,pagesCount){
        super(name,releaseDate,pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor (author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor (author,name,releaseDate,pagesCount){
        super(author,name,releaseDate,pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
        return;
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i +=1 ){
            if (this.books[i].type === value) {
                console.log(this.books[i].name);
                return this.books[i].name;
            } else {
               return null;
            }

        }
    }
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex((book) => book.name = bookName);
            if (bookIndex >= 0) {
            return this.books.slice(bookIndex,1)[0];
            } else {
               return null;
            }
    }
}