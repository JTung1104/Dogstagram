import React from 'react';
import ApiUtil from '../../util/api_util';
import UserStore from '../../stores/user';
import makeCn from '../../util/makeCn';
import styles from './header_profile_link.css';
const cn = makeCn({ _:styles });

var HeaderProfileLink = React.createClass({
  getInitialState: function () {
    return { username: "" };
  },
  componentDidMount: function () {
    ApiUtil.fetchUser(currentUserId, function () {
      this.setState({username: UserStore.findById(currentUserId).username});
    }.bind(this));
  },
  render: function () {
    return (
      <a className={cn("_link montserrat relative")} href={"#/users/" + currentUserId}>
        {this.state.username}
      </a>
    );
  }
});

export default HeaderProfileLink;
