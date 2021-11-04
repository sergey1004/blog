import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import UniversitySymbol from '../images/university/symbol.png';
import UniversityImage from '../images/university/image.jpg'
import LocationOn from '@material-ui/icons/LocationOn'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
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



const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Education
      </Typography>
      <Grid container>
        <Grid item xs={5}>
          <Box component="div">
            <Typography
              variant="h4"
              align="center"
              className={classes.subHeading}
            >
              Bauman Moscow State Technical University
            </Typography>
            <Typography variant="h5" align="center" className={classes.body1}>
              Bachelor's Degree in Computer Science
            </Typography>
            
            <Typography variant="h5" align="center" className={classes.body1}>
            2011.4-2016.3
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img alt="logo" className="university" src={UniversitySymbol} />
            </Grid>
            <Grid item xs={6}>
              <img alt="university" className="university" src={UniversityImage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="right"
            className={classes.subHeading}
          >
            Freelance Web Developer
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Self Employed
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            <LocationOn/> Remote
          </Typography>
        </Box>
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021.6
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Web Developer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Smart Cities Transport
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            <LocationOn/>Australia Remote
          </Typography>
        </Box>
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021.4
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="right"
            className={classes.subHeading}
          >
            Front End Web Developer
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            CBX CO
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            <LocationOn/> Canada Remote
          </Typography>
        </Box>
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019.10
        </Typography>
        

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Full Stack Developer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            UPWORK.com
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            <LocationOn/> Remote
          </Typography>
        </Box>
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018.11
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="right"
            className={classes.subHeading}
          >
            Front End Developer
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            Crowd Services Agency
          </Typography>
          <Typography variant="body1" align="right" className={classes.body1}>
            <LocationOn/> Australia Remote
          </Typography>
        </Box>

        
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018.3
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="left"
            className={classes.subHeading}
          >
            Front End Developer
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            Freelancer.com
          </Typography>
          <Typography variant="body1" align="left" className={classes.body1}>
            <LocationOn/> Remote
          </Typography>
        </Box>
        
        
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017.3
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
