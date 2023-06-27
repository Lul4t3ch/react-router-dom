import { Outlet, useParams, useSearchParams } from "react-router-dom"

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams(); 


    return (
        <><div>
            <h1>Post Page {`Params: ${id}`}</h1>
        </div><Outlet /></>
    )
}