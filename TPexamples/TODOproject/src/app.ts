// book constructor
class Book{
    private title:string;
    private author:string;
    private isbn:number;

    constructor(title:string,author:string,isbn:number){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

    public set setTitle(title:string){
        this.title=title;
    }

    public get getTitle():string{
        return this.title;
    }

    public set setAuthor(author:string){
        this.author=author;
    }

    public get getAuthor():string{
        return this.author;
    }

    public set setISBN(isbn:number){
        this.isbn=isbn;
    }

    public get getISBN():number{
        return this.isbn;
    }
}



//UI constructor
class UI{
    public addBookToList(book:Object){
        let ref:Book=<Book>book;
        const list:HTMLElement | null = document.getElementById("book-list");

        //Create tr element
        const row = document.createElement("tr");

        //Insert cols
        row.innerHTML = `
            <td>${ref.getTitle}</td>
            <td>${ref.getAuthor}</td>
            <td>${ref.getISBN}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list?.appendChild(row);
    }

    public clearFields(){
        (<HTMLInputElement>document.getElementById("title")).value = "";
        (<HTMLInputElement>document.getElementById("author")).value = "";
        (<HTMLInputElement>document.getElementById("isbn")).value = "";

    }

    public showAlert(message:string,className:string){
        const div = <HTMLDivElement> document.createElement("div");

        //add classes
        div.className = `alert ${className}`;

        //add text
        div.appendChild(document.createTextNode(message));

        //Get parent
        const container = document.querySelector(".container");

        // get form
        const form = document.querySelector("#book-form");

        //Insert alert
        container?.insertBefore(div,form);

        //timeout after 3 sec
        setTimeout(function(){
            document.querySelector(".alert")?.remove();
        },3000);
    }

    //delete book
    public deleteBook(target:any){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

class Store{
    static getBooks(){
        let books:Object[];
        if(localStorage.getItem("books") === null){
             books = [];
        }else{
             books = JSON.parse(<string>localStorage.getItem("books"));
        }

        console.log(books);
        return books;
    }


    static displayBooks(){
        const books:Object[]=Store.getBooks();

        const ui = new UI();

       books.forEach((book) =>{
           ui.addBookToList(book);
       })
    }

    static addBook(book:Object){
        let books:Object[] = Store.getBooks();

        books.push(book);
        const booksArray=JSON.stringify(books);

        localStorage.setItem("books",booksArray);
    }

    static removeBook(ISBN:any){
            console.log(ISBN);
    }
}

//DOM load event
document.addEventListener("DOMContentLoaded",Store.displayBooks);


document.getElementById("book-form")?.addEventListener("submit",
    function(event:any){
        const title= (<HTMLInputElement>document.getElementById("title")).value;
        const author = (<HTMLInputElement>document.getElementById("author")).value;
        const isbn = parseInt((<HTMLInputElement>document.getElementById("isbn")).value);

        const book = new Book(title,author,isbn);

        //Instantiate UI
        const ui = new UI();


        //validate
        if(title === "" || author === "" || isNaN(isbn)){
            //error alert
            console.log("error");
            ui.showAlert("Please fill all the fields","error");
            console.log("aaaa");
        }else{
            //add book to list
            ui.addBookToList(book);

            //add to LS
            Store.addBook(book);

            ui.showAlert("Book added!","success");

            //clear fields
            ui.clearFields();
        }

        event.preventDefault();
    });

//Event listner for delete
document.getElementById("book-list")?.addEventListener("click",function(event:any){
    event.preventDefault();

    const ui = new UI();
    ui.deleteBook(event.target);

    //show message
    ui.showAlert("Book Removed!","success");

    //Remove from local storage
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

})
