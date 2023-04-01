import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function SchemeCard({data}) {

  console.log(data)

  return (
    <Card sx={{ width:'100%', maxHeight:'400px', height:'100%'}}>
      <a href={`${data.href}`} target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'black'}}>
      <CardContent>
      <Typography variant="h3" color="text.secondary">
          {data.title}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{mt:1}}
        component="img"
        height="194"
        image={data.src}
        alt={data.src}
      />
      <CardContent>
      
        <Typography variant="body2" color="text.secondary" sx={{textJustify:"center", textAlign:'justify'}}>
          {data.text}
        </Typography>
      </CardContent>
      </a>
    </Card>
  );
}