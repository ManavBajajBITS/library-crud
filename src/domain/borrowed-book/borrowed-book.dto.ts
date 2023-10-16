export class CreateBorrowedBookDto {
  bookId: number; // ID of the borrowed book
  borrowDate: Date; // Date when the book is borrowed
  libraryMemberId: number; // ID of the borrowing library member
}

export class UpdateBorrowedBookDto {
  returnDate: Date; // Date when the book is returned
}
