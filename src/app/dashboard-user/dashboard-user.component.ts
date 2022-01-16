import { Component, OnInit } from '@angular/core';
import { BooksCRUDService } from '../books-crud.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  allBooks: Array<Book>;
  allSelectedBooks: Array<Book>;
  searchInput: any;
  constructor(private booksCRUDService: BooksCRUDService) {
  }

  ngOnInit(): void {
    this.allBooks = this.booksCRUDService.getAllBooks();
    this.allSelectedBooks = this.allBooks;
    this.searchInput = document.getElementById("search-input");
  }
  reSelectBooks(): void {
    var searchWord = this.searchInput ? this.searchInput.value : "";
    this.allSelectedBooks = [];
    this.allBooks.forEach(book => {
      if (book.title.toUpperCase().includes(searchWord.toUpperCase())) {
        this.allSelectedBooks.push(book)
      }
    });
    console.log(this.allSelectedBooks);
    console.log(searchWord);
  }


}
