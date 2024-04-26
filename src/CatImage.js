import React, { useState } from 'react';

function CatImage() {
    const [imageUrl, setImageUrl] = useState('');

    const fetchCatImage = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        setImageUrl(data[0].url);
    };

    return (
        <div>
            {imageUrl && <img src={imageUrl} alt="Cute cat" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
            <button onClick={fetchCatImage}>Show me another cat</button>
        </div>
    );
}

export default CatImage;
