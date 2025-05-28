'use client';

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import Footer from '../Footer/footer';

const TermsAndConditions = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Poppins, sans-serif' }}>
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

      {/* Terms and Conditions */}
      <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: '1500px', mx: 'auto' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" gutterBottom>
          By accessing or using our platform ("Website"), you agree to comply with the following terms and conditions ("Terms"). Please read them carefully before using our services.
        </Typography>

        <Section title="1. Definitions" items={[
          '1.1 Platform refers to the Efestoo.com website and its related services.',
          '1.2 User includes both students and event organizers accessing or using the platform.',
          '1.3 Content refers to any information, data, text, graphics, videos, or other material uploaded or provided on the platform.'
        ]} />

        <Section title="2. Acceptance of Terms" items={[
          '2.1 By using the Platform, you agree to these Terms and our Privacy Policy.',
          '2.2 If you do not agree to these Terms, you must refrain from using the Platform.'
        ]} />

        <Section title="3. Services Provided" items={[
          '3.1 The Platform connects students with events, workshops, and competitions tailored to their interests while providing tools for organizers to create, promote, and manage events efficiently.',
          '3.2 Efestoo.com reserves the right to modify or discontinue any service without prior notice.'
        ]} />

        <Section title="4. User Conduct and Obligations" items={[
          '4.1 Users agree to use the Platform only for lawful purposes and shall not:',
          ' - Upload or share inappropriate, defamatory, or unlawful content.',
          ' - Distribute malware, viruses, or malicious software.',
          ' - Misrepresent personal or event information.',
          '4.2 Users must ensure that any content they upload does not violate intellectual property rights, privacy laws, or applicable regulations.'
        ]} />

        <Section title="5. Event Listing and Participation" items={[
          '5.1 Event organizers are solely responsible for the accuracy of event details, including fees, schedules, and deliverables.',
          '5.2 Students participating in events acknowledge that Efestoo.com is not liable for event quality, cancellations, or disputes between participants and organizers.'
        ]} />

        <Section title="6. Payments and Refunds" items={[
          '6.1 Payments for paid events are made directly to organisers.',
          '6.2 No Refund Policy: All purchases of tickets for events are final. There are no refunds or exchanges once a ticket is purchased, irrespective of the reason.'
        ]} />

        <Section title="7. Intellectual Property" items={[
          '7.1 Efestoo.com retains all ownership and intellectual property rights related to the Platform, including but not limited to designs, software, and trademarks.',
          '7.2 Users grant Efestoo.com a non-exclusive license to use, reproduce, and display any content they upload for operational purposes.'
        ]} />

        <Section title="8. Privacy Policy" items={[
          '8.1 By using the Platform, users consent to Efestoo’s data collection and usage practices as outlined in our Privacy Policy.',
          '8.2 While Efestoo.com implements robust security measures, it does not guarantee complete protection against unauthorized access or data breaches.'
        ]} />

        <Section title="9. Limitation of Liability" items={[
          '9.1 Efestoo.com is not responsible for disputes between users (students and organizers), event cancellations, delays, or quality issues.',
          '9.2 The Platform is provided as is without warranties of any kind, either express or implied.'
        ]} />

        <Section title="10. Termination of Access" items={[
          '10.1 Efestoo.com reserves the right to terminate or suspend user access without prior notice for violations of these Terms.',
          '10.2 Users may deactivate their accounts by contacting support@efestoo.com.'
        ]} />

        <Section title="11. Amendments" items={[
          '11.1 Efestoo.com reserves the right to amend these Terms at any time. Users will be notified of significant changes via email or Platform notifications.'
        ]} />

        <Section title="12. Contact Information" items={[
          'For any queries or assistance, please get in touch with us at:',
          '• Email: efestoo.com@gmail.com',
          '• Phone: +91-9572559261',
          '• Address: National Institute of Technology, Sector 1, Rourkela, Odisha 769008'
        ]} />
      </Box>
      <Footer />
    </Box>
  );
};

const Section = ({ title, items }) => (
  <Box mb={1}>
    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ lineHeight: 1.2 }}>
      {title}
    </Typography>
    <List disablePadding>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ pl: 0, py: 0.1 }}>
          <ListItemText primary={item} primaryTypographyProps={{ sx: { lineHeight: 1.2 } }} />
        </ListItem>
      ))}
    </List>

  </Box>
);

export default TermsAndConditions;
