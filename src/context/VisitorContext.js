import { useState, createContext } from "react";

const VisitorContext = createContext();

const VisitorProvider = ({children}) => {

    const [ visitor, setVisitor ] = useState('');
    // const [ entry, setEntry ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    const state = {
        visitorState: [ visitor, setVisitor ],
        // entryState: [ entry, setEntry ],
        emailState: [ email, setEmail ],
        nameState: [ name, setName ],
        passwordState: [ password, setPassword ]
    }

    return (
        <VisitorContext.Provider value={state} >
            {children}
        </VisitorContext.Provider>
    )

}

export { VisitorContext, VisitorProvider }