const List = ({props, str}) => {
    console.log(str)
    //console.log(props);
    return (
        <>
            {
                <div className="border border-b-2 text-left p-4">
                    <div><span className="font-bold">{props.name} - {props.price} Rupees</span></div>
                    <div><span>{}</span></div>
                    <div><span className="text=xs">{props.description}</span></div>
                </div>

            }
        </>

    )
}
export default List;