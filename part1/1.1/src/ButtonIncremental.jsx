const ButtonIncremental = ({incrementa, texto})=>{
    return(
        <button onClick={incrementa}>{texto}</button>
    )
};

export default ButtonIncremental;