import Ember from 'ember';

var products = [{
  title: "Title",
  description: "A Very long decription about this item and its possible posibilites. I think its a great buy for young people that love the outdoors and the indoors!",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
},{
  title: "Title",
  description: "A Very long decription about this item and its possible posibilites. I think its a great buy for young people that love the outdoors and the indoors!",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}];

export default Ember.Route.extend({
  model() {
    return products;
  },
});
