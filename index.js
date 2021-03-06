import PaginationView from './app/views/PaginationView'

const Pagurbate = Backbone.Marionette.View.extend({
  regions: {
    body: {
      el: '.pagurbate'
    }
  },

  template: _.template('<div class="pagurbate"></div>'),

  initialize: function (options) {
    this.pageData = options.pageData
  },

  onRender: function () {
    const paginationView = new PaginationView({ pageData: this.pageData })

    this.showChildView('body', paginationView)
  }
})

export default Pagurbate
