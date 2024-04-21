import { Link } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { Spacer } from '../../atoms/Spacer/Spacer';

export const FAQs = ({faqs}) => {
  return (
    <Grid container xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
      {faqs.map((question, index) => {
        return (
          <Grid key={question.detail[0] + index} item xs={10}>
            <Accordion square sx={{borderTop: '2px solid black'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant='h6'>
                {question.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {question.detail}
              <Spacer/>
              {question.detail2a && (
                <>
                  <Typography>{question.detail2a} <Link to={question.detail2link} target="_blank" rel="noopener noreferrer">Patreon Page </Link>{question.detail2b}</Typography>
                  <Typography>{question.detail3}</Typography>
                  <Typography>{question.detail4}</Typography>
                  <Typography>{question.detail5}</Typography>
                </>
              )}
            </AccordionDetails>
            </Accordion>
          </Grid>
        )
      })}
    </Grid>
  )
}

FAQs.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
};