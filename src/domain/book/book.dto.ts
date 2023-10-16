export class CreateBookDto {
  title: string;
  isbn: string;
  authorId: number; // ID of the associated author
}

export class UpdateBookDto {
  title: string;
  isbn: string;
  authorId: number; // ID of the associated author
}
