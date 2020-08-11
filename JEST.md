# JEST JS TESTING
#================

I. INSTALL JEST
>     yarn add --dev jest    

II. CONFIG JEST
    open package.json: 

        A. ADD script:
            "test": "jest"
            * NOW you can RUN JEST with:
                " yarn test "

        B. Create tests directory in src directory

        C. Create a test file to test directory
            <add.test.js> with a test function to test

            //=======================================

            const add = (a, b) => a + b;

            //CALLS JEST TEST() function
            test('should add two  numbers', () =>{
                const result = add(3, 4);
            
            
                //# ARGUMENT CHECK === WHAT expect() does:
                // if(result !== 7 ) {
                //     /*THROWS ERROR*/
                //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
                // }

                
                //CHECKS if result = 7 
                expect(result).toBe(7);
            });
            
            //=======================================
        
        D. RUN COMMAND LINE:
            yarn test

III. SET JEST TO WATCH MODE (continuous)
        
        A. CHANGE JEST script in package.json to continuously watch the files:
            jest --watch


III. JEST TEST ARGUMENT METHODS

        .toBe()         === exactly the same
        .toEqual()      === compare objects/functions
        .any            === expects to be a function, boolean, etc.


IV. SET UP JEST TESTS

    A. Create a basic TEST ARGUMENT
     test ('<ERROR ALERT MESSAGE>', () =>{

         B. DEFINE TEXT VALUE
         const text = 'This is my filter';


         C. SET UP ACTION
         const action = {
             type: '<FILTER_TEXT>',
             text (same as => text = text)
         }

         D. Call the reducer
                === pass in 'undefined' for the current state
                === pass in action object
            const state = filterReducer(undefined, action);
         E. CHECK RESULT
            expect(state.text).toBe(text);
     })

        test('<ERROR_MESSAGE on failure>', ()=>{
            
            //# TEST CASE CODE

            //#===== FIXTURE (Dumby Sample Data)
            const expense = { 
                id: '109',
                description: 'Laptop',
                note: '',
                createdAt: 20000,
                amount: 29500

            }
            //#===

            const action = {
                type: 'ADD_EXPENSE'
                
            }
            //# EXPECTED RESULT
            const state = expensesReducer(expenses, action);
            expect(state).toEqual(expenses);    // expected results
        });
