import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import { Icon } from '@iconify/react';
import download from '@iconify/icons-mdi/download';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const contactmenuItems = [
  { listIcon: <EmailIcon />, listText: "Email", listPath: "mailto:spoletaev.2001@gmail.com" },
  { listIcon: <GitHubIcon />, listText: "Github", listPath: "https://github.com/topstar0527" },
  { listIcon: <WhatsAppIcon />, listText: "WhatsApp +7 706 663 9926", listPath: "#" },
  { listIcon: <LinkedInIcon />, listText: "LinkedIn", listPath: "https://www.linkedin.com/in/sergey-poletaev-a8b31a211/" },
];


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
    marginLeft:"15px",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  mr15: {
    marginRight:"0.5rem",
  },
  resume: {
    backgroundColor: "#a96464",
    marginTop: "1rem",
    color: "white",
  },
  nounerline: {
    textDecoration : "none",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Sergey" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Sergey Poletaev"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "React Native Developer",
            "Frontend Focused Full Stack Engineer",
            "BlockChain Experienced",
          ]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
      </Typography>

      <br />
      {contactmenuItems.map((item, i) => (
        <a href={item.listPath} key={i} className={classes.noUnderbar}>
          <span className={classes.title}>
            {item.listIcon}
          </span>
        </a>
      ))}
      <br />
      <a target="_blank" className={classes.nounerline} rel="noopener noreferrer" href="https://drive.google.com/file/d/1iWYFxPXBqpmVpocAf904blSBEKl-oZyf/view?usp=sharing"><Button className={classes.resume} ><Icon icon={download} className={classes.mr15}/>Resume</Button></a>
    </Box>
  );
};

export default Header;
