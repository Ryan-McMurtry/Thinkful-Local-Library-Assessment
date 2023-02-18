function findAuthorById(authors, id) {
  for (let ids in authors) {
    const authorId = authors[ids];
    const author = authorId.id;
    if (author === id) {
      return authorId;
    }
  }
}

function findBookById(books, id) {
  for (let ids in books) {
    const bookId = books[ids];
    const book = bookId.id;
    if (book === id) {
      return bookId;
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let combinedArray = [];
  let borrowArray = books.filter((book) => book.borrows[0].returned === false);
  let returnedArray = books.filter((book) => book.borrows[0].returned);

  combinedArray.push(borrowArray, returnedArray);
  return combinedArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrowed) =>{
    const userAccount = accounts.find(account => account.id === borrowed.id); 
    userAccount.returned = borrowed.returned;
    return userAccount;
  }).slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
