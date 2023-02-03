// Task 4 ------
/*



2. Add to the User class a third method: 

calcScores(), that performs the scores calculations separately for each class.





5. Create an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained.



6. Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores that the editor gained.*/







class User {
    constructor() {
      this._numberOfArticles = 0;
    }
    get numberOfArticles() {
        return this._numberOfArticles
    }
    set numberOfArticles(num) {
        this._numberOfArticles = num
    }
    calcScores() {

    }
  }

  class Author extends User {
        constructor() {
            super()
        }

    calcScores() {
        return this._numberOfArticles * 10 + 20
    }
  }

  class Editor extends User {
    constructor(){
        super()
    }
    calcScores() {
        return this._numberOfArticles * 6 + 15
    }
  }

  const author = new Author()
  author.numberOfArticles = 8
  console.log(author.calcScores())

  const editor = new Editor()
  editor.numberOfArticles = 15
  console.log(editor.calcScores())