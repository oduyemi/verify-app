import clsx from "clsx";

function getClassName({className}){
    return clsx("mt-10 bg-greene text-white rounded-md px-3 py-2 hover:bg-goldie transition-colors transition-duration-300 cursor-pointer focus-outline-none focus-ring-2 focus-ring-opacity-50",
    className)
}

const sizes = {
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "w-full px-4 py-3"
};

const variants = {
    greene: "bg-greene focus:ring-blaq",
    outline: "bg-goldie focus:ring-greene",
    blaq: "bg-blaq focus:ring-greene",
    orange: "bg-orange focus:ring-greene"
};


const Button = ({children,
    className,
    size,
    variant,
    ...rest
}) => {
    return(
    <button className= {clsx(
        sizes[size],
        variants[variant],
        getClassName({className})
    )}
    {...rest}
        >
        {children}
        </button>


    )
    
    
};


export default Button;