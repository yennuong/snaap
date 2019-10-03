import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actToggleForm} from './../../actions/index'
class Sort extends Component {
    render() {
        return (
                <div className="sort-box">Sort</div>
        );
    }
}
const mapStateToProps = state => {
    console.log('stateshowform',state);
    return {
        isShowForm: state.isShowForm
    }
}
export default connect(mapStateToProps, null)(Sort);
