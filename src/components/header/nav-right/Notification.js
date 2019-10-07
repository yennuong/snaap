import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actToggleBox} from '../../../actions/index'
import notification from "../../../reducers/notification";
class Notification extends Component {
    render() {
        const   {isShowBox}             = this.props;
        return (
        <a className="notification box-list" onClick={this.toggleBox}>
                <span className="icon"></span>
                Notification
                <ul className="list">
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                    <li>List 4</li>
                    <li>List 5</li>
                    <li>List 6</li>
                </ul>
            </a>
        );
    }
}
const mapStateToProps = state => {
    return {
        isShowBox: state.isShowBox,
        notification: state.notification,
    }
}
export default connect(mapStateToProps,null)(Notification);