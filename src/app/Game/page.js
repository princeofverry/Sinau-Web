'use client'
import clsx from "clsx";
import { useState, useEffect } from 'react';

const KEYBOARD = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
];
const ANSWER = 'ANYAR';
const MAX_ATTEMPTS = 4;

function Wordle() {
    const [answers, setAnswers] = useState([]);
    const [answerRow, setAnswerRow] = useState('');
    const [keyboardState, setKeyboardState] = useState({});
    const [gameReset, setGameReset] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const handleKeyboardPress = (event) => {
        const key = event.key.toUpperCase();
        if (!KEYBOARD.flat().includes(key) && key !== 'BACKSPACE') return;
        handlePress(key === 'BACKSPACE' ? 'DELETE' : key);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardPress);

        return () => document.removeEventListener('keydown', handleKeyboardPress);
    }, [handleKeyboardPress, answers, gameReset]);

    useEffect(() => {
        if (gameReset) {
            setGameReset(false);
        }
    }, [gameReset]);

    const handlePress = (key) => {
        if (answerRow.length < 5 && key.length === 1)
            return setAnswerRow((prev) => prev + key);

        if (key === 'DELETE') return setAnswerRow((prev) => prev.slice(0, -1));
        if (key === 'ENTER' && answerRow.length === 5) {
            const isCorrect = answerRow === ANSWER;

            setAnswers((prev) => [...prev, answerRow]);
            setAnswerRow('');

            setKeyboardState((state) => {
                const newState = answerRow.split('').reduce((acc, curr, index) => {
                    if (state[curr] === 'bg-green-600') return acc;
                    if (ANSWER[index] === curr) return { ...acc, [curr]: 'bg-green-600' };
                    if (ANSWER.includes(curr) && ANSWER[index] !== curr)
                        return { ...acc, [curr]: 'bg-yellow-400' };
                    return { ...acc, [curr]: 'bg-slate-600' };
                }, {});

                return { ...state, ...newState };
            });

            if (isCorrect) {
                alert('Anda menang!');
                setAnswers([]);
                setKeyboardState({});
                setGameReset(true);
                setAttempts(0);
            } else {
                setAttempts((prev) => prev + 1);
                if (attempts + 1 === MAX_ATTEMPTS) {
                    alert('Anda kalah! Jawaban yang benar adalah ' + ANSWER);
                    setAnswers([]);
                    setKeyboardState({});
                    setGameReset(true);
                    setAttempts(0);
                }
            }
        }
    };

    const renderAnswerCell = (index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        const cell = answers[row]?.[col];

        const style =
            'flex justify-center items-center text-3xl font-bold aspect-square h-fit';

        if (cell)
            return (
                <div
                    key={index}
                    className={clsx(
                        style,
                        !ANSWER.includes(cell) && 'bg-slate-608',
                        ANSWER.includes(cell) && ANSWER[col] !== cell && 'bg-yellow-400',
                        ANSWER[col] === cell && 'bg-green-600'
                    )}
                >
                    {cell}
                </div>
            );

        if (row === answers.length)
            return (
                <div key={index} className={clsx('border-slate-400 border', style)}>
                    {answerRow[col]}
                </div>
            );
    };

    const renderKeyboardCell = (char) => {
        const isAspectSquare = char !== 'DELETE' && char !== 'ENTER';
        return (
            <button
                key={char}
                onClick={() => handlePress(char)}
                className={clsx(
                    'border-slate-600 border h-5 sm:h-10 text-xs sm:text-base',
                    isAspectSquare ? 'aspect-square' : 'grow-[2]',
                    keyboardState[char]
                )}
            >
                {char}
            </button>
        );
    };

    return (
        <div className="bg-[#2C3361] h-full text-white">
            <div className="container mx-auto flex flex-col h-full py-24 sm:py-16">
                <h1 className="text-6xl text-center my-8">Wordle</h1>
                <div>
                    <div className="grid grid-cols-5 gap-2 max-w-4xl mx-auto">
                        {[...new Array(30)].map((_, index) => renderAnswerCell(index))}
                    </div>
                </div>
                <div className="overflow-auto">
                    <div className="w-full md:w-[75%] lg:w-[50%] mx-auto my-5">
                        {KEYBOARD.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex mb-2 gap-2 justify-center">
                                {row.map((char) => renderKeyboardCell(char))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wordle;