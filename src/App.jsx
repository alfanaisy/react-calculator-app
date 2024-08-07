import { useState } from 'react';
import Button from './Button';

function App() {
  return <Calculator />;
}

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');

  // const operatorList = ['+', '-', '*', '/'];

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') {
        return number;
      } else if (prevValue === '.') {
        return '0.' + number;
      } else {
        return prevValue + number;
      }
    });
  };

  const handleClearClick = () => {
    setExpression('');
    setDisplayValue('0');
  };

  const handleOperatorClick = (operator) => {
    setExpression((prevExpression) => {
      // if (prevExpression.endsWith(operator)) {
      if (/[+-/*]$/.test(prevExpression)) {
        return prevExpression.slice(0, -1) + operator;
      } else {
        return prevExpression + displayValue + operator;
      }
    });
    setDisplayValue('0');
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleEqualClick = () => {
    try {
      const result = eval(expression + displayValue);
      setDisplayValue(result.toString());
      setExpression('');
    } catch (error) {
      setDisplayValue('Error: ', error);
    }
  };

  return (
    <div className="main-wrapper">
      <div id="display">
        <p>{expression}</p>
        <h4>{displayValue}</h4>
      </div>
      <div className="button-wrapper">
        {/* first row button */}
        <Button
          text="AC"
          clickHandler={() => {
            handleClearClick();
          }}
          className="span-col"
        />
        <Button
          text="/"
          clickHandler={() => {
            handleOperatorClick('/');
          }}
        />
        <Button
          text="x"
          clickHandler={() => {
            handleOperatorClick('*');
          }}
        />

        {/* second row button  */}
        <Button
          text="7"
          clickHandler={() => {
            handleNumberClick('7');
          }}
        />
        <Button
          text="8"
          clickHandler={() => {
            handleNumberClick('8');
          }}
        />
        <Button
          text="9"
          clickHandler={() => {
            handleNumberClick('9');
          }}
        />
        <Button
          text="+"
          clickHandler={() => {
            handleOperatorClick('+');
          }}
        />
        {/* third row button */}
        <Button
          text="4"
          clickHandler={() => {
            handleNumberClick('4');
          }}
        />
        <Button
          text="5"
          clickHandler={() => {
            handleNumberClick('5');
          }}
        />
        <Button
          text="6"
          clickHandler={() => {
            handleNumberClick('6');
          }}
        />
        <Button
          text="-"
          clickHandler={() => {
            handleOperatorClick('-');
          }}
        />

        {/* fourth row button */}
        <Button
          text="1"
          clickHandler={() => {
            handleNumberClick('1');
          }}
        />
        <Button
          text="2"
          clickHandler={() => {
            handleNumberClick('2');
          }}
        />
        <Button
          text="3"
          clickHandler={() => {
            handleNumberClick('3');
          }}
        />
        <Button
          text="="
          clickHandler={() => {
            handleEqualClick();
          }}
          className="span-row"
        />

        {/* fifth row button */}
        <Button
          text="0"
          clickHandler={() => {
            handleNumberClick('0');
          }}
          className="span-col"
        />
        <Button
          text="."
          clickHandler={() => {
            handleDecimalClick();
          }}
        />
      </div>
    </div>
  );
}

export default App;
