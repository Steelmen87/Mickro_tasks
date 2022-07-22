import React, {useState} from 'react';
import './App.css';
import Filter, {FilterType, MoneyType} from "./microtasks/MethodFilter/Filter";

function App() {
    let [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [filter, setFilter] = useState<FilterType>('All')

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const ButtonFoo1 = (sub: string) => {
        console.log(sub)
    }
    const ButtonFoo2 = (sub: string) => {
        console.log(sub)
    }
    const ButtonDump = () => {
        console.log('I am dump Button')
    }
    return (
        <div>
            {/*<MicroTaskOne topCars={topCars}/>*/}
            {/* <MickroTaskTwoButton/>*/}
            {/*<Button name={'Chanel1'} callback={() => ButtonFoo1('Vasi')}/>
            <Button name={'Chanel2'} callback={() => ButtonFoo2('Ivan')}/>
            <Button name={'I am dump Button'} callback={ButtonDump}/>*/}
            {/*    <UseStateHook/>*/}
            <Filter
                money={money}
                setFilter={setFilter}
                filter={filter}
            />
        </div>
    );
}

export default App;
