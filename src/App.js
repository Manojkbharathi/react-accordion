import React, { Fragment } from 'react';
import questions from './data';
import Question from './components/Question';

const App = () => {
  return (
    <main className='container'>
      <div>
        {' '}
        <h4>Frequently asked questions</h4>
      </div>
      <section className='info'>
        {questions.map((question) => {
          return <Question key={question.id} data={question} />;
        })}
      </section>
    </main>
  );
};

export default App;
