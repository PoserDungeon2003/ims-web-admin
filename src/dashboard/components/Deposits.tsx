import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

type DepositsProps = {
  completionRate?: number
}

export default function Deposits({ completionRate }: DepositsProps) {
  return (
    <React.Fragment>
      <Title>Task Completion Rate</Title>
      <Typography component="p" variant="h4">
        {(completionRate || 1) * 100}%
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}