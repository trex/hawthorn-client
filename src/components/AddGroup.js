import React, { useState } from 'react';
import { useHistory } from "react-router"
import { useMutation } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { CREATE_PRIVATE_GROUP } from '../services/graphql/queries';
import Alert from "./atoms/Alert";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

const AddGroup = () => {
  const history = useHistory();
  const [createGroup, { data, loading, error }] = useMutation(
    CREATE_PRIVATE_GROUP,
    {
      errorPolicy: 'all',
      onError(error) {
         errorHandler(error, history)
      },
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="m-3">

      { error && <Alert type="danger" message={error.message} />}

      <Input
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Enter community name"
          required
      />

      <Input
          value={description}
          onChange={e=>setDescription(e.target.value)}
          placeholder="Enter community description"
          required
      />

      <Button
        type="primary"
        onClick={()=>createGroup({ variables: { name, description } })}
        disabled={!name || !description}
        loading={loading}
        text="Add Group"
      />
    </div>
  )
}

export default AddGroup