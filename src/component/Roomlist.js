import { useState } from 'react';
import "./Roomlist.css";
import Reservation from './Reservation';
import RoomItems from './RoomItems';

const Roomlist = () => {

    //상태변수 정의
    const [rooms, setRooms] = useState([
        { number: '101' ,name: 'Lemon', persons: '4', price: '55000' },
        { number: '102' ,name: 'Cherry', persons: '6', price: '74000' },
        { number: '202' ,name: 'Ocean', persons: '4', price: '60000' },
        { number: '203' ,name: 'Sky', persons: '8', price: '88000' },
        { number: '205' ,name: 'Forest', persons: '8', price: '94000' },
        { number: '301' ,name: 'Smile', persons: '6', price: '60000' },
        { number: '303' ,name: 'Cloud', persons: '12', price: '115000' },
    ]); 
    

    //메뉴 출력
    const rows = rooms.map(room =>
        <RoomItems key={room.number} room={room} />
        );
 
    return (
        <>
        <h2 className='list'>예약 가능한 미팅룸 리스트</h2>
        <table>
            <thead className='table-name'>
                <tr>
                    <th>Room No</th>
                    <th>Room Name</th>
                    <th>Persons</th>
                    <th>Price(3hours)</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
      </table>
      <div className='line'></div>
      <Reservation rooms={rooms} setRooms={setRooms}/>
        </>
    );
}

export default Roomlist;