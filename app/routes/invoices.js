import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'inv1',
      title: 'invoice 1',
      amount: '200',
      date:'13/02/2019'
    }, {
      id: 'inv2',
      title: 'invoice 2',
      amount: '150',
      date: '02/03/2019'
    }, {
      id: 'inv3',
      title: 'invoice 3',
      amount: '1050',
      date: '26/04/2019'
    }];
  }
});
