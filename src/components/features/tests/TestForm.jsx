import React, { useState } from 'react';
import Button from '@commons/Button';
import { questions } from '@/data/questions';

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill({ type: '', answer: '' }));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedAnswers = answers.map(({ type, answer }, idx) => {
      const [option1, option2] = type.split('/');
      const question = questions[idx].options[0] === answer;
      return { type, answer: question ? option1 : option2 };
    });
    onSubmit(convertedAnswers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? 'bg-gray-100' : ''
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button
        name="제출하기"
        type="submit"
        className="w-full px-2 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
      />
    </form>
  );
};

export default TestForm;
