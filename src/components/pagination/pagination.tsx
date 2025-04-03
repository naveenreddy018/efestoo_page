"use client"

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './pagination.module.css';

export default function PaginationRounded() {
  return (
    <Stack className={styles.paginationContainer} spacing={2}>
      <Pagination
        count={8}
        shape="rounded"
        // variant="outlined" 
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '18px',
            borderColor: '#1976d2',
            color: '#1976d2',
            margin: '0 6px',
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
            fontSize: '24px',
            color: '#1976d2',
          },
          '& .MuiPaginationItem-previousNext': {
            margin: '0 12px',
          },
        }}
        className={styles.pagination}
      />
    </Stack>
  );
}
