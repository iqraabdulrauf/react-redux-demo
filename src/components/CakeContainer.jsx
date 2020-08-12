import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './redux-demo';
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
// takes state and return new state
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// takes dispatch method as parameter and return an object
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

