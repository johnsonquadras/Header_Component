import { useEffect } from 'react'


const useDocumentClick = (handler: () => void) => {
    useEffect(() => {

        // Add event listener
        window.addEventListener('click', handler);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('click', handler);
        };


    }, [handler])
}

export default useDocumentClick

