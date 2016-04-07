import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },

  totalCost: Ember.computed('items.[]', function(){
    var items = this.get('items');
    var totalCost = 0;
    items.forEach(function(item) {
      totalCost = totalCost + item.get('cost');
    });
    return totalCost;
  }),

});
