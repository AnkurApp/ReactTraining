import { Drawer, Link } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PolymerIcon from "@material-ui/icons/Polymer";

const useStyles = makeStyles({
  sidebar: {
    position: "relative",
  },

  sidebarColor: {
    backgroundColor: "#1564c0",
    height: "100%",
    width: "85px",
  },

  bgBlack: {
    backgroundColor: "#373737",
    padding: "10px 20px",
  },

  moneroIcon: {
    marginLeft: "-6px",
    width: "50px",
    height: "50px",
    transition: "margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
  },

  whiteColor: {
    color: "#ffffff",
    marginBottom: "20px",
    fontSize: "35px",
    padding: "8px 20px",
  },
});

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <Drawer
        className={classes.sidebarColor}
        anchor={"left"}
        variant={"permanent"}
      >
        <Link className={classes.bgBlack} href={"#"}>
          <svg
            className={`${classes.moneroIcon} MuiSvgIcon-root`}
            focusable="false"
            viewBox="0 0 546.45 546.45"
            aria-hidden="true"
          >
            <path
              fill="#1565C0"
              d="M149.385 505.172c-5.5 0-12.25-3.897-15-8.66L10.874 282.584c-2.75-4.763-2.75-12.557 0-17.32L134.385 51.336c2.75-4.763 9.5-8.66 15-8.66h247.021c5.5 0 12.25 3.897 15 8.66l123.512 213.928c2.75 4.763 2.75 12.558 0 17.32L411.407 496.512c-2.75 4.763-9.5 8.66-15 8.66H149.385z"
            ></path>
            <path
              fill="#0D47A1"
              d="M396.771 505.176h-67.624L184.898 360.925l-3.178-8.881 101.343 39.38 74.5-39.166 26-77.667-3.5-35.167-20.082-50.082 145.036 145.035-.896 1.55-62.737 108.664-29.779 51.58s-.695 1.373-2.146 2.94c-2.094 2.265-7.42 6.065-12.688 6.065z"
            ></path>
            <path
              fill="#E3F2FD"
              d="M272.896 398.424c-67.822 0-123-55.178-123-123s55.178-123 123-123 123 55.178 123 123-55.178 123-123 123zm0-224c-55.691 0-101 45.309-101 101s45.309 101 101 101 101-45.309 101-101-45.309-101-101-101z"
            ></path>
            <path
              fill="#E3F2FD"
              d="M181.729 335.927h49v-52l42.167 42.996 41.973-43.877v52.75l47.911.131 14.391-14.392v-5.274l-40.637.132v-86.1l-63.638 66.631-63.875-66.5v86.001l-32.792.002z"
            ></path>
          </svg>
        </Link>

        <div className={classes.sidebarColor}>
          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href="#">
            <QuestionAnswerOutlinedIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <PolymerIcon className={classes.whiteColor} />
          </Link>

          <Link href={"#"}>
            <CopyrightOutlinedIcon className={classes.whiteColor} />
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
