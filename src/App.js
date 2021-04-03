import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./Nav";
import AddPet from "./pages/AddPet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [pets, setPets] = useState([
    // {
    //   id: 1,
    //   name: "Ruby",
    //   age: 2,
    //   img: "https://images.dog.ceo/breeds/terrier-american/n02093428_4552.jpg",
    //   isFavorite: true,
    // },
    // {
    //   id: 2,
    //   name: "Coco",
    //   age: 4,
    //   img: "https://images.dog.ceo/breeds/pointer-german/n02100236_3025.jpg",
    //   isFavorite: false,
    // },
  ]);

  useEffect(() => {
    const getPets = async () => {
      const pets = await fetchPets();
      setPets(pets);
    };

    getPets();
  }, []);

  const fetchPets = async () => {
    const res = await fetch("https://605f0c4ae96e5c001740818e.mockapi.io/pets");
    const data = await res.json();

    return data;
  };

  const addPet = async (pet) => {
    // console.log(pet);

    // const id = pets.length + 1;
    // const newPet = { id, ...pet };
    // setPets([...pets, newPet]);

    const res = await fetch(
      "https://605f0c4ae96e5c001740818e.mockapi.io/pets",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(pet),
      }
    );

    const data = await res.json();

    setPets([...pets, data]);
  };

  const removePet = async (id) => {
    // console.log("remove pet", id);

    const res = await fetch(
      `https://605f0c4ae96e5c001740818e.mockapi.io/pets/${id}`,
      {
        method: "DELETE",
      }
    );

    res.status === 200
      ? setPets(pets.filter((pet) => pet.id !== id))
      : alert("Delete failed!");
  };

  const fetchPet = async (id) => {
    const res = await fetch(
      `https://605f0c4ae96e5c001740818e.mockapi.io/pets/${id}`
    );
    const data = await res.json();

    return data;
  };

  const isFavorite = async (id) => {
    // console.log("isFavorite", id);
    // setPets(
    //   pets.map((pet) =>
    //     pet.id === id ? { ...pet, isFavorite: !pet.isFavorite } : pet
    //   )
    // );

    const petToFavorite = await fetchPet(id);
    const updatedFavorite = {
      ...isFavorite,
      isFavorite: !petToFavorite.isFavorite,
    };

    const res = await fetch(
      `https://605f0c4ae96e5c001740818e.mockapi.io/pets/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedFavorite),
      }
    );

    const data = await res.json();

    setPets(
      pets.map((pet) =>
        pet.id === id ? { ...pet, isFavorite: data.isFavorite } : pet
      )
    );
  };

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={() => [
              <AddPet onAdd={addPet} />,
              <Home pets={pets} onRemove={removePet} onFavorite={isFavorite} />,
            ]}
          />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
