// src/data/plants.js (or wherever you store it)

export const plants = [
  { 
    id: 1, 
    name: "Snake Plant", 
    price: 15, 
    category: "Indoor", 
    image: `${import.meta.env.BASE_URL}assets/snake.jpg`,
    description: "The Snake Plant is a hardy indoor favorite known for its upright, sword-like leaves and excellent air-purifying qualities. Perfect for beginners, it thrives even in low light and needs minimal watering."
  },
  { 
    id: 2, 
    name: "Peace Lily", 
    price: 20, 
    category: "Indoor", 
    image: `${import.meta.env.BASE_URL}assets/peace.jpg`,
    description: "The Peace Lily adds elegance to any room with its glossy leaves and white blooms. It naturally filters indoor air and symbolizes peace and tranquility — a perfect addition to home or office spaces."
  },
  { 
    id: 3, 
    name: "Succulent Mix", 
    price: 10, 
    category: "Succulent", 
    image: `${import.meta.env.BASE_URL}assets/succulent.jpg`,
    description: "A charming collection of mixed succulents in various shapes and colors. These low-maintenance plants are ideal for desks, windowsills, or modern decor, requiring very little water and care."
  },
  { 
    id: 4, 
    name: "Aloe Vera", 
    price: 12, 
    category: "Succulent", 
    image: `${import.meta.env.BASE_URL}assets/aloe.jpg`,
    description: "Aloe Vera is a popular succulent known for its healing gel and natural aesthetic. Easy to grow, it thrives in bright light and adds a fresh, medicinal touch to your home garden."
  },
  { 
    id: 5, 
    name: "Money Plant", 
    price: 18, 
    category: "Air Purifier", 
    image: `${import.meta.env.BASE_URL}assets/money.jpg`,
    description: "Believed to bring prosperity and good luck, the Money Plant features beautiful heart-shaped leaves. It’s an excellent natural air purifier and thrives both in soil and water."
  },
  { 
    id: 6, 
    name: "Areca Palm", 
    price: 25, 
    category: "Air Purifier", 
    image: `${import.meta.env.BASE_URL}assets/areca.jpg`,
    description: "The Areca Palm adds a tropical vibe with its soft, arching fronds. It’s one of the best air-purifying plants, creating a relaxing environment while improving indoor air quality."
  },
];
