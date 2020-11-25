import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '15vw'
}

const useStyles = makeStyles({
  root: {
		minWidth: 100,
		marginLeft: 90,
		marginTop:90
	},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TemplateEmbed() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
		<div>
    <Card style={cardStyle} className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Financial Bot
        </Typography>
        <Typography variant="h5" component="h2">
          A template for a quickstart financial bot
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Finance
        </Typography>
      </CardContent>
			<CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
			</Card>
			<Card style={cardStyle} className={classes.root} variant="outlined">
			<CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Customer Service Bot
        </Typography>
        <Typography variant="h5" component="h2">
          A template for a quickstart customer service bot
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Customer Service
        </Typography>
      </CardContent>
			<CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
			</Card>
			<Card style={cardStyle} className={classes.root} variant="outlined">
			<CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Custom Bot
        </Typography>
        <Typography variant="h5" component="h2">
          A template for a custom bot
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Custom
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
			</Card>

		</div>
  );
}
