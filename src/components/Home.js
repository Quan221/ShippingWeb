import { Button } from "bootstrap";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Home(){
    // const [user, dispatch] = useContext(UserContext)
    // dispatch({
    //     'type': 'login',
    //     'payload': user.data
    // })

    return(
        <>
        {/* <Button variant="primary" onClick >Begin</Button> */}
        <h1>Hi</h1>
        </>
    )
}