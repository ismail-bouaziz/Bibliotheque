export class Book {
    id: number;
    title: string;
    author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    static fromJson(json: any): Book {
        return new Book(json.id, json.title, json.author);
    }
    toJson(): any {
        return { "id": this.id, "title": this.title, "author": this.author }
    }
}
//aaaa