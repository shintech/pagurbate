import PaginationView from './views//PaginationView'

const Pagurbate = Backbone.Marionette.View.extend({
  template: require('./templates/footer-view-template.html'),
  regions: {
    body: {
      el: '.main'
    }
  },

  initialize: function (options) {
    const {currentPage, pageCount} = options.pageData

    this.currentPage = parseInt(currentPage)
    this.pageCount = parseInt(pageCount)

    this.pageData = options.pageData
  },

  onRender: function () {
    const paginationView = new PaginationView({ pageData: this.pageData })

    const next = `<li><a href="#page/${this.currentPage + 1}">Next</a></li>`
    const prev = `<li><a href="#page/${this.currentPage - 1}">Prev</a></li>`

    this.showChildView('body', paginationView)

    if (this.currentPage > 1) {
      $(paginationView.el).prepend(prev)
    }

    if (this.currentPage < this.pageCount) {
      $(paginationView.el).append(next)
    }
  }
})

export default Pagurbate
