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

    const firstPage = new PaginationItem({ page: 1, active: false, text: 'First Page' })
    const lastPage = new PaginationItem({ page: pageCount, active: false, text: 'Last Page' })
    const next10 = new PaginationItem({ page: currentPageFloor + 10, active: false, text: 'Next 10...' })
    const prev10 = new PaginationItem({ page: findPrevious10(currentPageFloor), active: false, text: 'Prev 10...' })
    const nextItem = new PaginationItem({ page: currentPage + 1, active: false, text: 'Next' })
    const prevItem = new PaginationItem({ page: currentPage - 1, active: false, text: 'Prev' })

    if (currentPage <= 1) {
      firstPage.set('active', 'disabled')
    }

    if ((currentPageFloor - 10) <= 0) {
      prev10.set('active', 'disabled')
    }

    if (currentPage <= 1) {
      prevItem.set('active', 'disabled')
    }

    this.collection.add(firstPage)
    this.collection.add(prev10)
    this.collection.add(prev10)
    this.collection.add(prevItem)

    for (var i = currentPageFloor; i < currentPageFloor + 10; i++) {
      if (i > 0 && i <= pageCount) {
        paginationItem = new PaginationItem({ page: i, active: false, text: i })
        if (i === currentPage) {
          paginationItem.set('active', 'active')
        }
      }
      this.collection.add(paginationItem)
    }

    this.collection.add(nextItem)
    this.collection.add(next10)
    this.collection.add(lastPage)

    if (currentPage >= pageCount) {
      nextItem.set('active', 'disabled')
    }

    if ((currentPageFloor + 10) >= pageCount) {
      next10.set('active', 'disabled')
    }

    if (currentPage >= pageCount) {
      lastPage.set('active', 'disabled')
    }
  },

  onRender: function () {
    $(function () {
      $('ul li.disabled a').click(function () {
        return false
      })
    })
  }
})

function findPrevious10 (currentPageFloor) {
  if ((currentPageFloor - 10) === 0) {
    return 1
  } else {
    return currentPageFloor - 10
  }
}

export default PaginationView
