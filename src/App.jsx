import React,{ Component } from 'react';
import { connect } from './react-redux'
import PropTypes from 'prop-types';

class App extends Component{
    static contextTypes = {
        store: PropTypes.object
    }

    Add = () => {
        this.props.addCount()
    }

    render(){
        const { count } = this.props;
        return <h2 style={{ cursor:'pointer' }} onClick={this.Add}>AppCount---{count}</h2>
    }
}
const mapStateToProps = state => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCount: () => {
        dispatch({type:'add'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);