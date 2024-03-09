const RoomItems = (props) => {
    const {number, name, persons, price} = props.room;
    return(
        <>
            <tr>
                <td>{number}</td>
                <td>{name}</td>
                <td>{persons}</td>
                <td>{price}</td>
            </tr>
        </>
    )
}
export default RoomItems;