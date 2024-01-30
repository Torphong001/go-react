import React, { useState, useEffect } from 'react';
import ItemStu from '../student'; // Ensure this path is correct

const ItemFormFindStu = () => {
    const [inputId, setInputId] = useState('');
    const [itemId, setItemId] = useState(null);

    useEffect(() => {
        console.log("Updated itemId=" + itemId);
    }, [itemId]); // This effect will run whenever itemId changes

    const handleSubmit = (event) => {
        event.preventDefault();
        // print inputId to console
        console.log("inputId=" + inputId);
        setItemId(Number(inputId)); // Convert inputId to a number
        console.log("itemId=" + itemId);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Student ID:
                    <input
                        type="number"
                        value={inputId}
                        onChange={e => setInputId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {/* Render the Item component if itemId is not null */}
            {itemId !== null && <ItemStu id={itemId} />}

        </div>
    );
};

export default ItemFormFindStu;