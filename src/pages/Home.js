import PropTypes from "prop-types";
import Pet from "./Pet";
import Grid from "@material-ui/core/Grid";

// const Home = ({ text }) => {
//   return <div>{text}</div>;
// };

const Home = ({ pets, onRemove, onFavorite }) => {
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      {pets.map((pet) => (
        <Pet
          pet={pet}
          key={pet.id}
          onRemove={onRemove}
          onFavorite={onFavorite}
        />
      ))}
    </Grid>
  );
};

// Home.defaultProps = {
//   text: "Home page",
// };

Home.propTypes = {
  text: PropTypes.string,
};

export default Home;
