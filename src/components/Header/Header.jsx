import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { cartItems } = useCart(); // ✅ use custom hook (not useContext)
  const location = useLocation();

  // 🧮 Calculate total quantity
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2E8B57" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 🌿 Brand Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Paradise Nursery
        </Typography>

        {/* 🧭 Navigation Buttons */}
        <Box>
          {location.pathname !== "/products" && (
            <Button
              component={Link}
              to="/products"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                mr: 2,
                "&:hover": { color: "#cce8cc" },
              }}
            >
              Shop
            </Button>
          )}
          {location.pathname !== "/" && (
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { color: "#cce8cc" },
              }}
            >
              Home
            </Button>
          )}
        </Box>

        {/* 🛒 Shopping Cart Icon */}
        <IconButton component={Link} to="/cart" sx={{ color: "white" }}>
          <Badge
            badgeContent={totalItems}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: "0.75rem",
                height: 18,
                minWidth: 18,
              },
            }}
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
