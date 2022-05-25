import classes from './Comment.module.css';
import emptyAvatar from '../../images/avatar-empty.svg'

export const Comment = ({ name, avatar, date, text }) => {

    return (
        <li className={classes.wrapper}>
            <div className={classes.container}>
                <img className={classes.avatar} src={avatar !== '' ? avatar : emptyAvatar} alt={name} />
                <div className={classes.rate}>
                    <button className={classes.rateDown}></button>
                    <span className={classes.rateNumber}></span>
                    <button className={classes.rateUp}></button>
                </div>
            </div>
            
            <div className={classes.description}>
                <div className={classes.info}>
                    <h2 className={classes.name}>{name}</h2>
                    <p className={classes.date}>{date}</p>
                </div>
                <p className={classes.text}>{text}</p>
            </div>
        </li>
    );
}