import { Box, Card, styled } from "@mui/material"
import questions from "../mock_data/questions.json"
import choices from "../mock_data/choices.json"
import { Question } from "../conponents/question"
import { Choices } from "../conponents/choices"
import { useParams } from "react-router-dom"

const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    top: 100
}))

const StyledCard = styled(Card)(({ theme }) => ({
    width: 500,
    height: 500,
    borderRadius: 50,
    boxShadow: theme.shadows[6]
}))

export const ExamPage = () => {
    let params = useParams()
    const showQuestion = questions.filter((question) => question.id === parseInt(params.id))
    const showChoices = choices.filter((choice) => choice.questions_id === parseInt(params.id))
    
    return (
        <Wrapper>
            <StyledCard>
                <Question question={showQuestion} />
                <Choices choices={showChoices}/>
            </StyledCard>
        </Wrapper>
    )
}
