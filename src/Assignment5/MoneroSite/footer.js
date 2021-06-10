import React from "react";
import { makeStyles, Button, Link, Typography} from "@material-ui/core";

import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles({
  footerContainer :{
    width: '70%',
    margin: '0 auto'
  },
  innerFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '0 auto',
  },
  linkFlexRow: {
    display: "flex",
    flexDirection: "column",
  },
  linkFlexColumn: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  languageButton: {
    margin: "10px 0 10px 0",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "16px",
    height: "70px",
    width: "300px"
  },
  languageIcon: {
    margin: "0 10px 0 0",
  },
  copyright: {
    marginBottom: '25px',
    fontSize: '18px'
  },
  socialLinksSection:{
    display: 'flex',
    justifyContent: 'center',
  },
  socialLinks: {
    width: "50px",
    height: "30px",
    padding: "0 12px 12px 12px",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.innerFooter}>
        <Typography className={classes.copyright} varient="p">
          &copy; {"2021 Blue Sunday Limited"}
        </Typography>
        <div className={classes.linkFlexColumn}>
          <Typography className={classes.linkFlexRow}>
            <Link href="#" underline={"always"}>
              {"About"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Terms of service"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Fees"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Contact us"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Law Enforcement Inquiries"}
            </Link>
          </Typography>

          <Typography className={classes.linkFlexRow}>
            <Link href="#" underline={"always"}>
              {"Security bounty"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Affiliate"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Statistics"}
            </Link>
            <Link href="#" underline={"always"}>
              {"API docs"}
            </Link>
          </Typography>

          <Typography className={classes.linkFlexRow}>
            <Link href="#" underline={"always"}>
              {"Local Bitcoins Alternative"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Monero News"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Knowledge"}
            </Link>
            <Link href="#" underline={"always"}>
              {"Monero Block Explorer"}
            </Link>
          </Typography>

          <Typography className={classes.linkFlexRow}>
            <Link href="#" underline={"always"}>
              {"Tor hidden service"}
            </Link>
            <Link href="#" underline={"always"}>
             {" I2P"}
            </Link>
            <Link href="#" underline={"always"}>
              {"B32 I2P"}
            </Link>
            <Link href="#" underline={"always"}>
             {' AgoraDesk'}
            </Link>
          </Typography>
        </div>
        <Button className={classes.languageButton}>
          <LanguageIcon className={classes.languageIcon} />
          {"Change Language"}
        </Button>
      </div>
      <div className={classes.socialLinksSection}>
        <Button>
          <TwitterIcon className={classes.socialLinks} />
        </Button>
        <Button>
          <RedditIcon className={classes.socialLinks} />
        </Button>
        <Button>
          <FacebookIcon className={classes.socialLinks} />
        </Button>
        <Button>
          <TelegramIcon className={classes.socialLinks} />
        </Button>
        <Button>
          <GitHubIcon className={classes.socialLinks} />
        </Button>
      </div>
    </div>
  );
}
