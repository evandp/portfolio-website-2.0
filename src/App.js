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
    display: 'flex',    border: '0px solid #000',

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

const cards = [{
  index: 1,
  image: lyft,
  role: "SWE Reliability Intern",
  description: "Created a service to monitor and compile the reliability of all of Lyft's services which can be reported to engineering directors.",
  learnMore: false,
}, {
  index: 2,
  image: uber,
  role: "SWE Controls Intern",
  description: "Created library for low level protocols to communicate between main compute stack and vehicle controller.",
  learnMore: false,
}, {
  index: 3,
  image: cuair,
  role: "Platform Subteam Lead",
  description: "Led team of 10 members to write software for an autonomous plane. Was responsible for entire imaging pipeline.",
  learnMore: true
}];

const cardStyle = {
  display: 'block',
  width: '15vw',
  transitionDuration: '0.3s',
  // height: '45vw'
}

const cardMediaStyle = {
  height: '13vw'
}

function LearnMore(props) {
  var hasLink = props.hasLink
  if (hasLink) {
    return (
      <CardActions>
        <Button size="medium" color="primary" onClick={openCUAir}>
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
            <Typography component="h4" color="textPrimary" gutterBottom>
              The best way to reach me is by email. 
              Feel free to call/text me with regard to time sensitive matters.
            </Typography>

            <Typography align="center">edp46@cornell.edu</Typography>

            <Typography align="center">(631)-624-5575</Typography>
          </Container>
          
          {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom></Typography> */}
        </div>
      </Fade>
    </Modal>
  </div>
  );
}

function openCUAir() {
  window.open('https://www.cuair.org')
}

function openResume() {
  window.open(resume)
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Evan Patrick
          </Typography>
        </Toolbar>
      </AppBar> */}
        {/* Hero unit */}
        <div className={classes.heroContent}>

          <Container maxWidth="sm">
            {/* <Grid container spacing={4}> */}
              <Typography component="h1" variant="h2" align="center" color="textPrimary" bold={true} gutterBottom>
                Evan Patrick
              </Typography>

              {/* <Grid item xs={6}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Evan Patrick
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Avatar src={headshot} round={true} size={250}/>
              </Grid> 
            </Grid>*/}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello, I am a senior at Cornell majoring in Computer Science. I'm interested in distributed systems theory, scalable storage systems, and robotics
            </Typography>
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
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card.index} xs={12} sm={6} md={4}>
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
                  <LearnMore hasLink={card.learnMore}/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>  
  );
}