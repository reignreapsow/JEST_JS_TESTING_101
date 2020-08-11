
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
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
/*  //# How-To RULES
       -------------
    1. IMPORT react-test-renderer
    2. Create Component SnapShot Test
        A> Create Component Test Function
        B> Create a new instance of renderer
        C> CREATE a snapshot of component
        D> Compare snapshots
        E> TEST Component
     
*/

test('should render Header correctly', ()=> {
    const renderer  = new ReactShallowRenderer();   //#     creates a NEW instance
    renderer.render(<Header />)                     //#     creates a snapshot of the component
    expect(renderer.getRenderOutput()).toMatchSnapshot();   //# compares snapshots
    //console.log(renderer.getRenderOutput());    //  LOGS rendered output of the JSX
});