import React from "react";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import WhyChooseEfestoo from "./cardsabout";



const infoCards = [
  {
    title: 'OUR BELIEF',
    icon: <RocketLaunchIcon sx={{ color: '#1abc9c', fontSize: 30 }} />,
    color: '#1abc9c',
    description: 'Efestoo connects students with enriching events and streamlines management for organizers—making it easy to discover, join, and host impactful experiences beyond the classroom.'
  },
  {
    title: 'OUR MISSION',
    icon: <LightbulbIcon sx={{ color: '#2979ff', fontSize: 30 }} />,
    color: '#2979ff',
    description: 'To create a dynamic platform where students can access events that fuel personal and professional growth, while event organizers can efficiently engage with their ideal participants.'
  },
  {
    title: 'OUR VISION',
    icon: <VisibilityIcon sx={{ color: '#f4b400', fontSize: 30 }} />,
    color: '#f4b400',
    description: 'To become the go-to platform for educational and skill-building events, fostering a vibrant community where students and organizers thrive together.'
  },
];
const AboutPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Poppins, sans-serif' }}>

      {/* Hero Section */}
      <Box sx={{ px: { xs: 3, md: 12 }, py: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Box sx={{ maxWidth: 640 }}>
          <Box sx={{ display: 'inline-block', background: 'linear-gradient(92.25deg, #F8BD00  16.85%,  #FFE182 79.24%)', px: 2.5, py: 1, borderRadius: '6px', transform: 'rotate(4deg)', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>Efestoo</Typography>
          </Box>
          <Typography variant="h5" sx={{ color: '#6B7280', fontWeight: 400, lineHeight: 1.6 }}>
            The complete event guide, so you can
            <br />experience more and plan less.
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: 4, md: 0 }, maxWidth: 460 }}>
          <Image
            src="/aboutImage.png"

            width={400}
            height={250}
          />
        </Box>
      </Box>

      {/* Navigation Bar */}
      <Box sx={{ backgroundColor: '#003399', color: 'white', py: 2, display: 'flex', justifyContent: 'space-around', gap: 4, flexWrap: 'wrap', fontWeight: 500, fontSize: '1rem' }}>
        {['Events', 'Workshops', 'Competitions', 'Webinars', 'Showcases', 'Exhibitions'].map((item, index) => (
          <Box
            key={index}
            component="a"
            href="#"
            sx={{
              color: 'white',
              textDecoration: 'none',
              px: 2,
              borderRight: index !== 5 ? '1px solid #ffffff80' : 'none',
              '&:last-child': { pr: 0 },
              display: "flex",
              justifyContent: "center"
            }}
          >
            {item}
          </Box>
        ))}
      </Box>

      {/* Main Content Section */}
      <Box sx={{ px: { xs: 3, md: 4 }, py: 6, maxWidth: '1200px', mx: 'auto' }}>
        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary">About</Button>
          <Button variant="outlined">Terms & Conditions</Button>
          <Button variant="outlined">Privacy Policy</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>

        {/* Who We Are */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            <Box component="span" sx={{ color: 'gold', fontWeight: 'bold' }}>WHO</Box> WE ARE
          </Typography>
          <Typography variant="body1" paragraph>
            At Efestoo, we believe that learning goes far beyond the classroom. We're building India’s first AI-powered platform dedicated to extracurricular and skill-based events—a one-stop ecosystem where event organizers and participants thrive.
          </Typography>
          <Typography variant="body1">
            From seamless registration and marketing tools to personalized organizer pages and a smart discovery experience, Efestoo simplifies how students, clubs, and private organizers connect, collaborate, and grow.
          </Typography>
        </Box>

        <Box sx={{ padding: 4, backgroundColor: '#fff' }}>
          <Grid container spacing={4}>
            {infoCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {card.icon}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ ml: 1, color: card.color }}
                  >
                    {card.title}
                  </Typography>
                </Box>
                <Divider sx={{ borderLeft: `2px solid ${card.color}`, height: '100%', float: 'left', mr: 1 }} orientation="vertical" flexItem />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                  {card.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <WhyChooseEfestoo />
    </Box>
  );
};

export default AboutPage;
