
function Image({src,srcSet,alt,className}) {
    return ( 
        <img src={src} srcSet={srcSet} alt={alt} className={`${className}`}/>
     );
}

export default Image;