// Expenses Reducer TESTS
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'; //# IMPORTED FIXTURES

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]); //state = empty array
});

test('should remove expense by id', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expenses if id not found', () => {
    const action= {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); //unchanged expenses array 
})

//! CHALLENGE CREATE 3 MORE TEST CASES Below

//! should add an expense
test('should add an expense', ()=>{
    const expense = { //FIXTURE (Dumby Data)
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500

    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
        
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense]);
});

//! should edit an expense
test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

//! should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});