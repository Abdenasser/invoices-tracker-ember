export default function() {
  this.namespace = '/api';

  this.get('/invoices', function() {
    return {
      data: [{
        type: 'invoices',
        id: 'inv1',
        attributes: {
          title: 'invoice 1',
          amount: '200',
          date:'13/02/2019'
        }
      }, {
        type: 'invoices',
        id: 'inv2',
        attributes: {
          title: 'invoice 2',
          amount: '150',
          date: '02/03/2019'
        }
      }, {
        type: 'invoices',
        id: 'inv3',
        attributes: {
          title: 'invoice 3',
          amount: '1050',
          date: '26/04/2019'
        }
      }]
    };
  });
}
