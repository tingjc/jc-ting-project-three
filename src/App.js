import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayDrink from './components/DisplayDrink';
import MenuForm from './components/MenuForm';
import DisplayImage from './components/DisplayImage';


function App() {
  //create state to store API call data
  const [coffeeCall, setCoffeeCall] = useState([]);
  
  //Axios call to get data from Coffee API
  useEffect( () => {
    axios({
      url: 'https://api.sampleapis.com/coffee/hot',
    }).then(response => {
      setCoffeeCall(response.data);
    })
  }, []);

  //create local copy of coffeeCall, taking out unfamiliar drinks
  const coffeeData = [...coffeeCall];
  const coffeeMenu = coffeeData.filter ( (drink) => {
    return drink.id <= 6;
  });

  //add images to coffeeMenu
  coffeeMenu.forEach((drink) => {
    drink.img = `./assets/${drink.id}.png`
  })

  console.log(coffeeMenu);

  //create state to store data that will be selected from MenuForm, and then will be displayed in DisplayDrink
  const [drinkSelection, setDrinkSelection] = useState([]);

  //function to change drinkSelection contents, to be called in MenuForm
  const getDrink = (selection) => {
    //filter coffeeMenu for the drink selection
    const menuCopy = [...coffeeMenu];
    
    const filterDrink = menuCopy.filter( ( drink ) => {
      return drink.title === selection
    });

    setDrinkSelection(filterDrink);
  }
  

  return (
    <>
    <header>
      <div className='wrapper'>
        <h1>What's In My (Caffeinated) Drink?</h1>
      </div>
    </header>
    <div className="App wrapper">

      <div className='image'>
        <DisplayImage drinks = {drinkSelection} />
      </div>

      <div className='text'>
        <MenuForm drinks = {coffeeMenu} getDrink = {getDrink}/>
        <DisplayDrink drinks = {drinkSelection} />
      </div>
      
    </div>
    </>
  );
}

export default App;
