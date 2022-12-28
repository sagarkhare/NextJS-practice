//catch all routes
//added double [[]] so that /docs route will not give error 404
import { useRouter } from "next/router";

function Doc() {
    const router = useRouter();
    const {params = []} = router.query;
    if(params.length === 2){
        return(
            <h1>viewing docs for feature {params[0]} and concept {params[1]}</h1>
        )
    }
    else if(params.length === 1){
    return (
        <h1>viewing docs for feature {params[0]}</h1>
    );
    }
    else{
        return<h1>Docs for home page</h1>
    }
}

export default Doc;