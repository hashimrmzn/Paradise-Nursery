import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ plant, onAddToCart }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
        },
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={plant.name}
        height="220"
        image={plant.image}
        sx={{ objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />

      {/* Product Info */}
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, color: "#2E8B57" }}
        >
          {plant.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", minHeight: 60 }}>
          {plant.description}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, fontWeight: "bold", color: "#1b5e20" }}
        >
          ${plant.price.toFixed(2)}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ justifyContent: "center", mb: 1 }}>
        <Button
          variant="contained"
          size="medium"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onAddToCart(plant)}
          sx={{
            backgroundColor: "#2E8B57",
            color: "white",
            borderRadius: "25px",
            textTransform: "none",
            px: 3,
            "&:hover": { backgroundColor: "#256B45" },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
