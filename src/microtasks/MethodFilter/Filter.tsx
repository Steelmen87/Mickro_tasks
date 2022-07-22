import React from 'react';

type FilterComponentType = {
    money: Array<MoneyType>
    filter: FilterType
    setFilter: (val: FilterType) => void
}
export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'Dollars' | 'RUBLS' | 'All'
const Filter: React.FC<FilterComponentType> = ({money, filter, setFilter}) => {


    const setFILTER = (val: FilterType) => {
        setFilter(val)
    }


    let currentMoney;
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    } else if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    } else {
        currentMoney = money
    }
    return (
        <div>
            <ul>
                {currentMoney.map((obj, i) => (<li key={obj.value + i}>
                    <span>{obj.banknots} - </span>
                    <span>{obj.value} : </span>
                    <span>{obj.number} </span>
                </li>))}
            </ul>
            <div style={{marginLeft: '40px'}}>
                <button onClick={() => setFILTER('All')}>All</button>
                <button onClick={() => setFILTER('RUBLS')}>RUBLS</button>
                <button onClick={() => setFILTER('Dollars')}>Dollars</button>
            </div>
        </div>
    );
};

export default Filter;