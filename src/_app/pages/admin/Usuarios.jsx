import { useFetch } from '../../../hook';
import { url } from '../../../config';
import { Steeper } from "./Steeper"
import { FirstStep } from '../FirstStep'
import { Card, Grid, Text, Col } from '@nextui-org/react';
import SecondStep from '../SecondStep';
import ThirdStep from '../ThirdStep';

export const Usuarios = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`)

  const { message } = data;

  return (
    <>
      <Grid.Container css={{ py: 25 }} justify="center">
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        {/* <MesaDeTrabajo message={message} /> */}
        <Steeper />
        {/* <Grid xs={12} sm={7}> */}
        {/* </Grid> */}
        <Card css={{ mt: 27 }}>
          <Card.Image
            src="https://miro.medium.com/max/3332/0*yPSQlTHRvLaIVBcG.jpg"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
          />
        </Card>
      </Grid.Container>
    </>
  )
}
