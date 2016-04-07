import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },

    product() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost')
      };
      this.set('addNewProduct', false);
      this.sendAction('product', params);
    }
  }
});
