import { describe, it, expect, beforeEach } from "@jest/globals";
import Book from "../book.js";

describe("Book", () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book("Cuentos de la Selva", "Horacio Quiroga", 350);
  });

  it("return the correct title", () => {
    expect(myBook.getTitle()).toBe("Cuentos de la Selva");
  });

  it("return the correct author", () => {
    expect(myBook.getAuthor()).toBe("Horacio Quiroga");
  });

  it("return the correct number of pages", () => {
    expect(myBook.getPages()).toBe(350);
  });

  it("check title is a string", () => {
    expect(() => (myBook = new Book(451, 1, 350))).toThrow();
  });

  it("check title is not empty", () => {
    expect(() => (myBook = new Book("", "Horacio Quiroga", 350))).toThrow();
  });

  it("check author is a string", () => {
    // TODO
    expect(() => (myBook = new Book("Title", 2, 350, 3))).toThrow();
  });

  it("check page param is a number", () => {
    // TODO
    expect(
      () => (myBook = new Book("Title", "Horacio Quiroga", "3", "3"))
    ).toThrow();
  });

  it("check pages not < 1", () => {
    // TODO
    expect(
      () => (myBook = new Book("Title", "Horacio Quiroga", -1, 3))
    ).toThrow();
  });
  it("toString()", () => {
    // TODO
    myBook = new Book("Title", "Horacio Quiroga", 350, 3);
    expect(myBook.toString()).toBe(
      "Título: Title Autor: Horacio Quiroga Páginas: 350 Cantidad: 3"
    );
  });

  it("get words", () => {
    // TODO
    myBook = new Book("Title", "Horacio Quiroga", 350, 3);
    expect(myBook.getWords()).toBe(3);
  });

  it("Anonymous author", () => {
    // TODO
    myBook = new Book("Title", "", 350, 30);
    expect(myBook.getAuthor()).toBe("Anónimo");
  });

  it("check words param is a number", () => {
    // TODO

    expect(
      () => (myBook = new Book("Title", "Horacio Quiroga", 350, "3"))
    ).toThrow();
  });

  it("wordsPerPage()", () => {
    // TODO
    myBook = new Book("Title", "Horacio Quiroga", 350, 3);
    expect(myBook.wordsPerPage()).toBe(3 / 350);
  });
});
