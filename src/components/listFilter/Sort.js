import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actToggleForm} from './../../actions/index'
class Sort extends Component {
    toggleForm = () => {
        this.props.handleToggle();
    }
    render() {
        const {isShowForm}  = this.props;
        console.log('isShowForm',isShowForm);
        let btnName         = (isShowForm === true) ? "Low Price" : "Sort";
        let btnClass        = (isShowForm === true) ? "btn-success" : "btn-info";
        return (
                <div className="sort-box" onClick={this.toggleForm}>{btnName}</div>
        );
    }
}

const mapStateToProps = state => {
    console.log('isShowForm',state);
    return {
        isShowForm: state.isShowForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: () => {
            dispatch(actToggleForm()) ;
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
