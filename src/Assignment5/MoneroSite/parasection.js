import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  paraSection: {
    width: "55%",
    margin: "0 auto",
    padding: "0 2rem",
  },
  heading: {
    fontSize: "23px",
    lineHeight: "1.2",
    // fontFamily: "Roboto",
    fontWeight: '550',
    color: "#424242",
    margin: "20px 0",
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.3',
    color: "#424242",
  },
});

export default function Parasection() {
  const classes = styles();
  return (
    <div className={classes.paraSection}>
      <Typography className={classes.heading} variant="h6">
        {"Protect your right to privacy - buy Monero."}
      </Typography>
      <Typography className={classes.paragraph} variant="p">
        {
          "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind. Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
        }
      </Typography>

      <Typography className={classes.heading} variant="h6">
        {
          "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency."
        }
      </Typography>
      <Typography className={classes.paragraph} variant="p">
        {
          "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
        }
      </Typography>
    </div>
  );
}
