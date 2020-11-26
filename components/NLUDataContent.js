import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 150,
    marginLeft: 155
  },
  structuredformControl: {
    marginTop: 30,
    marginLeft: 155,
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios() {
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
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Your data is: </FormLabel>
        <RadioGroup row aria-label="data" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="structured" control={<Radio />} label="Structured Data" />
          <FormControlLabel value="unstructured" control={<Radio />} label="Unstructured Data" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    </form>
    <form>
	<FormControl component="fieldset" error={error} className={classes.structuredformControl}>
        <FormLabel component="legend">Please provide your data in any of the formats as below: </FormLabel>
        <RadioGroup aria-label="data" name="data" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="excel" control={<Radio />} label="Excel" />
          <FormControlLabel value="csv" control={<Radio />} label="csv(comma seperated file)" />
					<FormControlLabel value="csv" control={<Radio />} label="txt(text file with entries)" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </form>
    </div>
  );
}
