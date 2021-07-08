import React from "react";

import {
  makeStyles,
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles({
  drawerContainer: {
    "& .MuiDrawer-paperAnchorDockedLeft": {
      width: "13%",
      zIndex: "-1",
      backgroundColor: "#f5f7fa",
      padding: "5rem 1.5rem 0 1.5rem",
    },
  },

  boxContainer: {
    margin: "2rem 0",
  },

  heading: {
    color: "#2f73eb",
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: "0.5rem 0",
  },

  listItem: {
    padding: "0",
  },

  cafeName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1.5rem 0 0",
  },

  subHeading: {
    fontWeight: "bold",
  },

  icon: {
    color: "#909090",
  },
});

export default function SideDrawer() {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" className={classes.drawerContainer}>
      <Box component="div" className={classes.boxContainer}>
        <Typography variant="h6" className={classes.heading}>
          {"View"}
        </Typography>
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Shifts" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Absences" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </List>
      </Box>

      <Box component="div">
        <Typography variant="h6" className={classes.heading}>
          {"Location & Team"}
        </Typography>

        <Box component="div" className={classes.cafeName}>
          <Typography variant="h6" className={classes.subHeading}>
            {"Lilli's Cafe"}
          </Typography>
          <ExpandLessIcon className={classes.icon} />
        </Box>
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Bar" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Kitchen" />
          </ListItem>
        </List>

        <Box component="div" className={classes.cafeName}>
          <Typography variant="h6" className={classes.subHeading}>
            {"John's Cafe"}
          </Typography>
          <ExpandLessIcon className={classes.icon} />
        </Box>
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Bar" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Reception" />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <Checkbox color="primary" />
            </ListItemIcon>
            <ListItemText primary="Kitchen" />
          </ListItem>
        </List>

        <Box component="div" className={classes.cafeName}>
          <Typography variant="h6" className={classes.subHeading}>
            {"Nadia's Cafe"}
          </Typography>
          <ExpandMoreIcon className={classes.icon} />
        </Box>
      </Box>
    </Drawer>
  );
}
