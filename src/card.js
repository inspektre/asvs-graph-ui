import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  link: {
    '& + &': {
      marginLeft: 2
    }
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Stage: {name}
        </Typography>
      </CardContent>
      <CardActions>
      <Link className={classes.link} color="textSecondary" component={RouterLink} to={`/${name}`} underline="none" variant="body2">
          <Button color="primary" variant="contained" size="small">
            View verifications
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
