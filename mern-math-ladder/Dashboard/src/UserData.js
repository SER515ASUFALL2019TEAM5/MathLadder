import React, {
    Component
  } from 'react'
  
  const USER_SERVICE_URL = 'http://localhost:5000/users/';
  class UserTableHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        users: []
      };
    }
    render = () => < SimpleUserTable data = {
      this.state.users
    }
    isFetching = {
      this.state.isFetching
    }
    />;
    componentDidMount() {
      this.fetchUsers();
    }
    fetchUsers = < REDACTED >
  }
  export default UserData