import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oooooops..</h1>
            <h2>This page cannot be found</h2>
            <p>Please go back to home page <Link href="/"><a>HomePage</a></Link> </p>
        </div>
     );
}
 
export default Notfound;