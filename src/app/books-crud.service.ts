import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksCRUDService {

  constructor() { }

  getAllBooks(): Array<Book> {
    return [new Book(0, "Fifty Shades of Grey", "Erika Leonard James"),
    new Book(1, "The Hunger Games", "Suzanne Collins"),
    new Book(2, "Catching Fire", "Suzanne Collins"),
    new Book(3, "StrengthsFinder 2.0", "Tom Rath"),
    new Book(4, "MockingjayMockingjayMockingjayMockingjayMockingjay", "Suzanne Collins"),
    new Book(4, "Mockingjay", "Suzanne Collins")
    ]
  }
}
