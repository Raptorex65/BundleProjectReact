import React from 'react';
//import Jotform from '../forms/form'
import data from '../components/about/data';
import SingleQuestion from '../components/about/Question';

const FormRules = () => {
  
  const questions = data;
  return (
    <main>
      <div className='container'>
        <h5>Questions and answers about filling the form</h5>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default FormRules
