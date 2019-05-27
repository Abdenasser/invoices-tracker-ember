export default function() {
  this.namespace = '/api';

  let invoices = [{       
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

  this.get('/invoices', function(db, request) {
    if(request.queryParams.date !== undefined) {
      let filteredInvoices = invoices.filter(function(i) {
        return i.attributes.date.indexOf(request.queryParams.date) !== -1;
      });
      return { data: filteredInvoices };
    } else {
      return { data: invoices };
    }
  });
}
