import PaginationItem from '../models/PaginationItem'
import PaginationCollection from '../collections/PaginationCollection'
import PaginationItemView from './PaginationItemView'
import '../public/js/MathConfig.js'

const PaginationView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'pagination',
  childView: PaginationItemView,
  initialize: function (options) {
    const currentPage = parseInt(options.pageData['currentPage'])
    const pageCount = Math.ceil(options.pageData['pageCount'])
    const currentPageFloor = Math.floor10(currentPage, 1)

    var paginationItem

    this.collection = new PaginationCollection()

    const nextItem = new PaginationItem({ page: currentPage + 1, active: false, text: 'Next' })
    const prevItem = new PaginationItem({ page: currentPage - 1, active: false, text: 'Prev' })

    if (currentPage > 1) {
      this.collection.add(prevItem)
    }

    for (var i = currentPageFloor; i < currentPageFloor + 10; i++) {
      if (i > 0 && i <= pageCount) {
        paginationItem = new PaginationItem({ page: i, active: false, text: i })
        if (i === currentPage) {
          paginationItem.set('active', true)
        }
      }
      this.collection.add(paginationItem)
    }

    if (currentPage < pageCount) {
      this.collection.add(nextItem)
    }
  }
})

export default PaginationView
