function DisplayDrink( {drinks} ) {
    return(
    <div>
        {drinks.length === 0 ? (
            <h2>Brewing ...</h2>
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