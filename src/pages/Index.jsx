import React, { useState } from "react";
import { Container, Input, Button, VStack, Box, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const [location, setLocation] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleFindLocation = () => {
    if (location) {
      const encodedLocation = encodeURIComponent(location);
      const url = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedLocation}`;
      setMapUrl(url);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Find Phone Location</Text>
        <Input placeholder="Enter phone location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" onClick={handleFindLocation}>
          Find Location
        </Button>
        {mapUrl && (
          <Box width="100%" height="400px" mt={4}>
            <iframe width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src={mapUrl} allowFullScreen></iframe>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
