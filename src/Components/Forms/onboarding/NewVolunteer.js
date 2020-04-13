import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stepperImage1 from '../../../Assets/Imgs/stepper-image-1.jpeg';
import mmLogo from '../../../Assets/Imgs/MM_Logo.png';



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
    padding: '0 10%',
  },
  stepper: {
    width: '100%',
  },
  stepperSide: {
    width: '60%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  link: {
      color: 'black',
      textDecoration: 'none',
      '&:hover': {
        color: 'green',
      }
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
          <h1>You have selected to connect with this City chapter.</h1> 
          <h3>If that is the place you would like to vounteer click next.</h3>
      </>
      );
    case 1:
      return ( 
      <>
      <div > 
      <h1 >You've taken the first step!</h1>
      <h3 className='.potterStyle'>We just need a little more information to get started</h3>
      <br/>
      <TextField style={{ color: 'red'}} id="name" label="Name" variant="outlined" />
      <br/>
      <TextField id="outlined-basic" type='email' label="Email" variant="outlined" />
      </ div>
       </>
       );
    case 2:
      return (
        <>
        <div >
        <h1>Thank you for your commitment to your community!</h1>
        <h3>We will be contacting you shortly</h3>
        </div>
         </>
      );
    default:
      return '' (
          <>
          <div >  
          <h1>Thank you for your commitment to your community!</h1>
          <h3> We will be contacting you shortly.</h3>
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
                <img className={classes.imgStyling} src={mmLogo} alt="Miracle Messages Logo"/>
                <h3 className={classes.h3Styling}>Help us reconnect people with their loved ones.</h3>
            </div>
        </div>
        <div className={classes.stepperSide} >
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
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  BACK
              </Button> */}
                {activeStep === steps.length - 1 ? <a href="google.com/" className={classes.link}>
                  FAQ
              </a> : <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  BACK
              </Button>}
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

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
