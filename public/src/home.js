function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (let number in books) {
    const book = books[number];
    totalBooks++;
  }
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let number in accounts) {
    const account = accounts[number];
    totalAccounts++;
  }
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let totalBooksBorrowed = 0;
  let borrowArray = books.filter((book) => book.borrows[0].returned === false);
  totalBooksBorrowed = borrowArray.length;
  return totalBooksBorrowed;
}

function getGenres(books) {
  let genreArray = books.map((book) => book.genre);
  return genreArray;
}

function getMostCommonGenres(books) {
  let commonGenres = [];
  let genreList = getGenres(books);
  let commonGenreList = genreList.reduce((book, genre) => {
    if (book[genre] === undefined) {
      book[genre] = 1;
    } else {
      book[genre]++;
    }
    return book;
  }, {});
  //console.log(commonGenreList);
  for (let genre in commonGenreList) {
    const counter = commonGenreList[genre];
    commonGenres.push({ name: genre, count: counter });
  }
  //console.log(commonGenres);
  commonGenres.sort((genreA, genreB) => genreB.count - genreA.count);
  let topFive = commonGenres.slice(0, 5);
  return topFive;
}

function getMostPopularBooks(books) {
  let mostPopular = [];
  books.forEach((book) => {
    mostPopular.push({ name: book.title, count: book.borrows.length });
  });
  mostPopular.sort((bookA, bookB) => bookB.count - bookA.count);
  //console.log(mostPopular);
  mostPopular.splice(5);
  return mostPopular;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthor = [];
  authors.forEach((author) => {
    let amountBorrowed = 0;
    books.forEach((book) => {
      if (author.id === book.authorId) {
        amountBorrowed += book.borrows.length;
      } else {
        amountBorrowed += 0;
      }
    });
    popularAuthor.push({
      name: `${author.name.first} ${author.name.last}`,
      count: amountBorrowed,
    });
  });
  popularAuthor.sort((authorA, authorB) => authorB.count - authorA.count);
  popularAuthor.splice(5);
  return popularAuthor;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
