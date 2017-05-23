const PageNavigationItemView = Backbone.Marionette.View.extend({
  tagName: 'li',

  template: _.template(' <a href="#page/<%- page  %>"><%- text %></a>'),
  onRender: function () {
    if (this.model.get('active') === 'active') {
      this.el.className = 'active'
    } else if (this.model.get('active') === 'disabled') {
      this.el.className = 'disabled'
    }
  }
})

export default PageNavigationItemView
