import React from 'react';
import product from './../../images/8570-500x500.jpg'
import './card.css'
import SimpleRating from './../star/star'
import { MdShoppingCart} from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Logo from './../../images/logoq.png'
import history from './../../config/history/history'
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    width:300,
    margin:20,
    height:460

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} onClick = {()=>history.push('product', props)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={Logo} alt= 'logo' height='50px'/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={props.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
      {props.detail}
        </Typography>
      </CardContent>
      <SimpleRating />
      <span>Rs : {props.price}</span>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <span className = 'cart'> Add to Favorite</span>
          <IoIosHeart className = 'color'/>
          </IconButton>
        <IconButton aria-label="share">
         <span className = 'cart'> Add to Cart</span>
        < MdShoppingCart className = 'color'/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      
      </Collapse>
    </Card>
  );
}