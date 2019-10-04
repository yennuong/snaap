import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actSort} from './../../actions/index'

class BoxSort extends Component{
    constructor(props){
        super(props);
    }
    handleSort = (orderBy, orderDir) => {
        this.props.sortItem(orderBy, orderDir );
    }
    render(){
        let { isShowBox } = this.props;
        let {orderBy, orderDir}     = this.props.sort;
        let strSort = orderBy + " - " + orderDir;
        if(isShowBox === false) return null;
        return(
            <ul className='list'>
                <li><a onClick={()=>this.handleSort('name', 'asc')}>Name ASC</a></li>
                <li><a onClick={()=>this.handleSort('name', 'desc')}>Name DESC</a></li>
                <span className="label label-success label-medium">{ strSort }</span>
            </ul>

        );
    }
}
const mapStateToProps = state => {
    console.log('state',state);
    return {
        isShowBox: state.isShowBox,
        sort: state.sort,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sortItem: (orderBy, orderDir) => {
            dispatch(actSort(orderBy, orderDir)) ;
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxSort);