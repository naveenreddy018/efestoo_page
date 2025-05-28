"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Footer from "../Footer/footer";
import Image from 'next/image';
const PrivacyPolicy = () => {
  return (
   <>
    <Box sx={{ width: '100%', px: { xs: 2, md: 6 }, py: 5 }}>


         {/* Hero Section */}
              <Box sx={{ px: { xs: 3, md: 12 }, py: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Box sx={{ maxWidth: 1200 }}>
                  <Box sx={{ display: 'inline-block', background: 'linear-gradient(92.25deg, #FFCB2E 16.85%, #FFCE00 79.24%)', px: 2.5, py: 1, borderRadius: '6px', transform: 'rotate(-2deg)', mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>Efestoo</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ color: '#6B7280', fontWeight: 400, lineHeight: 1.6 }}>
                    The complete event guide, so you can
                    <br />experience more and plan less.
                  </Typography>
                </Box>
                <Box sx={{ mt: { xs: 4, md: 0 }, maxWidth: 460 }}>
                  <Image src="/aboutImage.png" width={400} height={250} alt="About Efestoo" />
                </Box>
              </Box>
        
              {/* Navigation Bar */}
              <Box sx={{ backgroundColor: '#003399', color: 'white', py: 2, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', fontWeight: 500, fontSize: '1rem' }}>
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
                      '&:last-child': { pr: 0 }
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
      <Box sx={{ maxWidth: "1500px", mx: "auto" }}>
        <Typography variant="h4" gutterBottom align="center">
          Privacy policy
        </Typography>

        <Typography variant="body1" paragraph>
          At Efetsoo, we value your privacy and are committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and protect your data when you use our website and services.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this policy, please contact us at{" "}
          <Link href="mailto:support@efetsoo.com">support@efetsoo.com</Link>.
        </Typography>

        {/* --- Sections Below --- */}
        <Box mt={4}>
          <Typography variant="h6">Data Retention</Typography>
          <Typography variant="body2">- User Data: Retained for up to 5 years after inactivity or account closure.</Typography>
          <Typography variant="body2">- Client Data: Archived after 1 year and deleted after 3 years unless requested otherwise.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Your Rights</Typography>
          <Typography variant="body2">• Access, correct, or delete your data.</Typography>
          <Typography variant="body2">• Withdraw consent for marketing communications.</Typography>
          <Typography variant="body2">• Request a copy of your data.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Security</Typography>
          <Typography variant="body2">
            We take robust measures to protect your data but cannot guarantee complete security.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Changes to the Privacy Policy</Typography>
          <Typography variant="body2">
            Efetsoo reserves the right to amend this policy. Significant changes will be communicated via email or
            notifications.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Data Sharing</Typography>
          <Typography variant="body2">We do not sell your data. We share it only:</Typography>
          <Typography variant="body2">• With event organizers for registered events.</Typography>
          <Typography variant="body2">• With service providers for technical support.</Typography>
          <Typography variant="body2">• When required by law or with your consent.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Information We Collect</Typography>
          <Typography variant="subtitle1">1. Personal Information:</Typography>
          <Typography variant="body2">
            Name, email address, mobile number, and profile details. Academic or professional details (e.g., designation, organization).
          </Typography>
          <Typography variant="subtitle1" mt={2}>2. Usage Data:</Typography>
          <Typography variant="body2">IP address, browser type, device ID, and interaction data.</Typography>
          <Typography variant="subtitle1" mt={2}>3. Event Data:</Typography>
          <Typography variant="body2">Responses to event-related forms, quizzes, and surveys.</Typography>
          <Typography variant="subtitle1" mt={2}>4. Payment Information:</Typography>
          <Typography variant="body2">Securely processed details for ticket purchases or subscriptions.</Typography>
          <Typography variant="subtitle1" mt={2}>5. Social Media:</Typography>
          <Typography variant="body2">Information from linked accounts (e.g., LinkedIn, Google) for login.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">How we use this information</Typography>
          <Typography variant="body2">• Personalizing event recommendations.</Typography>
          <Typography variant="body2">• Sending notifications, updates, and promotional offers.</Typography>
          <Typography variant="body2">• Supporting event registration and participation.</Typography>
          <Typography variant="body2">• Generating learning reports from uploaded lectures.</Typography>
          <Typography variant="body2">• Improving our platform through analytics and feedback.</Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Cookies: We use cookies to</Typography>
          <Typography variant="body2">• Personalize your experience.</Typography>
          <Typography variant="body2">• Track behavior for analytics and improvements.</Typography>
          <Typography variant="body2">• You can manage cookies through your browser settings.</Typography>
        </Box>
      
      </Box>
     
    </Box>
       <Footer />
   
   </>
  );
};

export default PrivacyPolicy;
