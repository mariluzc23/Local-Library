function selectedID(accounts, id) {
  return accounts.filter((account) => account.id === id);
} 

function findAccountById(accounts, id) {
   let matchingID = selectedID(accounts, id);
  return matchingID.reduce((object, account) => 
   object[account] = account);
}

// function findAccountById(accounts, id) {
// let matchingID = accounts.filter((account) => account.id === id);
//   return matchingID.reduce((object, account) => 
//    object[account] = account);
// }

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1); 
}

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


  function getBooksPossessedByAccount(account, books, authors) {
    let result = [];
    books.forEach(book=>{
      if (book.borrows.find(item => item.id === account.id && !item.returned)) {
        result.push(book);
      }
    })
    console.log(result);
    result.forEach(book => {
      let author = authors.find(person => person.id === book.authorId);
      book['author'] = author;
    })
    console.log(result);
    return result;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};