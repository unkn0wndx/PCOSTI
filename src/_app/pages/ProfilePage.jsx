import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth';

//? Material UI
// import Grid from '@mui/system/Unstable_Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box"
import { TripCard } from "./TripCard";
import { Grid } from "@nextui-org/react";

export const ProfilePage = () => {

  // const { user } = useContext(AuthContext)

  // const [open, setOpen] = useState(user.newUser);

  return (
    <Box css={{ mt: "$8" }}>
      <Text h2 className="text-center">Lorem ipsum dolor sit amet</Text>
      <Spacer y={1} />
      <Text size="$lg">
        Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh
        sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada
        proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra
        tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque
        gravida in.
      </Text>
      <Spacer y={1} />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <TripCard url="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80" />
        </Grid>
        <Grid xs={6} md={6}>
          <TripCard url="https://images.unsplash.com/photo-1520974822564-9b91874afe9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Grid>
        <Grid xs={6} md={6}>
          <TripCard url="https://images.unsplash.com/photo-1560424730-ec1c186a7573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Text size="$lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in
        fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
        egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa
        placerat duis ultricies.
      </Text>
      <Spacer y={1} />
      <Text size="$lg">
        Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
        Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
        consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
        pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
        ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
        dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
        tellus orci ac.
      </Text>
      <Spacer y={1} />
    </Box>
  )
}
