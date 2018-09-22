import React from 'react';

const AllUsers = props => {

    // console.log('*** allUsers.js allUsers ***', props.allUsers);

    return (
      <React.Fragment>
          {/*{props.allUsers.map(user => <span className="bold-text">{user[0].email}, {user[0].fname}, {user[0].linitial}</span>)}*/}
          <p>hello world</p>
          <p>{props.allUsers}</p>
      </React.Fragment>
    );

};

export default AllUsers;
