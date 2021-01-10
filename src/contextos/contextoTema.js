import React, {useState} from 'react';


// Creamos Contexto = Estado Global
const ContextoTema = React.createContext();
 
const ProovedorTema = ({children}) => {

    const [tema, cambiarTema] = useState (
        {
        alineado: 'left',
        fuente: 30
        }
        )


    const aumentarFuente = () => cambiarTema({...tema, fuente: tema.fuente + 1});
    const disminuirFuente = () => cambiarTema({...tema, fuente: tema.fuente - 1});
    const alinearIzquierda = () => cambiarTema({...tema, alineado: 'left'});
    const alinearCentro = () => cambiarTema({...tema, alineado: 'center'});
    const alinearDerecha = () => cambiarTema({...tema, alineado: 'right'});

    return (
        <ContextoTema.Provider value={{tema, aumentarFuente, disminuirFuente, alinearDerecha, alinearCentro, alinearIzquierda}}>
        {children}
        </ContextoTema.Provider> 
    );
}
 
export {ContextoTema, ProovedorTema};