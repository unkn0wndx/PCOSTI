import { Button, Card, Text } from '@nextui-org/react'
import React from 'react'
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import Favorite from '@mui/icons-material/Favorite';
import { Grid } from '@mui/material';

export default function SecondStep() {

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid container className='my-3' spacing={1}>
      <Grid item container xs={12} md={8} spacing={1}>
        <Grid item xs>
          <Text h3>Lorem ipsum dolor sit amet</Text>
        </Grid>
        <Grid item container xs={12} spacing={1}>
          <Grid item container xs={6} md={2} direction='row'>
            <ThumbUpOutlined color='success' />
            <Text h5 css={{ ml: 5 }} weight='normal'>356</Text>
          </Grid>
          <Grid item container xs={6} md={2} direction='row'>
            <ThumbDownOutlined color='error' />
            <Text h5 css={{ ml: 5 }} weight='normal'>35</Text>
          </Grid>

          <Grid item container xs={12} md={8} direction='row'>
            <Favorite color='error' />
            <Text h5 css={{ ml: 5 }} weight='normal'>54% de los viajeros lo recomiendan</Text>
          </Grid>
        </Grid>
        <Grid item xs>
          <Text>
            Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh
            sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada
            proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra
            tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque
            gravida in.
          </Text>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={4} spacing={1} className='mt-4'>
        <Grid item container direction='column' justify='center' alignItems='center' xs={12} md={12}>
          <Text h6>
            de
          </Text>
          <Text h4 weight={'bold'}>
            $500.00
          </Text>
          <Text h6 >
            Por adulto
          </Text>
          <Button color="primary" auto rounded size='lg'>
            Consultar disponibilidad
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
