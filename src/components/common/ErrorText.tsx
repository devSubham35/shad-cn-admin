import React from 'react'

const ErrorText = ({ title }: {title?: string}) => {
    return (
        <>
            {!!title && <p className="text-red-500 text-xs">{title}</p>}
        </>
    )
}

export default ErrorText