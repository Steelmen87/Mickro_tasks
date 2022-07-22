import React from 'react';
import styles from './One.module.css'

type CarType = {
    manufacturer: string
    model: string
}

type MikroTaskType = {
    topCars: Array<CarType>
}

const MicroTaskOne: React.FC<MikroTaskType> = ({topCars}) => {
    return (
        <div>
            <table className={styles.tab}>
                <caption className={styles.caption}>Map : cars</caption>
                {topCars.map(car =>
                    <tr className={styles.tr}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                    </tr>)}
            </table>
        </div>
    );
};

export default MicroTaskOne;