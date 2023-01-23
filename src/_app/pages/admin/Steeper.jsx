import { Pagination } from "@mui/material";
import { Grid } from "@nextui-org/react";
import * as React from 'react';

export function Steeper() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <Grid css={{ pt: 15 }}>
      {/* <Pagination rounded total={7} initialPage={1} size="xl" controls={false} onChange={handleChange} /> */}
      <Pagination count={20} size="large" color="primary" hidePrevButton hideNextButton siblingCount={10} boundaryCount={10} page={page} onChange={handleChange} />
    </Grid>
  )
}
