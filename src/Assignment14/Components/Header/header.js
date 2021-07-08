import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  List,
  ListItem,
  Link,
  Avatar,
  Typography,
} from "@material-ui/core";
import MusicNoteSharpIcon from "@material-ui/icons/MusicNoteSharp";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },

  sectionA: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    backgroundColor: " rgb(47, 115, 235)",
    color: "#fff",
    position: "absolute",
    width: "3.8rem",
    height: "70%",
    padding: "0.6rem 0",
    left: "0",
  },

  image: {
    marginLeft: "4rem",
  },

  name: {
    fontWeight: "bold",
    margin: "0 1rem",
    fontSize: "18px",
  },

  icon: {
    margin: "0 1.2rem",
  },

  verticalLine: {
    width: "1px",
    height: "40px",
    backgroundColor: "	#C8C8C8",
  },

  listContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "3rem",
    height: "64px",
  },

  listItem: {
    margin: "0 1.5rem",
  },

  link: {
    color: "#909090",
    fontSize: "18px",
    fontWeight: "500",
  },

  selected: {
    borderBottom: "3px solid #2f73eb",
  },

  sectionB: {
    position: "absolute",
    right: "90px",
    width: "13%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  userName: {
    color: "#909090",
    fontSize: "18px",
    fontWeight: "500",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.navbarContainer}>
        <Box component="div" className={classes.sectionA}>
          <MusicNoteSharpIcon fontSize={"large"} className={classes.logo} />
          <Avatar
            src="data:image/jpeg;base64,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"
            alt="Coffee"
            className={classes.image}
          />
          <Typography variant="h6" className={classes.name}>
            {"Cafe Lovers"}
          </Typography>
          <ExpandMoreIcon className={classes.icon} />
          <Box component="div" className={classes.verticalLine} />
        </Box>

        <List className={classes.listContainer} disablePadding>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Dashboard"}
            </Link>
          </ListItem>
          <ListItem className={`${classes.listItem} ${classes.selected}`}>
            <Link
              href="#"
              className={classes.link}
              style={{ color: "#2f73eb" }}
              underline="none"
            >
              {"Schedule"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Messenger"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Reports"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Staff"}
            </Link>
          </ListItem>
        </List>

        <Box component="div" className={classes.sectionB}>
          <NotificationsNoneSharpIcon
            fontSize={"large"}
            style={{ color: "	#909090 " }}
          />
          <Avatar
            src="https://material-ui.com/static/images/avatar/2.jpg"
            alt="Users"
          />
          <Typography variant="h6" className={classes.userName}>
            {"Anton"}
          </Typography>
          <ExpandMoreIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
