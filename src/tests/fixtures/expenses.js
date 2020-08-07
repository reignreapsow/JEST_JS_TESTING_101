//# FIXTURES are just base line test data (SAMPLE TEST DUMBY DATA)

import moment from 'moment';


export default [{
    id: '1',
    description: 'Gum', 
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'RENT', 
    note: '',
    amount: 109500,
    //createdAt: -1000    // -1sec in the past
    createdAt: moment(0).subtract(4, 'days').valueOf()    // -4 days in the past
},
{
    id: '3',
    description: 'Credit Card', 
    note: '',
    amount: 4500,
    //createdAt: 1000 // +1sec in the future
    createdAt: moment(0).add(4, 'days').valueOf() // +4 days in the future
}];