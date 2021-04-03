import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddPet = ({ onAdd }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [url, setUrl] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, age, url, isFavorite });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="age"
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        id="url"
        label="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
};

export default AddPet;
