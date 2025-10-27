import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cartItems,
    totalAmount,
    totalQuantity,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <Box sx={{ bgcolor: "green.50", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="green.800"
          textAlign="center"
          mb={6}
        >
          Your Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography textAlign="center" color="text.secondary">
            Your cart is empty.{" "}
            <Button
              component={Link}
              to="/products"
              sx={{ color: "green.700", textDecoration: "underline" }}
            >
              Go Shopping!
            </Button>
          </Typography>
        ) : (
          <>
            <Stack spacing={3}>
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent
                    sx={{
                      flex: 1,
                      ml: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography fontWeight="600">{item.name}</Typography>
                    <Typography color="green.700">${item.price}</Typography>

                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </Button>
                      <Typography>{item.quantity}</Typography>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                    </Stack>
                  </CardContent>

                  <Button
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    ✕
                  </Button>
                </Card>
              ))}
            </Stack>

            {/* Totals */}
            <Box textAlign="right" mt={4}>
              <Typography fontWeight="bold" color="green.800">
                Total Items: {totalQuantity}
              </Typography>
              <Typography fontWeight="bold" color="green.800">
                Total Cost: ${totalAmount.toFixed(2)}
              </Typography>
            </Box>

            {/* Actions */}
            <Stack direction="row" justifyContent="space-between" mt={4}>
              <Button
                component={Link}
                to="/products"
                variant="outlined"
                color="success"
              >
                Continue Shopping
              </Button>
              <Button variant="contained" color="success">
                Checkout
              </Button>
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}

export default CartPage;
