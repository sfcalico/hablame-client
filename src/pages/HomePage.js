import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";
import NavBar from '../components/NavBar';            
import axios from "axios";



const HomePage = () => {

    const { entryState, palabraState, searchState } = useContext(VisitorContext);
    
    const [ entry, setEntry ] = entryState;
    const [ palabra, setPalabra ] = palabraState; // palabra is 'word' in Spanish; this variable sets what 'busca' is.
    
    const [ search, setSearch ] = searchState;
    // const [ busca, setBusca ] = buscaState; // busca is 'search' in Spanish; this variable is the word thrown to the Linguatool
    
    const [ wordDef, setWordDef ] = useState('');
    const [ collocation, setCollocation ] = useState([]);

    // Fetch definitions, etc from dictionaryAPI
    const fetchDefinition = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${search}?key=ac630850-7803-474e-aa36-db05619dda38`)
            console.log(response)
            setWordDef([response.data[0].fl, response.data[0].shortdef])
            console.log(wordDef)
        } catch (error) {
            console.log(error)
        }
    }
    
    // Fetch collocations from Linguatools
    
    const fetchCollocation = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.get(`https://linguatools-top-spanish-collocations.p.rapidapi.com/?query=${palabra}`, {
            headers: {
                'x-rapidapi-host': 'linguatools-top-spanish-collocations.p.rapidapi.com',
                'x-rapidapi-key': '503b7bbd65mshd446b8d90cd6cb6p1e8ee0jsne6957715a86f'
                } 
            })
            setCollocation([response.data[0].collocation, response.data[0].example1, response.data[0].example2])
            console.log(response);
            console.log(collocation);
        } catch (error) {
            console.log(error, error.message);
        }    
    //     const options = {
    //         method: 'GET',
    //         url: 'https://linguatools-top-spanish-collocations.p.rapidapi.com/',
    //         params: {query: `${palabra}`},
    //         headers: {
    //           'x-rapidapi-host': 'linguatools-top-spanish-collocations.p.rapidapi.com',
    //           'x-rapidapi-key': '503b7bbd65mshd446b8d90cd6cb6p1e8ee0jsne6957715a86f'
    //         }
    //     };

    //     // try {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setCollocation([response.data[0].collocation, response.data[0].example1, response.data[0].example2]);
    //         console.log(collocation);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    }


    // Save collocation to userProfile
    const saveCollocation = (e) => {
        e.preventDefault();
        const exampleSentences = [collocation[1], collocation[2]];
        console.log(exampleSentences);
        axios.post(`https://git.heroku.com/habla-me.git/users/collocation`,  {
            word: palabra,
            phrase: collocation[0],
            example: exampleSentences,
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
                    placeholder="input an english word here"
                    onChange={(e) => {setEntry(e.target.value)}}
                    value={entry}
                />
                <button onClick={(e) => {setSearch(entry)}}>Search</button>
                </form>
                <div className="search-results">
                    <p>Part of Speech: {wordDef[0]}</p>
                    <p>Translation(s): {wordDef[1]}</p>
                </div>  
            </section>
            <section className="homeSections">
                <form
                    // onSubmit={(e) => {fetchCollocation(e)}}
                    className="linguaTool"> 
                    <input 
                        type="text"
                        placeholder="input a Spanish word here"
                        onChange={(e) => {setPalabra(e.target.value)}}
                        value={palabra}
                    />
                <button onClick={(e) => fetchCollocation(e)}>Busca</button> 
                </form>
                <div className="search-results">
                    <p>Phrase: {collocation[0]}</p>
                    <p>Example: {collocation[1]}</p>
                    <p>Example: {collocation[2]}</p>
                    <form onSubmit={(e) => {saveCollocation(e)}}>
                        <button>Save</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default HomePage;