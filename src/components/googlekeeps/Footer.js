import { useState } from "react";

const Footer= ()=>{
const LatestDate = new Date().getFullYear();
const [latest,setlatest] = useState(LatestDate);

    return(
        <>
        <footer>
            <p>
                Copyrights {LatestDate}
            </p>
        </footer>
        
        </>
    )

}
export default Footer;
