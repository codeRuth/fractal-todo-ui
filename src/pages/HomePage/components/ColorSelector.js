import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
const colors = [
  '#f44336',
  '#e81e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b',
];

const Color = ({color, checked}) => {
  return (
    <Avatar style={{backgroundColor: color}}>
      {checked ? <DoneIcon /> : ''}
    </Avatar>
  );
};

export const ColorSelector = ({color, setColor}) => {
  const [currentColor, setCurrentColor] = React.useState('#f44336');

  const handleCurrentColor = (color) => {
    setColor(color);
    setCurrentColor(color);
  };

  return (
    <Grid container spacing={5}>
      {colors.map((color, index) => (
        <Grid key={index} item onClick={() => handleCurrentColor(color)}>
          <Color color={color} checked={currentColor === color} />
        </Grid>
      ))}
    </Grid>
  );
};
