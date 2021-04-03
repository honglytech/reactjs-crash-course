import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 250,
  },
});

const Pet = ({ pet, onRemove, onFavorite }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} key={pet.id}>
      <CardActionArea>
        <CardMedia className={classes.media} image={pet.url} title="Pet" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pet.age}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onRemove(pet.id)}>
          Delete
        </Button>
        <IconButton
          aria-label="add to favorites"
          color={`${pet.isFavorite ? "secondary" : "default"}`}
          onClick={() => onFavorite(pet.id)}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Pet;
