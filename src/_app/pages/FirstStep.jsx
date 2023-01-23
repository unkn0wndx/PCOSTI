import { Card, Col, Text } from "@nextui-org/react";

export const FirstStep = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text> */}
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
