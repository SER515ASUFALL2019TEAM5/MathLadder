//Reference https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/

import React, {
    Component
  } from 'react'
  
  const USER_SERVICE_URL = 'http://localhost:5000/users/';
  class UserData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        users: []
      };
    }
    render = () => < UserData userData = {
      this.state.users
    }
    isFetching = {
      this.state.isFetching
    }
    />;
    componentDidMount() {
     this.fetchUsers();
    }
    
  }
  export default UserData