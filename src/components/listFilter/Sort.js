import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxSort from "./BoxSort";
import {actToggleBox} from './../../actions/index'
class Sort extends Component {
    constructor(props) {
        super(props)
    }
    toggleBox = () => {
        this.props.handleToggle();
    }
    render() {
        const   {isShowBox}             = this.props;
        let     {orderBy, orderDir}     = this.props.sort;
        let     btnName                 = (isShowBox === true) ? "Sort": "Sort";
        let     btnClass                = (isShowBox === true) ? "show-sort" : "hide-sort";
        return (
                <div className={`sort-box box-list ${btnClass}`}  onClick={this.toggleBox}>
                    {btnName}
                    <BoxSort />
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowBox: state.isShowBox,
        sort: state.sort,
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
