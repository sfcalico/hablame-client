// import { useContext } from "react";
// import { VisitorContext } from "../context/VisitorContext";
import NavBar from '../components/NavBar';            
            


const HomePage = () => {
    return (
        <div className='grid-container'>
            <section className="homeSections">
                <NavBar />
            </section>
            <section className="homeSections">
                <form className="dictionaryApi">
                <input 
                    type="text" 
                    placeholder="search english word here"
                />
                </form>    
            </section>
            <section className="homeSections">
                <form className="linguaTool">
                    <input 
                        type="text"
                        placeholder="input a Spanish word here"
                    />
                </form>
            </section>
        </div>
    )
}

export default HomePage;