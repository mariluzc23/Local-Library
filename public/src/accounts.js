
function findAccountById(accounts, id) {
  let matchingID = accounts.filter((account) => account.id === id);
    return matchingID.reduce((object, account) => 
     object[account] = account);
  }
  
  // implemented ternary operator
  function sortAccountsByLastName(accounts) {
    return accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1); 
  }
  
  // implemented for/in loop
  function getTotalNumberOfBorrows(account, books) {
   const id = account.id; 
   let count = 0; 
    const borrowed = books.map(book => book.borrows); 
    for(let subArray in borrowed){ 
      for(let accountBorrowed in borrowed[subArray]){ 
        if( borrowed[subArray][accountBorrowed].id === id) 
          count++; 
      } 
    } return count;
  }
  
  //helper function below for getBooksPossesesByAccount
  //it finds the books possessed by account
  
  function getBooks(account, books, authors) {
    let result = [];
      books.forEach(book=>{
        if (book.borrows.find(item => item.id === account.id && !item.returned)) {
          result.push(book);
        }
      }) 
    return result;
   }
  
  // function below calls the getBooks function 
  //and adds author information
  
    function getBooksPossessedByAccount(account, books, authors) {
   const getBook = getBooks(account, books);
   console.log(getBook);
      getBook.forEach(book => {
        let author = authors.find(person => person.id === book.authorId);
        book['author'] = author;
      })
     console.log(getBook);
     return getBook;
    }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };