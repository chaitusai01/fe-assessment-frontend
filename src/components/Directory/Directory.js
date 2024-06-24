import React, { useState, useEffect } from 'react';
import './Directory.css';

const Directory = () => {
    const [terms, setTerms] = useState([]);
    const [allLetters, setAllLetters] = useState([]);
    const [filterSelectedLetter, setFilterSelectedLetter] = useState(null);

    useEffect(() => {
        fetch('https://chaitusai01.github.io/fe-assessment-frontend/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTerms(data.termList);
                const letters = data.termList.map(term => term.title[0].toUpperCase());
                setAllLetters([...new Set(letters)]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAlphabetClick = (lt) => {
        if(allLetters.includes(lt)){
            setFilterSelectedLetter(plt => plt === lt ? null : lt);
        }
    };

    const renderTerms = () => {
        if (terms.length === 0) {
            return <p>Loading...</p>;
        }

        const groupTerms = terms.reduce((acc, term) => {
            const firstLetter = term.title[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(term);
            return acc;
        }, {});

        const lettersToShow = filterSelectedLetter ? [filterSelectedLetter] : Object.keys(groupTerms).sort();

        return lettersToShow.map(letter => (
            <div key={letter} className="letter-group" id={letter}>
                <h2>{letter}</h2>
                <ul>
                    {groupTerms[letter].map(term => (
                        <li key={term.title}><a href={term.link}>{term.title}</a></li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="directory-container">
            <div className="header-alphabet">
                <div className="header-alphabet-content" >
                    <h1>Treatments, Services and Specialties</h1>
                    <div className="alphabet-links">
                        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
                            <a key={letter} href={`#${letter}`}
                                onClick={() => handleAlphabetClick(letter)}
                                className={allLetters.includes(letter) ? 'available' : 'unavailable'}>
                                {letter}
                            </a>
                        ))}
                        <a href="#X" className={allLetters.includes('#') ? 'available' : 'unavailable'}>#</a>
                    </div>
                </div>
            </div>

            <div className="directory-content">
                {renderTerms()}
            </div>
        </div>
    );
};

export default Directory;
