import axios from 'axios';
import NavBar from "../components/NavBar";
import Collocations from "../components/Collocations";

const CollocationPage = () => {

    // delete a specific collocation
    const deleteCollocation = async (collocation) => {
        try {
            let response = await axios.delete(`https://git.heroku.com/habla-me.git/users/collocation`, { data: {
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
            <Collocations deleteCollocation={deleteCollocation} />       
        </div>
    )
}

export default CollocationPage;