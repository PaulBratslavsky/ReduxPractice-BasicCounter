import React from 'react';

// ALLOWS YOU TO BRIDGE ( CONNECT ) REACT WITH YOUR REDUX
import { connect } from 'react-redux';

const Counter = (props) => {
    return(
        <div>
            <h2>Getting High On Redux</h2>
            <h3>Number Of Puffs: { props.count }</h3>
            <button onClick={props.onIncrementClick} className="btn-lg">Smoke That Redux</button>
        </div>
    );
}

  // ALLOWS YOU TO USE YOUR STATE IN PROPS - KEEP IT OUT OF THE COMPONNET
function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    };
}

// CREATES OUR ON BUTTON CLICK EVENT - THEN WE CREATE ACTION AND DISPATCH IT
function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('Where is this comming from, the button click?');
            const action = {
                type: 'INCREMENT'
            };
            dispatch(action);
        }
    };
}

// NEED TO CONNECT YOUR FUNCTION TO WORK WITH REDUX
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

