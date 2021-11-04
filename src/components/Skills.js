import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "80%",
    margin: "0 Auto",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
        <div className="starsContainer">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <Typography variant="h4" align="center" className={classes.heading}>
            Skills
        </Typography>
        
        <Typography variant="h4" className={classes.heading}>
            {/* <div */}
            <Box component="div">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <span className="skillName">React / Next / React Native </span>
                        <div class="progress">
                            <div class="progress-js"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">Node / PHP / Laravel</span>
                        <div class="progress">
                            <div class="progress-backend"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">Wordpress / Shopify</span>
                        <div class="progress">
                            <div class="progress-cms"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">CSS3 / TailwindCSS / SASS / HTML5</span>
                        <div class="progress">
                            <div class="progress-style"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">MongoDB / MYSQL / Firebase / AWS</span>
                        <div class="progress">
                            <div class="progress-db"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">Github / Slack / Jira / Kanban</span>
                        <div class="progress">
                            <div class="progress-chat"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">Payment Gateway</span>
                        <div class="progress">
                            <div class="progress-payment"></div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <span className="skillName">BlockChain / Solidity / Bitcoin / Ethereum</span>
                        <div class="progress">
                            <div class="progress-chain"></div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        
        </Typography>
        
    </Box>
  );
};

export default Skills;
