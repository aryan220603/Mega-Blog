import React from "react";

export default function Button({
    children,
    type = "button",
    variant = "primary",
    className = "",
    ...props
}) {
    const baseClasses = "btn";
    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        ghost: "btn-ghost"
    };

    return (
        <button 
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}