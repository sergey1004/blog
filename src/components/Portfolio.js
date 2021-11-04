import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import sneakqik from "../images/sneakqik.png";
import waverley from "../images/waverley.png";
import teamvate from "../images/teamvate.png";
import jockgod from "../images/jockgod.png";
import gplans from "../images/gplans.png";
import cryptiswap from "../images/cryptiswap.png";
import spur from "../images/spur.png";
import modernfuniture from "../images/modernfuniture.png";

import project6 from "../images/wp.PNG";
import project7 from "../images/1/1.png"
import project8 from "../images/2/1.png"
import project9 from "../images/3/1.png"
import project10 from "../images/4/1.png"
import project11 from "../images/5/1.png"
import project12 from "../images/6/1.png"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  noUnderbar: {
    textDecoration: "none",
    color: 'white',
  },
}));

const projects = [
  {
    name: "React - SPUR",
    description: `Next, SASS, Node, MySQL`,
    image: spur,
    url: "https://spurexperiences.com/",
    src: "",
  },
  {
    name: "Shopify - Modern Furnitures",
    description: `Wordpress, Shopify`,
    image: modernfuniture,
    url: "https://www.modernfurniture.com.au/",
    src: "",
  },
  {
    name: "Laravel, React Native - Teamvate",
    description: `React Native, SASS, Laravel, MySQL`,
    image: teamvate,
    url: "https://teamvate.com/",
    src: "",
  },
  {
    name: "Wordpress - JockGod",
    description: `Wordpress, SASS, DateTheme Customization`,
    image: jockgod,
    url: "https://jockgod.com/",
    src: "",
  },
  {
    name: "React - CryptiSwap",
    description: `React, SASS, BlockChain, C#`,
    image: cryptiswap,
    url: "https://cryptiswap.org/",
    src: "",
  },
  {
    name: "Vue - Learning League",
    description: 'HTML, CSS, Javascript, Vue, Vuetify, CometChat, Firebase',
    image: project7,
    src: "https://github.com/topstar0527/vue-firebase-learnleague",
    url: "https://devhacks2020-1c585.web.app",
  },
  {
    name: "Next - SneakQik",
    description: `Next, SASS, Node, MySQL`,
    image: sneakqik,
    url: "https://sneakqik.com/",
    src: "",
  },
  {
    name: "Angular - UniversityRating",
    description: 'HTML, CSS, Javascript, Sass, Angular, Google Maps',
    image: project8,
    src: "https://github.com/topstar0527/angular-universityrating",
    url: "https://universityraking.web.app",
  },
  {
    name: "React - Exams Schedule",
    description: 'HTML, CSS, Javascript, Firebase, React, AXIOS, Redux, Sass',
    image: project9,
    src: "https://github.com/topstar0527/react-firebase-exam-schedule",
    url: "https://reactproject-df131.web.app/",
  },
  {
    name: "Ionic React - Waverley",
    description: `Ionic React, SASS`,
    image: waverley,
    url: "https://waverley.smartcitiestransport.com/tutorial",
    src: "",
  },
  {
    name: "Vue - PhotoBooking",
    description: 'HTML, CSS, Javascript, Vue, Vuetify, Firebase',
    image: project10,
    src: "https://github.com/topstar0527/vue-firebase-photobooking",
    url: "https://devhacks2020-1c585.web.app",
  },
  {
    name: "Vue - Rap Jobs",
    description: 'HTML, CSS, Javascript, Vue, Vuetify, Firebase',
    image: project11,
    src: "https://github.com/topstar0527/vue-firebase-rapjob",
    url: "https://devhacks2018.web.app",
  },
  {
    name: "Vue - Waffic",
    description: 'HTML, CSS, Javascript, Vue, Vuetify, Firebase',
    image: project12,
    src: "https://github.com/topstar0527/vue-waffic",
    url: "https://waffic1997.web.app",
  },
  {
    name: "Nuxt, React Native - G-Plans",
    description: `Nuxt, SASS, React Native, Nodejs, MongoDB`,
    image: gplans,
    url: "https://g-plans.com/",
    src: "",
  },
  
  {
    name: "Wordpress - GlobalBlueOceans",
    description: `WordPress, Woocommerce, Firebase, CSS3`,
    image: project6,
    url: "https://www.globalblueoceans.com/",
    src: "",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="240"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Grid container>
                      <Grid item sm={3} md={3} xs={3}>
                        Stacks: 
                      </Grid>
                      <Grid item sm={9} md={9} xs={9}>
                        {project.description}
                      </Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a target="_blank" without rel="noopener noreferrer" href={project.url} className={classes.noUnderbar}>
                    LIVE
                  </a>
                </Button>
                <Button size="small" color="primary">
                  {project.src ? <a target="_blank" without rel="noopener noreferrer" href={project.src} className={classes.noUnderbar}>
                  Source
                  </a> : null}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
