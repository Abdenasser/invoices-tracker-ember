import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByDate(param) {
      if (param !== '') {
        return this.store.query('invoice', { date: param });
      } else {
        return this.store.findAll('invoice');
      }
    }
  }
});
