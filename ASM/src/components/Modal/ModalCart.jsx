


function ModalCart({body,children,className}) {
    return ( 
        <div className="relative">
            {children}
            {/* <div className="fixed top-0 left-0 right-0 bottom-0 inset-auto bg-white opacity-50"> */}
            {/* </div> */}
            <div className="absolute top-0 right-0 w-[300px] h-auto bg-white">{body}</div>
        </div>
     );
}

export default ModalCart;