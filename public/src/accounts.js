function findAccountById(accounts, id) {
  for (let ids in accounts){
    const userId = accounts[ids];
    const user = userId.id;
    if(user === id){
      return userId;
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowRecord = 0;
    books.forEach((book) =>{
    const borrowedBooks = book.borrows;
    borrowedBooks.forEach((borrow) =>{
      if(borrow.id === account.id){
        borrowRecord ++
      }

  })
    }); 
    return borrowRecord;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountArray = [];
  books.forEach((book) => {
    let authorObject = authors.find(author => author.id === book.authorId);
    book.author = authorObject;
    if(book.borrows[0].id === account.id && book.borrows[0].returned === false){
      accountArray.push(book);
    }
  })
  return accountArray;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
