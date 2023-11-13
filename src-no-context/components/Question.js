import Option from "./Option";

function Question({ questions, answer, dispatch }) {
  // console.log(questions);

  return (
    <div>
      <h4>{questions.question}</h4>

      <div>
        <Option questions={questions} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}

export default Question;
