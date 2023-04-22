import React, {useState, useEffect} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Slider, { sliderClasses } from '@mui/material/Slider';

const finalTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === 'vertical' && {
            backgroundColor: 'transparent',
            color: 'white',
            fontWeight: 700,
            padding: '1rem',
            left: '3rem',
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: 'none',
            top: 'initial',
          },
        }),
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function Termometro() {

    const [temp, setTemp] = useState(20);

    useEffect(()=>{
        const id = setInterval(()=>{
            setTemp(Math.random()*90);
        }, 700);

        return ()=>{
            clearInterval(id);
        }

    },[]);

    return (
        <ThemeProvider theme={finalTheme}>
            <Slider
            getAriaLabel={() => 'Temperature'}
            orientation="vertical"
            getAriaValueText={valuetext}
            defaultValue={[0, 20]}
            marks={[
                { value: 0 },
                { value: 25 },
                { value: 50 },
                { value: 75 },
                { value: 100 },
            ]}
            valueLabelFormat={valuetext}
            valueLabelDisplay="on"
            value={temp.toPrecision(2)}
            />
        </ThemeProvider>
    );
}

export default Termometro;