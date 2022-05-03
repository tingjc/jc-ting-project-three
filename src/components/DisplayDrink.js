function DisplayDrink( {drinks} ) {
    return(
    <section>
        {drinks.length === 0 ? (
            <h2>Brewing ...</h2>
        ): (
            <div className="coffeeText">
                <h2>{drinks[0].title}</h2>
                <p>{drinks[0].description}</p>
            </div>
            
        )}
    </section>
    );
}

export default DisplayDrink;