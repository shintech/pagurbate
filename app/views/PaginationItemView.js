const PageNavigationItemView = Backbone.Marionette.View.extend({
  tagName: 'li',

  template: require('../templates/pagination-item-view-template.html'),
  initialize: function (options) {
    this.options = options
  },

  onRender: function () {
    if (this.model.get('active')) {
      this.el.className = 'active'
    }
  }
})

export default PageNavigationItemView
