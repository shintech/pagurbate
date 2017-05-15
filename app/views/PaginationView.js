import PaginationItem from '../models/PaginationItem'
import PaginationCollection from '../collections/PaginationCollection'
import PaginationItemView from './PaginationItemView'

const PaginationView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'pagination',
  childView: PaginationItemView,
  initialize: function (options) {
    const currentPage = options.pageData['currentPage']
    const pageCount = options.pageData['pageCount']
    
    this.collection = new PaginationCollection()

    const nextItem = new PaginationItem({ page: parseInt(currentPage) + 1, active: false, text: 'Next' })
    const prevItem = new PaginationItem({ page: parseInt(currentPage) - 1, active: false, text: 'Prev' })

    if (currentPage > 1) {
      this.collection.add(prevItem)
    }

    for (var i = currentPage - 5; i < currentPage + 5; i++) {
      if ((i + 1) >= 1 && i < pageCount) {
        const paginationItem = new PaginationItem({ page: i + 1, active: false, text: i + 1 })

        if ((i + 1) === parseInt(currentPage)) {
          paginationItem.set('active', true)
        }

        this.collection.add(paginationItem)
      }
    }

    if (currentPage < pageCount) {
      this.collection.add(nextItem)
    }
  }
})

export default PaginationView
