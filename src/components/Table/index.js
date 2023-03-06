import React from "react";
import { useTable, useFilters, usePagination } from "react-table";

// mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)((theme) => ({
  marginRight: "10px",
}));

function index({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      includes: (rows, id, filterValue) => {
        const fvals = filterValue.map((fv) => fv.value)
        if(fvals.length === 0){
          return rows
        }
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return fvals.includes(rowValue);
        });
      },
    }),[]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 100 },
      filterTypes,
    },
    useFilters,
    usePagination
  );
  return (
    <Box>
      <Box my={1}>
        <CustomButton
          variant="outlined"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <Typography textTransform={"capitalize"}>First Page</Typography>
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <Typography textTransform={"capitalize"}>Previous</Typography>
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <Typography textTransform={"capitalize"}>Next</Typography>
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <Typography textTransform={"capitalize"}>Last Page</Typography>
        </CustomButton>
        <Box component={"span"}>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ height: "715px", overflowY: "scroll" }}
      >
        <Table
          {...getTableProps()}
          sx={{ minWidth: 700 }}
          aria-label="column filtration"
        >
          <TableHead
            sx={{
              position: "sticky",
              top: "0px",
              margin: "0px",
              backgroundColor: "white",
            }}
          >
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps()}
                    align={column.align ? column.align : "left"}
                  >
                    <Typography textTransform={"uppercase"}>
                      {column.render("Header")}
                    </Typography>
                    <Box component={"div"}>
                      {column.canFilter ? column.render("Filter") : null}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        align={cell.column.align ? cell.column.align : "left"}
                        sx={{ py: "5px" }}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default index;
