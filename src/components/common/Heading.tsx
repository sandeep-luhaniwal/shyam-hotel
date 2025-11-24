import React, { ReactNode } from 'react'

type HeadingProps = {
    children?: ReactNode;
    paragraph?: string;
}
const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <div className='flex flex-col gap-2 text-foreground font-semibold'>
            <h2 className='text-2xl md:text-[28px] lg:text-[32px] leading-[133%] text-foreground'>
                {children}
            </h2>
        </div>
    )
}

export default Heading