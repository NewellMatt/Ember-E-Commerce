import Ember from 'ember';

export default Ember.Route.extend({
  addToCart(item) {
      this.get('shoppingCart').add(item);
    },
  model() {
    return this.store.findAll('product');
  },
});
