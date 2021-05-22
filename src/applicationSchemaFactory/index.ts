import { createApplication } from 'graphql-modules'
import BaseModule from '../modules/base'
import BookModule from '../modules/book'
import GenreModule from '../modules/genre'
import AuthorModule from '../modules/author'


const application = createApplication({
  modules: [
    BaseModule,
    AuthorModule,
    GenreModule,
    BookModule
  ],
})


export default application
