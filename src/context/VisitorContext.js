import { useState, createContext } from "react";

const VisitorContext = createContext();

const VisitorProvider = ({children}) => {

    const [ visitor, setVisitor ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ entry, setEntry ] = useState('');
    const [ palabra, setPalabra ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ busca, setBusca ] = useState('');

    const state = {
        visitorState: [ visitor, setVisitor ],
        emailState: [ email, setEmail ],
        nameState: [ name, setName ],
        passwordState: [ password, setPassword ],
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