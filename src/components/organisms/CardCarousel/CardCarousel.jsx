import { useState } from 'react';
import { Button, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './CardCarousel.css';

export const CardCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const displayItems = [...items, ...items].slice(index, index + 3);

  return (
    <Grid container className='nav-card-carousel center' height={'auto'} lg={10} sm={11} xs={12}>
        {displayItems.map((item, i) => (
          <Grid key={i} item lg={3} xs={12} className='nav-card'>
            <img src={item.icon} className='card-icon'/>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{fontWeight: 800}}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{fontSize: 18}}>
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      {/* !Todo: Re-enable when more items are present in the list */}
      {items.length > 3 && (<Grid item xs={12}>
        <Button onClick={prevCard}>Previous</Button>
        <Button onClick={nextCard}>Next</Button>
      </Grid>)}
    </Grid>
  );
};

CardCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};