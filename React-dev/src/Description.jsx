function Description({description,features,features2}){
    return(
        <>
        <p>{description} </p>
        <p>{features}</p>
        <p>{features2.a}</p>
        <p>{features2.b}</p>
        <p>{features2.c}</p>
        </>
    );
}

export default Description;