import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
	close: {
    padding: theme.spacing(0.5),
  },
	formControl: {
    marginTop: 30,
		marginLeft: 80,
		marginRight: 80
  },
  structuredformControl: {
    marginTop: 30,
    marginLeft: 155,
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  root: {
		width: '80%',
		marginTop: 150,
		marginLeft: 155,
		marginRight: 500
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Choose the type of data you have', 'Upload your data', 'Create a Model'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return UploadDataOptions();
    case 1:
			return StructuredDataFlow();
    case 2:
      return `Now that we have all the data, lets make efficient use of it and ` , ChooseModel();
    default:
      return 'Unknown step';
  }
}

function UploadDataOptions() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };



  return (
      <div>
    <form>
			<Paper elevation={7} square>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Your data is: </FormLabel>
        <RadioGroup row aria-label="data" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="structured" control={<Radio />} label="Structured Data" />
          <FormControlLabel value="unstructured" control={<Radio />} label="Unstructured Data" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
			</Paper>
    </form>
    </div>
  );
}

function UnstructuredDataFlow() {
	const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
	return(
		<div>
			<form>
				<Paper elevation={7} square>
	<FormControl component="fieldset" error={error} className={classes.structuredformControl}>
        <FormLabel component="legend">Please provide your data in any of the formats as below: </FormLabel>
        <RadioGroup aria-label="data" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="excel" control={<Radio />} label="Excel" />
          <FormControlLabel value="csv" control={<Radio />} label="csv(comma seperated file)" />
					<FormControlLabel value="txt" control={<Radio />} label="txt(text file with entries)" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
			</Paper>
    </form>
		</div>

	);
}

function StructuredDataFlow() {
	const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
	return(
		<div>
			<form>
				<Paper elevation={7} square>
				<FormControl component="fieldset" error={error} className={classes.structuredformControl}>
        <FormLabel component="legend">What is the amount of data you have?</FormLabel>
        <RadioGroup aria-label="amountData" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="highData" control={<Radio />} label="High" />
          <FormControlLabel value="lowData" control={<Radio />} label="Low" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
			</Paper>
		</form>
		<form>
			<Paper elevation={7} square>
			<FormControl component="fieldset" error={error} className={classes.structuredformControl}>
        <FormLabel component="legend">What level of accuracy do you want to achieve? </FormLabel>
        <RadioGroup aria-label="accuracyData" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="highAccuracy" control={<Radio />} label="High" />
          <FormControlLabel value="lowAccuracy" control={<Radio />} label="Low" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
			</Paper>
    </form>
		<form>
			<Paper elevation={7} square>
			<FormControl component="fieldset" error={error} className={classes.structuredformControl}>
        <FormLabel component="legend">Do you want to choose from the models that we have? </FormLabel>
        <RadioGroup aria-label="modelData" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
			</Paper>
    </form>
		</div>
	);
}

function ChooseModel() {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();
  return (
    <div>
      <Button onClick={handleClick('Message A')}>Gensim Arabic Model</Button>
      <Button onClick={handleClick('Message B')}>ConveRT English Model</Button>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default function NLUDataContent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Let us create a bot!' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
