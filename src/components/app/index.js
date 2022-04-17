import { useState } from 'react';
import { factorial } from '../../utils';
import styles from './styles.module.css';

const App = () => {
    // States
    const [number, setNumber] = useState('');
    const [numberList, setNumberList] = useState([]);

    const [factorials, setFactorials] = useState({});

    // Callbacks
    const addNumberToList = async (event) => {
        event.preventDefault();

        const numberToAdd = +number;
        if (Number.isFinite(numberToAdd)) {
            setNumberList([...numberList, numberToAdd]);
            setNumber('');
            const value = await window.calcInWorker(numberToAdd);
            setFactorials((_factorials) => {
                return { ..._factorials, [numberToAdd]: value };
            });
        }
    };

    return (
        <form onSubmit={addNumberToList}>
            <h1 className={styles.appTitle}>Factorial!</h1>
            <label htmlFor="number">Enter a number from 0 to 9999</label>
            <input
                className={styles.numberInput}
                type="number"
                name="number"
                value={number}
                max={9999}
                min={0}
                step={1}
                onChange={(event) => setNumber(event.target.value)}
            />
            <button type="submit">Add For Calculation</button>
            <hr />
            <h2>Output</h2>
            <ul>
                {numberList.map((num, index) => (
                    <li key={index} className={styles.listItem}>
                        <strong>Result of {num}! is:</strong>
                        <br />
                        <code>
                            {factorials[num]
                                ? factorials[num].slice(0, 200)
                                : 'loading...'}
                            {factorials[num] &&
                                factorials[num].length > 200 &&
                                '...'}
                        </code>
                        <button
                            className={styles.smallButton}
                            onClick={() => {
                                navigator.clipboard.writeText(factorials[num]);
                            }}
                        >
                            Copy
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default App;
