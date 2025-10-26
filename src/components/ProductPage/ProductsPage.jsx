import React from "react";
import { Grid, Container, Typography } from "@mui/material";

import { plants } from "../../data/plants";
import ProductCard from "../ProductCard";
import { useCart } from "../../context/CartContext";
export default function ProductsPage() {
    const { addToCart } = useCart();
  return (
    <Container sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ color: "#2E8B57", mb: 4 }}
      >
       Air Purify Plants
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plants.map((plant) => (
          <Grid item key={plant.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard plant={plant} onAddToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
