import React from 'react';

const AllUsers = props => {

    return (
      <React.Fragment>
          <div className="col s12 select-user-from-list">
              {/*<select>*/}
              {props.allUsers.map(user => {
                  {/*<option value={user[0].email}>{user[0].fname} {user[0].linitial}</option>*/}
                  {/*console.log('*** allUsers each user ***', user);*/}
                  console.log(user[0].email, user[0].fname, user[0].linitial);
                  <span className="bold-text">{user[0].email}, {user[0].fname}, {user[0].linitial}</span>
              })}
              {/*</select>*/}
          </div>
      </React.Fragment>
    );

};

export default AllUsers;
