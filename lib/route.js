$(document).ready(function() {
  Backbone.history.start({pushState: true});
  var SectionRoutes = Backbone.Router.extend({});
  sections = new SectionRoutes();
  sections.navigate("/test/")
});

