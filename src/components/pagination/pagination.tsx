"use client"

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './pagination.module.css';

export default function PaginationRounded() {
  return (
    <Stack className={styles.paginationContainer}>
      <Pagination
        count={8}
        shape="rounded"
        siblingCount={6}
        className={styles.pagination}
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: {
              xs: '12px',
              sm: '14px',
              md: '16px',
            },
            minWidth: {
              xs: '26px',
              sm: '30px',
            },
            padding: '2px 4px',
            margin: '0 3px',
            color: '#1976d2',
            borderColor: '#1976d2',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)',
          },
          '& .Mui-selected': {
            backgroundColor: '#1976d2',
            color: 'white',
            borderColor: '#1976d2',
          },
          '& .Mui-selected:hover': {
            backgroundColor: '#115293',
          },
          '& .MuiPaginationItem-ellipsis': {
            color: '#1976d2',
          },
          '& .MuiPaginationItem-icon': {
            fontSize: '20px',
            color: '#1976d2',
          },
        }}
        
      />
    </Stack>
  );
}
