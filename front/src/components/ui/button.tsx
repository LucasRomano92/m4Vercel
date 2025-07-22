import React, { FC } from "react";
import cs from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { 
    label?: string;
    variant?: "primary" | "secondary" | "tertiary" | "outline";
}

const Button: FC<ButtonProps> = ({ 
    label= "Button",
     variant = "secondary",
     className,
      ...props }) => {


    const buttonVariants = {
        primary: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",
        secondary: "text-primary-300 hover:text-white border border-primary-300 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ",
        tertiary: "bg-transparent text-primary-500 hover:text-primary-600 border border-primary-500",
        outline: "text-gray-400 border border-gray-300 bg-gray-100 cursor-not-allowed opacity-60 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
    };
    return (
        <button  {...props} className={cs(buttonVariants[variant] || buttonVariants.secondary, className)}>
            {label}
        </button>
    );
};

export default Button;
