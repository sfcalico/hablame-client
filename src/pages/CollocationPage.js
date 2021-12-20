import axios from 'axios';
import NavBar from "../components/NavBar";
import Collocations from "../components/Collocations";

const CollocationPage = () => {

    

    // delete a specific collocation
    const deleteCollocation = async (collocation) => {
        try {
            let response = await axios.delete(`http://localhost:3001/users/collocation`,  { data: {
            word: collocation,
            userId: localStorage.getItem('userId')
        }
        })
        console.log(collocation)
        collocation.send({ response })
        } catch (error) {
            console.log (error, error.message);
        }
    }   

    return (
        <div className="colloc-forms">
            <NavBar />
            <Collocations deleteCollocation={deleteCollocation} >

            </Collocations>       
        </div>
    )
}

export default CollocationPage;