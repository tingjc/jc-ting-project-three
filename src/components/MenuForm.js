import { useState } from 'react';

function MenuForm( {drinks, getDrink} ) {
    //create state to store user's choice from menu
    const [userChoice, setUserChoice] = useState("placeholder");

    //change userChoice and getDrink state whenever selection is changed
    const handleUserChoice = (event) => {
        setUserChoice(event.target.value);
        getDrink(event.target.value);
    }

    // take info from the drinks prop (coffeeMenu)
    return (
        <div className="drinkMenu">
        <select 
        value= {userChoice} 
        onChange={handleUserChoice}
        id="menu" 
        name="menu">
            <option value="placeholder" disabled> Pick a Drink! </option>
            {/* populate the dropdown with the coffeeMenu items */}
            { drinks.map((drink) => {
                return (
                    <option 
                        value = {drink.title} 
                        key = {drink.id}>
                        
                        {drink.title}

                    </option>
                )
            })
            } {/*end map*/}
            
        </select>
        </div>

    )
}

export default MenuForm;