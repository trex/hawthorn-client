import React from 'react'
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { ACCOUNT } from '../services/graphql/queries'
import { Avatar } from './Avatar'

export const Account = withRouter((props) => {
  // TODO - will userId ever come in on props directly in addtion to props.location
  //  as it does on redirect from Login?

  // We now need to exchange the code for a token
  const { loading, error, data } = useQuery(ACCOUNT, {
    onError(error) {
       errorHandler(error, props.history)
    },
    variables: { userId: props.location.state.userId }
  })

  if (loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  if (error) {
    return (
      <h2>Error :( {JSON.stringify(error)}</h2>
    )
  }

  if (data.account) {
    return (
      <div className="bg-white rounded shadow-sm ">
        <div className="m-3">
          <h1>Your Account Details</h1>
          <small>(this information is only visible to you)</small>
          <div className="m-3 media">
            <Avatar imageUrl={data.account.imageUrl} />
            <div className="media-body">
              <h4>username: {data.account.username}</h4>
              <p>name: <strong>{data.account.firstName} {data.account.lastName}</strong></p>
              <p>email: {data.account.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the request returns null, the user requesting the account does not have permissions,
  //  force a logout
  props.history.push("/logout")
});
