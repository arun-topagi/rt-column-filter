import React, { useMemo, useState } from "react";
import { MultiSelect } from "react-multi-select-component";


function MulitSelectColumnFilter({
  column: { filterValue=[], setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    });
    return [...options].map((v) => ({label: String(v), value: v}));
  }, [id, filterValue]);
  return (
    <MultiSelect
      options={options}
      value={filterValue}
      onChange={setFilter}
      valueRenderer={() => filterValue.length ? 'Selecte More' : 'No Filters'}
      filterOptions={(options, filter) => {
        if (!filter) {
          return options;
        } else {
        return options.filter((op) => {
          return op.label === filter
        })
      }
    }}
    />
  );
}

export default function makeData(jsonData) {
  const columns = useMemo(() => {
    const cols = [];
    Object.keys(jsonData[0]).forEach((k) => {
      cols.push({
        Header: k,
        accessor: k,
        align: "center" ,
        filter: 'includes',
        Filter: MulitSelectColumnFilter,
      });
    });
    return cols;
  }, []);
  const data = useMemo(() => {
    return jsonData.map((row, ind) => {
        return {...row, align: "center"}
    });
  }, []);
  return {
    columns: columns,
    data: data,
  };
}
