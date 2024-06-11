class Book {
  #title;
  #author;
  #pages;
  #words;

  constructor(title, author, pages, words = 0) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    // TODO
    return this.#words;
  }

  setTitle(title) {
    if (typeof title !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof pages !== 'number' || isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(amount) {
    // TODO
    if (typeof amount !== 'number') {
      throw new Error();
    }

    this.#words = amount;
  }

  wordsPerPage() {
    // TODO
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${
      this.#pages
    } Cantidad: ${this.#words}`;
  }
}

export default Book;
