import { useState } from 'react';
import "./Roomlist.css";

const Reservation = ({rooms, setRooms}) => {

    const [warning, setWarning] = useState('');
    const [room, setRoom] = useState({
       number: '',
       name: '',
       persons: '',
       price: '',
       time: ''
    });

    const [reservations, setReservations] = useState([
    ]); //예약현황 담을 새로운 빈 배열 만들기

    const handleInput = (e) => {
        setRoom({
            ...room,
            [e.target.name]:e.target.value
        })
    } 

    //방 예약 
    const handleReservation = (e) =>{
        e.preventDefault();

        //input 확인
        if(room.number.trim() && room.name.trim() && room.persons.trim() && room.time.trim()){
            const nReservation = { ...room };

            // number로 예약한 룸 가격 찾기 (find 사용)
            const findPrice = rooms.find((price)=>price.number === room.number);
            if (findPrice) {
                nReservation.price = findPrice.price;
                    
                // 예약현황에 넣기
                setReservations(reservations.concat(nReservation));

                
                //예약된 방 가능 리스트에서 삭제
                setRooms([
                    ...rooms.filter((e)=>e.number !== room.number)
                ]);
                setRoom({
                    number: '',
                    name: '',
                    persons: '',
                    price: '',
                    time: ''
                });

                //warning 초기화
                setWarning('');
             }       

            else {
                setWarning('Room No를 확인해주세요!');
            }
        
        }
        else {
            setWarning('정보를 전부 입력해주세요!!');
        }
    };
   
    return(
        <>
            <h2 className='reservation'>미팅룸 예약</h2>
        <form className='reservation-form'>
            <table>    
                <tr>
                    <td className='reservation-table'>
                        <label>예약자 : </label>
                    </td>
                    <td className='reservation-table'>
                        <input type='text' name="name" onChange={handleInput} value={room.name}/>
                    </td>
                </tr> 
                <tr>
                    <td className='reservation-table'>
                        <label>룸번호 : </label>
                    </td>
                    <td className='reservation-table'>
                        <input type='text' name="number" onChange={handleInput} value={room.number}/>
                        <span className='span-warning'>{warning}</span>
                    </td>
                </tr> 
                <tr>
                    <td className='reservation-table'>
                        <label>인원 : </label>
                    </td>
                    <td className='reservation-table'>
                        <input type='text' name="persons" onChange={handleInput} value={room.persons}/>
                    </td>
                </tr> 
                <tr>
                    <td className='reservation-table'>
                        <label>이용시간 : </label>
                    </td>
                    <td className='reservation-table'>
                        <input type='text' name="time" onChange={handleInput} value={room.time}/>
                    </td>
                </tr>
                {/* <label>룸번호 : <input type='text'/></label><br/>
                <label>인원 : <input type='text'/></label><br/>
                <label>이용시간 : <input type='text'/></label><br/> */}
            </table>
            <button className='reservation-btn' onClick={handleReservation}>Reservation</button>
        </form>
        <div className='reservation-ck'>
            <h4>예약확인</h4>
            <h5>예약자 : {room.name} 룸번호 : {room.number} 인원 : {room.persons} 이용시간 : {room.time}</h5>
        </div>
                
        <div className='line'></div> {/* 구분선 */}
        

        <h2 className='reservation'>미팅룸 예약 현황</h2>
        <table style={{marginBottom:'100px'}}>
            <thead className='table-name'>
                <tr>
                    <th>Room No</th>
                    <th>Customer</th>
                    <th>Persons</th>
                    <th>Hours</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation, index) => (
                <tr key={index}>
                <td>{reservation.number}</td>
                <td>{reservation.name}</td>
                <td>{reservation.persons}</td>
                <td>{reservation.time}</td>
                <td>{reservation.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
    
}

export default Reservation;