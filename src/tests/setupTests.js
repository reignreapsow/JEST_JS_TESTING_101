import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//# ENZYME - SETUP CONFIG  

configure({
    adapter: new Adapter()
});

/* 
    SETUP ENZYME & JEST
    -------------------

        1. IMPORT ENZYME Components
        
        2. CREATE setupTests.js
        
        3. SET-UP JEST Config jest.config.json for polyfill and JEST & ENZYME configuration

        4. IN package.json: 
            CHANGE test script to:
                "test": "jest --config=jest.config.json --watchAll"

                * TELLING IT TO USE THE jest.config.json file

        5. RUN " yarn test "
*/