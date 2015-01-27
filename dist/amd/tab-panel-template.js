define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
      var stack1, buffer = '';
      data.buffer.push("  ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
      if (stack1 != null) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
    },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
      var stack1, buffer = '';
      stack1 = helpers['if'].call(depth0, "active", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
      if (stack1 != null) { data.buffer.push(stack1); }
      return buffer;
    },"useData":true});
  });