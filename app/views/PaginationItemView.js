const PageNavigationItemView = Backbone.Marionette.View.extend({
  tagName: 'li',

  template: _.template(' <a href="#page/<%- page  %>"><%- text %></a>'),
  onRender: function () {
    if (this.model.get('active')) {
      this.el.className = 'active'
    }
  }
})

export default PageNavigationItemView
