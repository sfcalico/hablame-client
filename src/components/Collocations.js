import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const Collocations = () => {
    
    const { userState } = useContext(VisitorContext);
    const [ user, setUser ] = userState;
    const [ collocationList, setCollocationList ] = useState([]);
    const { id } = useParams();
    console.log(id);

    const fetchCollocations = async (e) => {
        // e.preventDefault();
        try {
            let response = await axios.get(`http://localhost:3001/collocations/${user.id}`)
            setCollocationList(response.data.collocations)
            console.log(response);
            console.log(collocationList);
        } catch (error) {
            console.log(error)
        }
    } 

    // run on page load
    useEffect(() => {
        fetchCollocations()
    }, []);

    return (
        <div className="colloc-container">
            <div className="savedList">
                <h3 className="collocTitle">Saved Collocations</h3>
                <section>
                    { collocationList.map((collocation, i) => {
                        return (
                            <p key={i} className="listItem">
                                <Link to={`/collocations/${collocation.id}`} >
                                    {collocation.phrase}
                                </Link>
                            </p>
                        )
                    }) }
                </section>
                
            </div>
            <div className="examples">
                <h3 className="exTitle">Example sentences</h3>
                <section>
                    { collocationList.map((collocation, i) => {
                        return (
                            <div key={i}>
                                { collocation.id === parseInt(id) ?
                                    <p className="example-sentence">
                                        {collocation.example}
                                    </p> 
                                    :
                                    null }
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default Collocations;