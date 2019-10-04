import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxSort from "./BoxSort";
import {actToggleBox} from './../../actions/index'
class Sort extends Component {
    toggleBox = () => {
        this.props.handleToggle();
    }
    render() {
        const {isShowBox}  = this.props;
        let btnName         = (isShowBox === true) ? "Sort" : "Sort";
        let btnClass        = (isShowBox === true) ? "show-sort" : "hide-sort";
        return (
                <div className={`sort-box ${btnClass}`}  onClick={this.toggleBox}>
                    {btnName}
                    <BoxSort />
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowBox: state.isShowBox
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: () => {
            dispatch(actToggleBox()) ;
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
