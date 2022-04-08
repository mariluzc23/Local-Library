function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (let count in books){
    if (books){
      totalBooks += 1;
    }
  }
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let count in accounts){
    if (accounts){
      totalAccounts +=1;
    }
  }
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
let total = 0;
  const borrowed = books.map(book => book.borrows);
  for (let subArray in borrowed){
    for (let accountBorrowed in borrowed[subArray]){
      if (borrowed[subArray][accountBorrowed].returned === false)
        total++;
    }
  } return total;
}


function getMostCommonGenres(books) {
  let result = {};
  let genre = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1; 
    } else {
      result[book.genre] += 1;
    }
  })
  let countArray = [];
  for (const [key, value] of Object.entries(result)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books) {
   const borrows = books.map(book => ({name:book.title, count:book.borrows.length}));
  borrows.sort((a,b) => b.count - a.count);
   return borrows.slice(0, 5);
}

function getMostPopularAuthors(books, authors){
return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
function getTotalBooksCount(books) {}

function getTotalAccountsCount(accounts) {}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
