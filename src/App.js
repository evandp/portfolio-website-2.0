import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from 'react-avatar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import groq from './imgs/groq.png';
import lyft from './imgs/lyft.jpg';
import uber from './imgs/uberatg.jpg';
import cuair from './imgs/cuair.jpg';
import headshot from './imgs/headshot.jpg';
import resume from './imgs/resume.pdf';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    border: '0px solid #000',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  },
}));

const cards = [
{
  index: 1,
  image: groq,
  role: "Backend Architect",
  description: "Groq is an AI accelerator chip company with a unique dataflow architecture. I am on the Platform Software team that is working to scale Groq's capabilities to multi rack systems.",
  learnMoreLink: "https://groq.com",
},
{
  index: 2,
  image: lyft,
  role: "SWE",
  description: "As a member of the Capacity & Efficiency team I am building tools for managing AWS EC2 Reserved Instances to enable 8-figure annual savings.",
},
{
  index: 3,
  image: uber,
  role: "SWE Intern",
  description: "Created library for low level protocols to communicate between main compute stack and vehicle controller.",
},
{
  index: 4,
  image: cuair,
  role: "Platform Subteam Lead",
  description: "Participated in competition team that designs and builds autonomous planes. Led team responsible for the plane's imaging pipeline.",
  learnMoreLink: "https://cuair.org",
}
];

const cardStyle = {
  display: 'block',
  maxWidth: 350,
  transitionDuration: '0.3s',
}

const cardMediaStyle = {
}

function LearnMore(props) {
  var link = props.link
  var handleClick = () => {
    window.open(link)
  }
  if (link) {
    return (
      <CardActions>
        <Button size="medium" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    )
  }
  return (
    <CardActions/>
  )
}

function ContactModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
                      Contact Me
      </Button>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableAutoFocus={true}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={open}>
        <div className={classes.paper}>
        <Container maxWidth="xs">
          {/* <Typography component="h2" color="textPrimary" gutterBottom>
            Contact Information:
          </Typography> */}
            <Typography component="h4" color="textPrimary" align="center" gutterBottom>
              The best way to reach me is by email. Please text or call me for time sensitive matters.
            </Typography>

            <Typography align="center">evandp1999@gmail.com</Typography>

            <Typography align="center">(631)-624-5575</Typography>
          </Container>
          
          {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom></Typography> */}
        </div>
      </Fade>
    </Modal>
  </div>
  );
}

function openLink(link: string) {
  window.open(link)
}

function openResume() {
  window.open(resume)
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <div className={classes.heroContent}>
        <Grid container>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" bold={true} gutterBottom>
              Evan Patrick
            </Typography>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
        <Grid
          container
          spacing={8}
          alignItems="center"
          justify="center"
          stype={{ minHeight: '100vh' }}
        >
          <Grid item xs="auto">
            <Avatar src={headshot} round={true} size={250}/>

          </Grid> 
            <Grid item xs={6} md={4}> 
              <Typography variant="h5" color="textSecondary" paragraph>
                 Hello, I am a Software Engineer at Groq on the Platform SW team. I love to learn, teach, and solve hard problems with others.
               </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                 My background is in cloud computing and distributed systems and I aspire to explore everything that computer science and computer engineering has to offer.
               </Typography>
            </Grid>
          </Grid>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={openResume}>
                  Resume
                </Button>
              </Grid>
              <Grid item>
                <ContactModal/>
              </Grid>
            </Grid>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} align="center">
            {cards.map((card) => (
              <Grid item key={card.index} xs={12} md={3}>
                <Card className={classes.card.index} style={cardStyle}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    style={cardMediaStyle}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.role}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <LearnMore link={card.learnMoreLink}/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>  
  );
}
