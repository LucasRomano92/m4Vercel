import React, { FC } from 'react'

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {//px-4 sm:px-6 lg:px-8
return (
    <div className=" mx-auto max-w-6xl  min-h-[100vh]">
        {children}
    </div>
)
}

export default Container;