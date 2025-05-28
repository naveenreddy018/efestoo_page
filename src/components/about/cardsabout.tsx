'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

const topFeatures = [
  {
    label: 'Experience the Best',
    image: '/experience.png',
  },
  {
    label: 'Meet new people',
    image: '/meet.png',
  },
  {
    label: 'Discover more',
    image: '/discover.png',
  },
  {
    label: 'Elevate your skills',
    image: '/elevate.png',
  },
];

const featureCards = [
  {
    title: 'All Events in ONE place',
    desc: 'Code, compete, and compete with the best',
    image: '/events.png',
    bg: '#ffdd4a',
    rotate: '-4deg',
  },
  {
    title: 'Personalized organiser page',
    desc: 'Code, compete, and compete with the best',
    image: '/organiser.png',
    bg: '#fff',
  },
  {
    title: 'Seamless registration management',
    desc: 'Code, compete, and compete with the best',
    image: '/register.png',
    bg: '#ffdd4a',
  },
  {
    title: 'Secure payment processing',
    desc: 'Code, compete, and compete with the best',
    image: '/secure.png',
    bg: '#fff',
  },
  {
    title: 'Easy event listing',
    desc: 'Code, compete, and compete with the best',
    image: '/listing.png',
    bg: '#ffdd4a',
  },
];

const WhyChooseEfestoo = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#fffdf8' }}>
      {/* Top Icons Section */}
      <Grid container spacing={4} justifyContent="space-around" textAlign="center" mb={6}>
        {topFeatures.map((item, index) => (
          <Grid item xs={6} sm={3} md={2.5} key={index}>
            <Box>
              <Image src={item.image} alt={item.label} width={100} height={100} style={{ marginBottom: 8 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Text Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h6" color="gray">
          Why Choose
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Efestoo.<span style={{ color: '#2979ff' }}>com</span>
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          From planning to payment, <br /> Efestoo.com powers your events with ease!
        </Typography>
        <Button variant="contained" sx={{ mt: 2, backgroundColor: '#2979ff', textTransform: 'none' }}>
          Explore Efestoo.com
        </Button>
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={4} justifyContent="center">
        {featureCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: card.bg,
                p: 3,
                height: '100%',
                textAlign: 'center',
                transform: card.rotate ? `rotate(${card.rotate})` : 'none',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {card.image && (
                <Image src={card.image} alt={card.title} width={50} height={50} style={{ marginBottom: 8 }} />
              )}
              <Typography fontWeight="bold" variant="subtitle1" mt={1}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {card.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseEfestoo;