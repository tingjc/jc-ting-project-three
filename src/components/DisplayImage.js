function DisplayImage( props ) { 
    console.log(props)
    return (
        <div className="coffeeImage">
            { props.drinks.length === 0 ? (
                <img
                src="./assets/ready.png"
                alt="a drawing of a sign that says 'getting ready' " />
            ): (
                <img
                src= {props.drinks[0].img} />

                
            )
            }
        </div>

    )
}

export default DisplayImage;