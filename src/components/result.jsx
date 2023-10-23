const Result=(props)=>{
    const img =`https://plus.unsplash.com/${props.value}`;
    return(
        <>
<img src={img} alt="" srcset="" width={300} height={400} />
{/* {{props.e}} */}
<ul>
    <li>
    {props.value}
    </li>
</ul>
        </>
    )

}
export default Result;