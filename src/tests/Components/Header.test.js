
import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow'; //# ALTERNATE SHALLOW RENDERING IMPORT
import Header from '../../components/AppRouter/Header';

//#################################//
//#  SECTION - SnapShot Testing     #
//#################################//



    //* Allow us to track changes of data over time
    //* .toMatchSnapshot() = compares the snapshot with the existing snapshot


//Shallow rendering - when your not ready for user interaction and life cycle events - Use to figure whats getting rendered


//Full Dom Rendering - renders child components

//////////////////////////
//  SHALLOW RENDERING   //
//////////////////////////
/*  
    * TESTS components as a unit and ensure that your tests aren't indirectly asserting on behavior of child components.    

    * import shallow from enzyme for shallow rendering


      # How-To RULES
       -------------
    1. IMPORT react-test-renderer
    2. Create Component SnapShot Test
        A> Create Component Test Function
        B> Create a new instance of renderer
        C> CREATE a snapshot of component
        D> Compare snapshots
        E> TEST Component
     
*/

/*
 test('should render Header correctly', ()=> {
    const renderer  = new ReactShallowRenderer();   //#     creates a NEW instance
    renderer.render(<Header />)                     //#     creates a snapshot of the component
    expect(renderer.getRenderOutput()).toMatchSnapshot();   //# compares snapshots
    //console.log(renderer.getRenderOutput());    //#  LOGS rendered output of the JSX
}); 

*/

/*
\//# ALTERNATIVE SHALLOW RENDERING Version 
test('should render 1 Header h1 correctly', () => {
    const wrapper = shallow( <Header /> );           //#  new instance of shallow renderer
    expect(wrapper.find('h1').length).toBe(1);       //#  expects (1) h1
});

\//# Should render header h1 text value
test('should render Header h1 text value correctly', () => {
    const wrapper = shallow( <Header /> );      //#  new instance of shallow renderer
    expect(wrapper.find('h1').text()).toBe('Expensify');  //#  expects h1 text value 
});
*/

//# ALTERNATIVE SHALLOW RENDERING Version 
test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);           //#  new instance of shallow renderer
    expect(wrapper).toMatchSnapshot();             //#  expects Header Component to match snapshot
});
w