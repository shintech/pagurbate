import PaginationItem from '../models/PaginationItem'

const PageNavigationCollection = Backbone.Collection.extend({
  model: PaginationItem
})

export default PageNavigationCollection
