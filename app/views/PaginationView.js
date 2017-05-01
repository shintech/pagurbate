import PaginationItem from '../models/PaginationItem'
import PaginationCollection from '../collections/PaginationCollection'
import PaginationItemView from './PaginationItemView'

const PaginationView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'pagination',
  childView: PaginationItemView,
  initialize: function (options) {
    this.paginationTemplate = options.template
    
    const { currentPage, pageCount } = options.pageData

    this.collection = new PaginationCollection()

    for (var i = 0; i < pageCount; i++) {
      const paginationItem = new PaginationItem({ page: i + 1, active: false })

      if ((i + 1) === parseInt(currentPage)) {
        paginationItem.set('active', true)
      }

      this.collection.add(paginationItem)
    }
  },

})

export default PaginationView
