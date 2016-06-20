import {Controller, IDatabase, IFactory} from 'restez'
import {Book} from '../models/book'

import {BookMongoose} from '../mongoose/bookMongoose'


class BookController extends Controller {
    private book: IDatabase<Book>

    constructor(config) {
        super()
        this.book = new BookMongoose(config.mongooseConnection)
    }

    itemName() {
        return 'Book'
    }

    list(req, res, next) {
        this.book.getAll({}).then((books) => {
            res.send(books)
            return next()
        })
    }

    get(req, res, next) {
        this.book.load(req.params.id).then((book) => {
            res.send(book)
            return next()
        })
    }

    put(req, res, next) {
        this.book.update(req.params.id, req.body).then((newBook) => {
            res.send(newBook)
            return next()
        })
    }

    post(req, res, next) {
        this.book.create(req.body).then((newBook) => {
            res.send(newBook)
            return next()
        })
    }

    delete(req, res, next) {
        res.send('delete')
        return next()
    }
}

class BookControllerFactory implements IFactory {
    Create(config) {
        return new BookController(config)
    }
}

export = new BookControllerFactory()