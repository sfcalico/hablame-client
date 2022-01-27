import axios from "axios";
import env from "react-dotenv";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const Collocations = () => {
    
    const { userState } = useContext(VisitorContext);
    const [ user ] = userState;
    const [ collocationList, setCollocationList ] = useState([]);
    const { id } = useParams();

    // fetch collocations saved by current logged in user
    const fetchCollocations = async (e) => {
        try {
            let response = await axios.get(`${env.REACT_APP_BACKEND_URL}/collocations/${user.id}`)
            setCollocationList(response.data.collocations)
        } catch (error) {
            console.log(error)
        }
    } 

    // run fetch on page load
    useEffect(() => {
        fetchCollocations()
    }, []);

    // delete a specific collocation
    const deleteCollocation = async (collocationId) => {
        try {
            await axios.delete(`${env.REACT_APP_BACKEND_URL}/users/collocation/${collocationId}`, { 
                headers: { Authorization: user.id}
            })
            fetchCollocations();
        } catch (error) {
            console.log (error, error.message);
        }
    } 

    return (
        <div className="colloc-container">
            {/*returns list of saved collocations*/}
            <div className="savedList">
                <h3 className="collocTitle">Saved Collocations</h3>
                    { collocationList.map((collocation, i) => {
                        return (
                            <section className="list-item">
                                <p key={i}>
                                    <Link to={`/collocations/${collocation.id}`} >
                                        {collocation.phrase}
                                    </Link>
                                </p>
                                <button onClick={() => deleteCollocation(collocation.id) } key={(i+100)}>-</button>
                            </section>
                        )
                    }) }     
            </div>
            {/* returns list of example stentences when a collocation is clicked on */}
            <div className="examples">
                <h3 className="exTitle">Example sentences</h3>
                <section>
                    { collocationList.map((collocation, i) => {
                        return (
                            <div key={i}>
                                { collocation.id === parseInt(id) ?
                                    <p className="example-sentence" key={(i+1000)}>
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