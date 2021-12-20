import { useState, createContext } from "react";

const VisitorContext = createContext();

const VisitorProvider = ({children}) => {

    // client info
    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    
    // client input
    const [ entry, setEntry ] = useState('');
    const [ palabra, setPalabra ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ busca, setBusca ] = useState('');

    const state = {
        // client info states
        userState: [ user, setUser ],
        emailState: [ email, setEmail ],
        nameState: [ name, setName ],
        passwordState: [ password, setPassword ],

        // client input states
        entryState: [ entry, setEntry ],
        palabraState: [ palabra, setPalabra ],
        searchState: [ search, setSearch ],
        buscaState: [ busca, setBusca ]
    }

    return (
        <VisitorContext.Provider value={state} >
            {children}
        </VisitorContext.Provider>
    )

}

export { VisitorContext, VisitorProvider }