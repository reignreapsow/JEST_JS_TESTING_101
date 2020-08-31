//expenseList tests
//==========================================
//  SNAPSHOT-TESTING-WITH-DYNAMIC-COMPONENTS
//===========================================

import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/AppRouter/ExpenseList.js';

import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapShot();
})