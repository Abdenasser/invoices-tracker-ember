import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  amount: DS.attr(),
  date: DS.attr(),
});
