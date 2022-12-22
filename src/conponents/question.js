import { Box,Typography ,styled} from "@mui/material"

const TextWrapper = styled(Box)(({ theme }) => ({
  padding:theme.spacing(4)
}))

export const Question = (props) => {
  const {
    question = {},
  } = props
  return (
    <TextWrapper>
      <Typography>
        Question {question[0].id} : {question[0].question_name}
      </Typography>
    </TextWrapper>

  )
}
