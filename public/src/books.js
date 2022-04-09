function findAuthorById(authors, id) {
  let matchingAuthor = authors.filter((author) => author.id === id);
  return matchingAuthor.reduce((object, author) =>
      object[author] = author);
}

function findBookById(books, id) {
  let matchingBook = books.filter((book) => book.id === id);
  return matchingBook.reduce((object, book) =>
        object[book] = book);
}


function partitionBooksByBorrowedStatus(books) {
    let borrowed = books.filter((book) => book.borrows[0].returned === false)
    let returned = books.filter((book) => book.borrows[0].returned === true)
    return [borrowed, returned];
  }

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] = borrow.returned;
    result.push(obj);
  })
  console.log(result);
  return result.slice(0,10);
}
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
