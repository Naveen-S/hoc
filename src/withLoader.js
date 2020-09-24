import React, {useState, useEffect} from 'react'

const withLoader  = ( WrappedComponent ) => {
    const InnerComponent = ({isLoading}) => {
        const [loading, setLoading] = useState(isLoading);
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);

        if(loading) {
            return <div>Loading...</div>
        } else {
            return <WrappedComponent isLoading={isLoading} />
        }
    }
    return InnerComponent;
}
export default withLoader;