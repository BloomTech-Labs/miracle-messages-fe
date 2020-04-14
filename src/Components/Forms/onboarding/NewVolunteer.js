import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stepperImage1 from '../../../Assets/Imgs/stepper-image-1.jpeg';
import mmLogo from '../../../Assets/Imgs/MM_Logo.png';
import mmLogoBlack from '../../../Assets/Imgs/MM_Logo_black.png';
import './newVolunteer.css';


//material Ui
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh'
},
imageSide: {
    width: '40%',
    backgroundImage: `url(${stepperImage1})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imgContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    paddingTop: '20%',
    alignContent: 'baseline',
  },
  imgStyling: {
    width: '44%',
  },
  h3Styling: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: '0 25%',
    marginTop: '15px',
  },
  stepper: {
    width: '100%',
    margin: '0 20%',
    background: 'transparent',
    color: 'green',
  },
  stepperSide: {
    width: '60%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '11%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
   
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '& button': {
      width:  '100px',
    },
  },
  button: {
    margin: '0 5px',
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: '#008000a8'
    },
  },
  leftButton: {
    margin: '0 5px',
    backgroundColor: 'white',
    border: 'solid green 1px',
    color: 'green',
    '&:hover': {
      backgroundColor: '#008000a8',
      color: 'white',
      border: 'solid #008000a8 1px',
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
   
  link: {
      color: 'black',
      textDecoration: 'none',
      '&:hover': {
        color: 'green',
      }
  }
  },
    stepInner: {
      '& svg': {
        color: '#008000a8',
      }
    },
  mobileLogo: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  formContainer: {
    textAlign: 'center',
  } 
  
}));

function getSteps() {
  return ['', '', ''];
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return (
      <>
          <h3>You have selected to connect with this City chapter.</h3> 
          <p>If that is the place you would like to vounteer click next.</p>
      </>
      );
    case 1:
      return ( 
      <>
      <div > 
      <h3 >You've taken the first step!</h3>
      <p>We just need a little more information to get started</p>
      <br/>
      <div className='textFieldContainer'>
        <TextField className='inputField' id="firstname" label="First Name" variant="outlined" />
        <br/>
        <TextField className='inputField' id="outlined-basic" type='lastname' label="Last Name" variant="outlined" />
        <br/>
        <TextField className='inputField' id="outlined-basic" type='city' label="City" variant="outlined" />
        <br/>
        <TextField className='inputField' id="outlined-basic" type='country' label="Country" variant="outlined" />
        <br/>
        <TextField className='inputField' id="outlined-basic" type='email' label="Email" variant="outlined" />
        </ div>
      </div>
       </>
       );
    case 2:
      return (
        <>
        <div >
        <h3>Thank you for your commitment to your community!</h3>
        <p>We will be contacting you shortly</p>
        </div>
         </>
      );
    default:
      return '' (
          <>
          <div >  
          <h3>Thank you for your commitment to your community!</h3>
          <p> We will be contacting you shortly.</p>
          </div>
          </>
      );
  }
}

const NewVolunteer = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
        <div className={classes.imageSide}>
            <div className={classes.imgContainer}>
                {/* <div className={classes.imgOverlay}> */}
                  <img className={classes.imgStyling} src={mmLogo} alt="Miracle Messages Logo"/>
                {/* </div> */}
                <h3 className={classes.h3Styling}>Help us reconnect people with their loved ones.</h3>
            </div>
        </div>
        <div className={classes.stepperSide} >
          <div className={classes.mobileLogo}>
            <img src={mmLogoBlack} />
          </div>

        <Stepper className={classes.stepper} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step 
              key={label} 
              {...stepProps}
              >
                <StepLabel 
                className= {classes.stepInner} 
                {...labelProps}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div  className={classes.buttonContainer}>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className={classes.formContainer} >
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.buttonContainer}>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  BACK
              </Button> */}
                {activeStep === steps.length - 1 ? <a href="google.com/" className={classes.link}>
                  FAQ
              </a> : <Button disabled={activeStep === 0} onClick={handleBack} className={classes.leftButton}>
                  BACK
              </Button>}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Back to the Map' : 'Next'}
              </Button>
            </div>
          </div>
        )}

        </div>
    </div>
  );
}

export default NewVolunteer;
