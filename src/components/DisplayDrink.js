function DisplayDrink( {drinks} ) {
    return(
    <div>
        {drinks.length === 0 ? (
            <div className="coffeeText">
                <h2>Brewing ...</h2>
                <p>What goes into a cappuccino? How is it different from a latte? What do you get when you order an Americano? Choose a drink and find out!</p>
            </div>
        ): (
            <div className="coffeeText">
                <h2>{drinks[0].title}</h2>
                <h3> Ingredients: {
                    drinks[0].ingredients.join(', ')}</h3>
                
                <p>{drinks[0].description}</p>
            </div>          
        )}
    </div>
    );
}

export default DisplayDrink;