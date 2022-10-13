import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>constellation</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
