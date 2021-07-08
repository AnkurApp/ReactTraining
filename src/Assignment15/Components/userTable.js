import React, { useState, useEffect } from "react";

import {
  makeStyles,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
} from "@material-ui/core";

import DataRow from "./tableRow";

const useStyles = makeStyles({
  tableContainer: {
    padding: "2rem 0rem",
  },

  table: {
    width: "95%",
    margin: "2rem auto",
    border: "3px solid black",
  },

  upperSection: {
    width: "95%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  searchInput: {
    width: "60%",
  },

  btn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#86c306",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "2px",
    color: "#fff",
    border: "none",

    "&:hover": {
      background: "#78AF05",
    },
  },

  tableHead: {
    fontSize: "18px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default function UserTable(props) {
  const classes = useStyles();

  // const tableHeader = [
  //   "Street No",
  //   "StreetName",
  //   "City",
  //   "State",
  //   "Country",
  //   "Postcode",
  //   "Latitude",
  //   "Longitude",
  // ];

  const [search, setSearch] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setData([...props.user]);
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") setSearch(false);
    else {
      setSearch(true);
      let searchedValue = e.target.value;

      let searchArr = data.filter((current) => {
        return Object.values(current).some((value) =>
          value.toString().toLowerCase().includes(searchedValue)
        );
      });
      setSearchedData(searchArr);
    }
  };

  const handleChange = (row, field, value) => {
    setDisable(false);
    // const oldData = JSON.parse(JSON.stringify(data));
    const oldData = [...data];
    console.log("old", oldData);
    oldData[row][field] = value;
    setData(oldData);
    console.log("new", data);
  };

  const handleUpdate = () => {};

  function compareBy(key) {
    return function (a, b) {
      if (order === "asc") {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
      if (order === "desc") {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      }
    };
  }

  function sortBy(key) {
    let arrayCopy = [...data];
    console.log("copy", arrayCopy);

    arrayCopy.sort(compareBy(key));

    if (order === "asc") {
      setOrder("desc");
    }

    if (order === "desc") {
      setOrder("asc");
    }
    setData(arrayCopy);
    console.log("newData", data);
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Box className={classes.upperSection}>
        <TextField
          className={classes.searchInput}
          variant="outlined"
          type={"text"}
          id={"search"}
          name={"search"}
          placeholder="Search"
          onKeyUp={handleSearch}
        />
        <Button
          variant="outlined"
          className={classes.btn}
          disabled={disable}
          onClick={handleUpdate}
        >
          {"Save Changes"}
        </Button>
      </Box>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableHead}
              align="center"
              onClick={() => sortBy("number")}
            >
              {"Street No"}
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              onClick={() => sortBy("name")}
            >
              {"Street Name"}
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              onClick={() => sortBy("city")}
            >
              {"City"}
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              onClick={() => sortBy("state")}
            >
              {"State"}
            </TableCell>
            <TableCell
              className={classes.tableHead}
              align="center"
              onClick={() => sortBy("country")}
            >
              {"Country"}
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              {"Postcode"}
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              {"Latitude"}
            </TableCell>
            <TableCell className={classes.tableHead} align="center">
              {"Longitude"}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {search ? (
            searchedData.length > 0 ? (
              <DataRow user={searchedData} handleChange={handleChange} />
            ) : (
              <TableRow>
                <TableCell>{"No Records Found"}</TableCell>
              </TableRow>
            )
          ) : (
            <DataRow user={data} handleChange={handleChange} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
