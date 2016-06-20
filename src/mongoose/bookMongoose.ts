import {IDatabase} from 'restez'
import {IBook, Book} from '../models/book'
import * as mongoose from 'mongoose';

interface IMongooseBook extends IBook, mongoose.Document {
    id: string,
    slug: string,
    title: string
}

const BookSchema = new mongoose.Schema({
    slug: { type: String },
    title: { type: String, required: true }
})

export class BookMongoose implements IDatabase<Book>{
    private bookModel: mongoose.Model<IMongooseBook>

    constructor(private connection: mongoose.Connection) {
        this.bookModel = connection.model<IMongooseBook>('Book', BookSchema)
    }

    getAll(query) {
        var promise = this.bookModel.find().exec()

        return promise.then((books) => {
            return books
        });
    }

    load(slug: string) {
        var promise = this.bookModel.findOne({ 'slug': slug }).exec()

        return promise.then((book) => {
            return book
        })
    }

    update(id: string, model: Book) { }

    create(model: Book) {
        var newBook = new this.bookModel({
            title: model.title,
            slug: model.slug
        })

        return newBook.save()
    }

    remove(id: string) { }
}