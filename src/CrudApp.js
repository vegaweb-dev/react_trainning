import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
  { name: 'name1', constellation: 'constellation1', id: 'id1' },
  { name: 'name2', constellation: 'constellation2', id: 'id2' },
  { name: 'name3', constellation: 'constellation3', id: 'id3' },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {};
  const deleteData = (id) => {};

  return (
    <>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
};

export default CrudApp;
