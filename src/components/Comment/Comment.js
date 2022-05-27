import classes from './Comment.module.css';
import emptyAvatar from '../../images/avatar-empty.svg'
import { useState, useEffect } from 'react';

export const Comment = ({ name, avatar, text, date }) => {

    const [rate, setRate] = useState(0);
    const [badRate, setBadRate] = useState(false);
    const [intervalDate, setIntervalDate] = useState('');

    const handleRateDown = () => setRate(rate-1);
    const handleRateUp = () => setRate(rate+1);

    const handleShowComment = () => setBadRate(false);

    useEffect(() => {
        const currentDate = new Date();
        const diff = currentDate - date;
        (diff < 1000) ? setIntervalDate('Недавно') : convertToInterval(diff)    
    }, [])

    useEffect(() => {
        (rate < -9) ? setBadRate(true) : setBadRate(false)
    }, [rate]);

    function convertToInterval(milliSeconds) {
        let days = Math.floor(milliSeconds/(86400 * 1000));
        milliSeconds -= days*(86400*1000);
        let hours = Math.floor(milliSeconds/(60 * 60 * 1000 ));
        milliSeconds -= hours * (60 * 60 * 1000);
        let minutes = Math.floor(milliSeconds/(60 * 1000));
        
        let interval = `${minutes} мин. ${hours} ч. ${days} дн.`;
        setIntervalDate(interval)  
    }

    
    return (
        <li className={classes.wrapper}>
            <div className={classes.container}>
                <img className={classes.avatar} src={avatar !== '' ? avatar : emptyAvatar} alt={name} />
                <span className={classes.rateNumber}>{rate}</span>
                <div className={classes.rate}>
                    <button className={classes.rateDown} onClick={handleRateDown}></button>
                    <button className={classes.rateUp} onClick={handleRateUp}></button>
                </div>
            </div>
            
            <div className={classes.description}>
                <div className={classes.info}>
                    <h2 className={classes.name}>{name ? name : "Гость"}</h2>
                    <p className={classes.date}>{intervalDate}</p>
                </div>
                {
                    !badRate
                    ? <p className={classes.text}>{text}</p>
                    : <p onClick={handleShowComment} className={classes.textOpen}>Открыть комментарий</p>
                }   
            </div>
        </li>
    );
}