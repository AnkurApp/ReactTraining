import React from "react";

import {
  Paper,
  Link,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
  Typography,
  makeStyles,
  Tooltip,
  Button,
} from "@material-ui/core";
import { AccountBalanceSharp, FlagSharp } from "@material-ui/icons";

const dataTable = [
  {
    Seller: "Bitpal (335*; 100%)",
    payMethod: {
      BankName: " IMPS Bank Transfer India",
      Type: "UPI",
    },
    Price: "22422.07 INR",
    Limits: "5000.00 - 20000.00 INR",
  },
  {
    Seller: "Bitpal (335*; 100%)",
    payMethod: {
      BankName: " IMPS Bank Transfer India",
      Type: "UPI",
    },
    Price: "22422.07 INR",
    Limits: "5000.00 - 20000.00 INR",
  },
  {
    Seller: "Bitpal (335*; 100%)",
    payMethod: {
      BankName: " IMPS Bank Transfer India",
      Type: "UPI",
    },
    Price: "22422.07 INR",
    Limits: "5000.00 - 20000.00 INR",
  },
  {
    Seller: "Bitpal (335*; 100%)",
    payMethod: {
      BankName: " Other online Payment",
      Type: "UPI - Phonepe",
    },
    Price: "22422.07 INR",
    Limits: "5000.00 - 20000.00 INR",
  },
  {
    Seller: "Bitpal (335*; 100%)",
    payMethod: {
      BankName: " Other online Payment",
      Type: "Paytm, Amazon-pay",
    },
    Price: "22422.07 INR",
    Limits: "5000.00 - 20000.00 INR",
  },
];

const usestyles = makeStyles({
  tableContainer: {
    width: "83%",
    margin: "auto",
  },

  sellerLinks: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    fontSize: "16px",
    fontWeight: "500",
    color: "#1465C0",

    "&:hover": {
      color: "#444",
    },
  },

  priceColor: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
    color: "#388538",
    fontWeight: "500",
    cursor: "pointer",
  },

  statusSignal: {
    backgroundColor: "#81C784",
    border: "none",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    margin: "1px 10px ",
  },

  tableButton: {
    backgroundColor: "#ffba1f",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#b28215",
    },
  },

  tableCell: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    cursor: "pointer",
  },

  tableHead: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    color: "#424242",
  },

  paymentColumn: {
    display: "flex",
    alignItems: "center",
  },

  flagIcon: {
    marginRight: "5px",
  },

  toolTip: {
    backgroundColor: "#1465C0",
    color: "#fff",
    fontSize: "16px",
    padding: "15px",
  },
});

export default function DataTable(props) {
  const classes = usestyles();

  function getData(item) {
    return (
      <TableRow hover>
        <TableCell padding={"inherit"}>
          <Link className={classes.sellerLinks} underline={"true"} href={"#"}>
            {item.Seller}
            <Tooltip
              placement={"top"}
              title={"Last seen 10 minutes ago"}
              classes={{ tooltip: classes.toolTip }}
            >
              <div className={classes.statusSignal}></div>
            </Tooltip>
          </Link>
        </TableCell>

        <TableCell>
          <div className={classes.tableCell}>
            <div>
              <FlagSharp className={classes.flagIcon} />
            </div>
            <div>
              <Typography
                className={classes.paymentColumn}
                variant={"subtitle1"}
                color={"inherit"}
              >
                <AccountBalanceSharp /> {item.payMethod.BankName}
              </Typography>
              <Typography variant={"subtitle1"} color={"textSecondary"}>
                {item.payMethod.Type}
              </Typography>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <Typography variant={"h5"} className={classes.priceColor}>
            {item.Price}
          </Typography>
        </TableCell>

        <TableCell padding={"0px 10px 0px 0px"} align={"right"}>
          <Typography variant={"subtitle1"}> {item.Limits} </Typography>
        </TableCell>

        <TableCell align={"center"}>
          <Button variant={"contained"} className={classes.tableButton}>
            {"BUY"}
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table padding={"none"}>
        <TableHead>
          <TableRow>
            <TableCell padding={"0px 10px"} className={classes.tableHead}>
              {props.columnOne}
            </TableCell>
            <TableCell
              padding={"0px 0px 0px 20px"}
              className={classes.tableHead}
            >
              {"Payment Method"}
            </TableCell>
            <TableCell className={classes.tableHead}>{"Price/XMR"}</TableCell>
            <TableCell
              padding={"0px 10px 0px 0px"}
              align={"right"}
              className={classes.tableHead}
            >
              {"Limits"}
            </TableCell>
            <TableCell align={"right"}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{dataTable.map((item) => getData(item))}</TableBody>
      </Table>
    </TableContainer>
  );
}
