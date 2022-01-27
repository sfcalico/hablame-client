import axios from "axios";
import env from 'react-dotenv';
import NavBar from '../components/NavBar';            
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";



const HomePage = () => {

    // user info
    const { entryState, palabraState, searchState } = useContext(VisitorContext);
    const [ entry, setEntry ] = entryState;
    const [ palabra, setPalabra ] = palabraState; // palabra is 'word' in Spanish; this variable sets what 'busca' is.
    const [ search, setSearch ] = searchState;
    // dictionary info
    const [ wordDef, setWordDef ] = useState('');
    // collocation info
    const [ collocation, setCollocation ] = useState('');
    const [ example, setExample ] = useState('');
    const [ exampleTwo, setExampleTwo ] = useState('');

    // Fetch definitions from dictionaryAPI
    const fetchDefinition = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${search}?key=ac630850-7803-474e-aa36-db05619dda38`)
            console.log(response);
            setWordDef([response.data[0].fl, response.data[0].shortdef[0], response.data[0].shortdef[1]])
            console.log(wordDef);
        } catch (error) {
            console.log(error)
        }
    }
    
    // Fetch collocations and example sentences from Linguatool
    const fetchCollocation = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.get(`https://linguatools-top-spanish-collocations.p.rapidapi.com/?query=${palabra}`, {
            headers: {
                'x-rapidapi-host': 'linguatools-top-spanish-collocations.p.rapidapi.com',
                'x-rapidapi-key': '503b7bbd65mshd446b8d90cd6cb6p1e8ee0jsne6957715a86f'
                } 
            });
            console.log(response);
            setCollocation(response.data[0].collocation);
            setExample(response.data[0].example1);
            setExampleTwo(response.data[0].example2);
        } catch (error) {
            console.log(error, error.message);
        }    
    }


    // Save first example sentence to userProfile
    const saveCollocation1 = (e) => {
        e.preventDefault();
        const phrase = collocation;
        axios.post(`${env.REACT_APP_BACKEND_URL}/users/collocation`,  {
            word: palabra,
            phrase: phrase,
            example: example,
            userId: localStorage.getItem('userId')
        }).then((response) => {
            console.log(response);
        })
    }

    // Save second example sentence to userProfile
    const saveCollocation2 = (e) => {
        e.preventDefault();
        const phrase = collocation;
        axios.post(`${env.REACT_APP_BACKEND_URL}/users/collocation`,  {
            word: palabra,
            phrase: phrase,
            example: exampleTwo,
            userId: localStorage.getItem('userId')
        }).then((response) => {
            console.log(response);
        })
    }


    return (
        <div className='grid-container'>
            <section className="homeSections">
                <NavBar />
            </section>
            <section className="homeSections">
                <form
                    onSubmit={(e) => {fetchDefinition(e)}}
                    className="dictionaryApi">
                <input 
                    type="text" 
                    placeholder="English-Spanish dictionary"
                    onChange={(e) => {setEntry(e.target.value)}}
                    value={entry}
                />
                <button onClick={(e) => {setSearch(entry)}}>Search</button>
                </form>
                <div className="search-results">
                    <p className="def-sections">Part of Speech</p>
                    <p className="definitions">{wordDef[0]}</p>
                    <p className="def-sections">Translations </p>
                    <p className="definitions">{wordDef[1]}</p>
                    <p className="definitions">{wordDef[2]}</p>
                </div>  
            </section>
            <section className="homeSections">
                <div>
                    <form
                    className="linguaTool"> 
                    <input 
                        type="text"
                        placeholder="Spanish collocations"
                        onChange={(e) => {setPalabra(e.target.value)}}
                        value={palabra}
                    />
                    <button 
                        disabled={false}
                        onClick={(e) => fetchCollocation(e)}>Busca</button> 
                </form>  
                </div>
                <div className="search-results">
                    <p className="def-sections">Collocation</p>
                    <p className="definitions">{collocation}</p>
                    <p className="def-sections">Example One</p>
                    <p className="definitions">{example}</p>
                        <button 
                            className="save-button"
                            onClick={(e) => {saveCollocation1(e)}}>
                                save first example
                        </button>
                    <p className="def-sections">Example Two</p>
                    <p className="definitions">{exampleTwo}</p>
                        <button 
                            className="save-button"
                            onClick={(e) => {saveCollocation2(e)}}>
                                save second example
                        </button>
                </div>
            </section>
        </div>
    )
}

export default HomePage;