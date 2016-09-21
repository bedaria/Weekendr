import React from 'react';



const QuestionDetail = (props) => {
	console.log('do I get inside QuestionDetail: ',props)
		const selectAnswer = function(){
			props.onAnswerClicked(props.option)
		}
	return (
		<div onClick={selectAnswer}
		key={props.option} >
				{props}
				<button onClick={()=> props.answerQuestion()}>Click to get more</button>
		</div>
		)
}

export default QuestionDetail; 


