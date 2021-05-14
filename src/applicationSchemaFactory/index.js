import { createApplication } from 'graphql-modules'
import BaseModule from '../modules/base/index.js'
import BookModule from '../modules/book/index.js'
import GenreModule from '../modules/genre/index.js'
import AuthorModule from '../modules/author/index.js'


const application = createApplication({
  modules: [
    BaseModule,
    AuthorModule,
    GenreModule,
    BookModule
  ],
})


export default application
