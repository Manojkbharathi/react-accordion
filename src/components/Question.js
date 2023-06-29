import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
const Question = (props) => {
  const { question, answer } = props.data;

  const [isShowAnswer, setIsShowAnswer] = useState(false);

  const clickHandler = () => {
    setIsShowAnswer((isShowAnswer) => !isShowAnswer);
  };

  return (
    <article className='question'>
      <header>
        <div className='question'>
          <h4>{question}</h4>
        </div>

        <div>
          <button className='btn' onClick={clickHandler}>
            {isShowAnswer ? (
              <AiFillMinusCircle size='2rem' />
            ) : (
              <AiFillPlusCircle size='2rem' />
            )}
          </button>
        </div>
      </header>
      {/* by default answer is hidden */}
      {isShowAnswer && <p>{answer}</p>}
    </article>
  );
};

export default Question;
