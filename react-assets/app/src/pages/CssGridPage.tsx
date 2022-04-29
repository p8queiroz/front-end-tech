import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function GridTemplateColumns() {
  const from = 1;
  const to = 17;

  return (
    <Box sx={{ m: 2 }}>
      <h1>Section one</h1>
      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)' }}>
          <Item sx={{ gridColumn: '1 / 17' }}>1</Item>
          <Item sx={{ gridColumn: '1 / 10' }}>2</Item>
          <Item sx={{ gridColumn: '10 / 17' }}>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item sx={{ gridColumn: `${from} / ${to}` }}>7</Item>
        </Box>
      </div>
      <h1>Section two</h1>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 1,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Box>
      </div>
      <h1>Section three</h1>
      <Box
        sx={{
          width: '100%',
          height: '140px',
          color: '#fff',
          '& > .MuiBox-root > .MuiBox-root': {
            p: 1,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
        "main main . sidebar"
        "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
          <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
          <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
          <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
        </Box>
      </Box>

      <h1>Section Four</h1>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 50px)',
            gap: 1,
          }}
        >
          <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}>5</Item>
        </Box>
      </div>
    </Box>
  );
}
