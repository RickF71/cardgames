import React from 'react';

const arrayOfObjects = [
    { coffee: "Americano", size: "Medium", price: 2.19 },
    { coffee: "Espresso", size: "Single", price: 1.89 },
    { coffee: "Mocha", size: "Large", price: 2.89 },
 ];

  
function ArrayOfObjects(props) {
    return (
        <div>
            <h1>Simple Array of Objects</h1>
            {arrayOfObjects.map(({ coffee, size, price }) => (
                <p key={coffee}>Coffee: {coffee}  | Size: {size} | Price: ${price}</p>
            ))}
            <>test</>
        </div>
    );
}

export default ArrayOfObjects;