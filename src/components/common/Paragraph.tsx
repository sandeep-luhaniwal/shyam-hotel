import React, { ReactNode } from 'react'

type ParagraphProps = {
    xs?: boolean;
    sm?: boolean;
    base?: boolean;
    lg?: boolean;
    small?: boolean;
    big?: boolean;
    gray?: boolean;
    semibold?: boolean;
    bold?: boolean;
    black?: boolean;
    medium?: boolean;
    red?: boolean;
    pink?: boolean;
    className?: string;
    children?: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, sm, xs, bold, base, lg, red, small, big, medium, black, gray, semibold, className, pink }) => {
    return (
        <p className={`${className} leading-[133%] ${gray ? "text-gray" : red ? "text-red" : black ? "text-black" : pink ? "text-pink" : "text-white"}
        ${semibold ? "font-semibold" : medium ? "font-medium" : bold ? 'font-bold' : 'font-normal'}
        ${sm ? "text-sm" : base ? "text-sm lg:text-base" : xs ? "text-xs" : lg ? "text-base lg:text-lg" : small ? "text-lg lg:text-xl" : big ? "text-2xl lg:text-[28px] xl:text-[32px]" : "text-2xl lg:text-[28px]"}
        `}>{children}</p>
    )
}

export default Paragraph