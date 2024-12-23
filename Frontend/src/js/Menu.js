const Dishes = [
    {
        category: "continental", subcategory: {
            Soup: [
                {
                    id: "coso001",
                    name: "Cream Of Mushroom Soup",
                    price: 120,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: "A THICK CREAMY SOUP MADE WITH FRESH MASHROOM & HERBS."
                },
                {
                    id: "coso002",
                    name: "Cream OF Chicken Soup",
                    price: 140,
                    img: "/Dishes_photos/cream of chicken.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: "A THICK CREAMY SOUP MADE WITH CHICKEN STOCK & SPICES."
                }
            ],
            Salad: [
                {
                    id: "cosa001",
                    name: "Greek Salad",
                    price: 150,
                    img: "/Dishes_photos/Green_salad.jpg",
                    type: "veg",
                    description: "SERVED WITH SLICED FRESH VEGGIES, LIKE CHERRY TOMATO, CUCUMBER, RED & YELLOW CAPSICUM, LETTUCE, MINT, ONION SLICES, OLIVES, TOPPED WITH FETA CHEESE & SERVED WITH VINAIGRETTE DRESSING."
                },
                {
                    id: "cosa002",
                    name: "Mix Salad With Pomogranates",
                    price: 170,
                    img: "/Dishes_photos/Mix salad  (1).jpg",
                    type: "veg",
                    description: "CRISPY FRIED CHICKEN WINGS TOSSED WITH HONEY GLAZE BARBECUE SAUCE, SERVED(8 PCS)."
                },
                {
                    id: "cosa003",
                    name: "Caesar Salad With Chicken",
                    price: 170,
                    img: "/Dishes_photos/Caesar salad with chicken.jpg",
                    type: "nonveg",
                    description: "MADE WITH LETTUCE, CHICKEN CROUTONS, CHEESE AND CAESAR DRESSING."
                }
            ],
            Starter: [
                {
                    id: "cost001",
                    name: "French Fries",
                    price: 140,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "THIN STRIPS OF POTATO DEEP FRIED, SERVED WITH DIPPING MAYO"
                },
                {
                    id: "cost002",
                    name: "Chessy French Fries",
                    price: 170,
                    img: "/Dishes_photos/CHEESY FRENCH FRIES.jpg",
                    type: "veg",
                    genre: "fries",
                    description: "DEEP FRIED FRENCH FRIES GARNISHED WITH MELTED CHEESE."
                },
                {
                    id: "cost003",
                    name: "Potato Wedges",
                    price: 150,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "WEDGES SHAPED POTATO WHICH IS UNPEELED AND DEEP FRIED."
                },
                {
                    id: "cost004",
                    name: "BBQ Chicken Wings",
                    price: 230,
                    img: "/Dishes_photos/BBQ chicken wing.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: " CRISPY FRIED CHICKEN WINGS TOSSED WITH HONEY GLAZE BARBECUE SAUCE, SERVED(8 PCS)."
                },
                {
                    id: "cost005",
                    name: "Chickend Nuggets",
                    price: 190,
                    img: "/Dishes_photos/Chicken nuggets.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "IT'S A PIECE OF DEBONED CHICKEN THAT IS BREADDED AND DEEP FRIED, SERVED WITH DEPPING MAYO."
                },
                {
                    id: "cost006",
                    name: "Crspy Sardine",
                    price: 150,
                    img: "/Dishes_photos/Crispy sardine  (1).jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "TARLE FISH MARINATED WITH FRESH HERBS & COATED WITH PANKO BREAD CRUMBS & SHALLOW FRIED, SERVED WITH GARLIC MAYO"
                },
                {
                    id: "cost007",
                    name: "Crispy Calamari",
                    price: 285,
                    img: "/Dishes_photos/Calm.jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "MARINATE BATTER SQUID FRIED AND SERVED WITH MAYO."
                },
                {
                    id: "cost008",
                    name: "Onion Rings",
                    price: 110,
                    img: "/Dishes_photos/Onion rings  (2).jpg",
                    type: "veg",
                    genre: "fries",
                    description: "ONION RINGS MARINATED WITH HERBS & COATED WITH PANCO BREAD CRUMBS, THEN DEEP FRIED & SERVED WITH MAYO."
                },
                {
                    id: "cost009",
                    name: "Chesse Stuffed Button Mushroom ",
                    price: 230,
                    img: "/Dishes_photos/Cheese stuffed button mushroom.jpg",
                    type: "veg",
                    genre: "fries",
                    description: "CHEESE & VEGGIE STUFFED IN FRESH MASHROOM, BREADED FRIED AND SERVED WITH GARLIC MAYONESE."
                },
                {
                    id: "cost010",
                    name: "Falafel",
                    price: 140,
                    img: "/Dishes_photos/FALAFAL-1 (1).jpg",
                    type: "nonveg",
                    genre: "fries",
                    description: "FALAFAL IS MEDITERRANEAN DISH MADE FROM THE MIXTURE OF CHEAK PEAS FRESH CORIENDER BELL PEPPER, GREEN CHILLY, DEEP FRIED, SERVED WITH YOGURT SAUCE"
                },
                {
                    id: "cost011",
                    name: "Chesse Corn Balls",
                    price: 190,
                    img: "",
                    type: "veg",
                    genre: "fries",
                    description: "FRESH CORN, GRATED POTATO, TENDER AND CHEESY INSIDE, BREADED AND FRIED, CRUNCHY AND CRISPY SERVED WITH MAYO DIPPING."
                }
            ],
            Sandwich: [
                {
                    id: "cosa001",
                    name: "Veg club Sandwich",
                    price: 140,
                    img: "/Dishes_photos/Veg club sandwich.jpg",
                    type: "veg",
                    genre: "sandwich",
                    description: "CONSISTING OF MIX VEG FILLING BETWEEN THE BREAD SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa002",
                    name: "Chicken Club Sandwich",
                    price: 160,
                    img: "Dishes_photos/Chicken club sandwich  (1).jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: " MIXTURE OF VEG, EGG AND CHICKEN FILLING BETWEEN THE BREAD AND SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa003",
                    name: "chicken Grilled Sandwich",
                    price: 150,
                    img: "/Dishes_photos/GRILLED CHICKEN SANDWICH.jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: "MIXTURE OF SHREDDED CHICKEN, FRESH LETTUCE, MAYO, CHEESE BETWEEN & GRILLED BREAD, SERVED WITH FRENCH FRIES AND SALAD."
                },
                {
                    id: "cosa004",
                    name: "Egg Sandwich",
                    price: 140,
                    img: "/Dishes_photos/egg sandwich.jpg",
                    type: "nonveg",
                    genre: "sandwich",
                    description: "MIXTURE OF BUTTER, GRATED BOILED EGG,FRESH LETTUCE, MAYONESE, CHEESE BETWEEN THE GRILLED BREAD, SERVED WITH FRENCH FRIES & SALAD"
                }
            ],
            Pizza: [
                {
                    id: "copi001",
                    name: "Mix Veg Pizza ( 8 Inches)",
                    price: 240,
                    img: "/Dishes_photos/Mix veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH FRESH VEGETABLE. (8 INCHES)"
                },
                {
                    id: "copi002",
                    name: "Chicken Pizza (8 Inches )",
                    price: 270,
                    img: "/Dishes_photos/Chicken pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH BONELESS CHICKEN & VEGETABLE. (8 INCHES) "
                },
                {
                    id: "copi003",
                    name: "Sea Food Pizza (8 Inches)",
                    price: 310,
                    img: "/Dishes_photos/Seafood pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUIDS & VEGETABLE. (8 INCHES)"
                },
                {
                    id: "copi004",
                    name: "Chefs Special Veg Pizza (8 Inches)",
                    price: 270,
                    img: "/Dishes_photos/Chef special veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED BAYBYCORN RED YELLOW CAPSICUM, MASHROOM. (8 INCHES) "
                },
                {
                    id: "copi005",
                    name: "Chefs Special non-Veg Pizza (8 inches)",
                    price: 290,
                    img: "/Dishes_photos/CHEF_S SPE. NON VEG PIZZA.jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUID, CHICKEN. (8 INCHES)"
                },
                {
                    id: "copi006",
                    name: "Mix Veg Pizza (8 Inches)",
                    price: 180,
                    img: "/Dishes_photos/Mix veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH FRESH VEGETABLE. (6 INCHES)"
                },
                {
                    id: "copi007",
                    name: "Chicken Pizza (6 Inches)",
                    price: 210,
                    img: "/Dishes_photos/Chicken pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH BONELESS CHICKEN & VEGETABLE. (6 INCHES) "
                },
                {
                    id: "copi008",
                    name: 'Sea Food Pizza (6 Inches)',
                    price: 240,
                    img: "/Dishes_photos/Seafood pizza  (2).jpg",
                    type: "nonveg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUIDS & VEGETABLE. (6 INCHES)"
                },
                {
                    id: "copi009",
                    name: "Chefs Special Veg Pizza (6 Inches)",
                    price: 210,
                    img: "/Dishes_photos/Chef special veg pizza  (2).jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED BAYBYCORN RED YELLOW CAPSICUM, MASHROOM. (6 INCHES)"
                },
                {
                    id: "copi010",
                    name: "Chefs Special Non-Veg Pizza (6 Inches)",
                    price: 240,
                    img: "/Dishes_photos/CHEF_S SPE. NON VEG PIZZA.jpg",
                    type: "veg",
                    genre: "pizza",
                    description: "IT'S A HOME-MADE DOUGH THIN-CRUST PIZZA AND TOPPED WITH HOME MADE TOMATO SAUCE, MOZZARELLA CHEESE, TOPPED WITH PRAWNS, SQUID, CHICKEN. (6 INCHES) "
                }
            ],
            Pasta: [
                {
                    id: "copa001",
                    name: "Lasanga (Veg)",
                    price: 260,
                    img: "/Dishes_photos/Veg lasagna  (2).jpg",
                    type: "veg",
                    genre: "pasta",
                    description: "LASAGNA IS A BAKED PASTA, STUFFED WITH FRESH VEGGIES, SPINACH, BEANS, CARROT, GREEN PEAS & CHEESE, SERVED WITH TOMATO SAUCE."
                },
                {
                    id: "copa001",
                    name: "Lasanga (Chicken)",
                    price: 340,
                    img: "/Dishes_photos/Chicken lasagna.jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "LASAGNA IS A BAKED PASTA, STUFFED WITH CHICKEN MINCED & CHEESE, SERVED WITH TOMATO SAUCE."
                },
                {
                    id: "copa002",
                    name: "Pasta (Veg)",
                    price: 190,
                    img: "/Dishes_photos/VEG PASTA.jpg",
                    type: "veg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH BROCCOLI, BELL PEPPERS, CARROT, MUSHROOM & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                },
                {
                    id: "copa003",
                    name: 'pasta (Chicken)',
                    price: 240,
                    img: "/Dishes_photos/Penne pasta chicken  (2).jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH BONELESS CHICKEN & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                },
                {
                    id: "copa004",
                    name: "Sea Food Pasta",
                    price: 290,
                    img: "/Dishes_photos/Seafood Pasta.jpg",
                    type: "nonveg",
                    genre: "pasta",
                    description: "PASTA COOKED WITH SQUIDS, PRAWNS & CHEESE, SERVED WITH CHOICE OF SELECTED SAUCE & PASTA."
                }
            ],
            Burger: [
                {
                    id: "cobu001",
                    name: "Veg Burger",
                    price: 180,
                    img: "",
                    type: "veg",
                    genre: "burger",
                    description: "SUPER CRISPY VEGGIE PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH ONIONS TOMATOES LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
                {
                    id: "cobu002",
                    name: "Paneer Burger",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "burger",
                    description: "SUPER CRISPY PANEER PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH ONIONS TOMATOES LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
                {
                    id: "cobu003",
                    name: "Chicken Burger",
                    price: 250,
                    img: "/Dishes_photos/Chicken burger.jpg",
                    type: "nonveg",
                    genre: "burger",
                    description: "SUPER CRISPY CHICKEN PATTY LOADED INTO A SOFT BUTTER TOSSED BUNS TOPPED WITH SUNNY SIDE EGG, ONIONS, TOMATOES, LETTUCE & CREAMY DELICIOUS DRESSING, SERVED WITH FRENCH FRIES AND COLESLAW SALAD."
                },
            ],
            Shawarma: [{
                id: "cosh001",
                name: "Chicken Shawarma (With French Fries & Salad)",
                price: 170,
                img: "/Dishes_photos/Chicken shawarma  (2).jpg",
                type: "nonveg",
                genre: "shawarma",
                description: "BONELSS CHICKEN MARINATED INTO SHAWARMA SPICES COOKED IN TANDOORI OVEN, WRAPPED WITH ROTI, SERVED WITH FRENCH FRIES & SALAD."
            },
            {
                id: "cosh002",
                name: "Falafel Shawarma (With French Fries & Salad)",
                price: 130,
                img: "/Dishes_photos/Falafel shawarma  (2).jpg",
                type: "veg",
                genre: "shawarma",
                description: "FALAFAL & CHEESE WRAPPED IN TORTILA BREAD, SERVED WITH FRENCH FRIES & SALAD."
            },
            {
                id: "cosh003",
                name: "Paneer Shawarma (With French Fries)",
                price: 140,
                img: "/Dishes_photos/Paneer shawarma.jpg",
                type: "veg",
                genre: "shawarma",
                description: "PANEER MARINATED INTO SHAWARMA SPICES COOKED IN TANDOORI OVEN, WRAPPED WITH ROTI, SERVED WITH FRENCH FRIES & SALAD."
            },
            ],
        },
    },
    {
        category: "asian", subcategory: {
            Momos: [
                {
                    id: "asmo001",
                    name: "Steamed Momos",
                    price: 170,
                    img: "/Dishes_photos/Veg momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: "MOMOS ARE STEAM FILLED DUMPLINGS, VEG MINCE FLAVOURED WITH SOYA SAUCE, CHILLIES, PEPPER SOME VEGGIES & ARE STUFFED INSIDE WITH THIN FLOUR DOUGH AND STEAMED."
                },
                {
                    id: "asmo002",
                    name: "Steamed Momos Chicken",
                    price: 190,
                    img: "/Dishes_photos/Chicken steamed momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: " MOMOS ARE STEAM FILLED DUMPLINGS, CHICKEN MINCE FLAVOURED WITH SOYA SAUCE, CHILLIES, PEPPER SOME VEGGIES & ARE STUFFED INSIDE WITH THIN FLOUR DOUGH AND STEAMED."
                },
                {
                    id: "asmo003",
                    name: "Pan Fried Momos",
                    price: 170,
                    img: "/Dishes_photos/Pan fried momos veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: "MOMOS ARE PAN FRIED & TOSSED IN MANCHURIAN SAUCE, SERVED WITH SOYA SAUCE. (6 PCS)"
                },
                {
                    id: "asmo004",
                    name: "Pan Fried Momos Chicken",
                    price: 190,
                    img: "/Dishes_photos/Pan fried momos chicken  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: " MOMOS ARE PAN FRIED TOSSED IN MANCHURIAN SAUCE, SERVED WITH SOYA SAUCE. (6 PCS) "
                },
                {
                    id: "asmo005",
                    name: "Fried Momos Veg",
                    price: 170,
                    img: "/Dishes_photos/Pan fried momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: "MOMOS ARE DEEP FRIED & SERVED WITH SCHEZWAN SAUCE. (6 PCS)"
                },
                {
                    id: "asmo006",
                    name: "Fried Momos Chicken",
                    price: 190,
                    img: "/Dishes_photos/Pan fried momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: "MOMOS ARE DEEP FRIED & SERVED WITH SCHEZWAN SAUCE. (6 PCS)"
                },
                {
                    id: "asmo007",
                    name: "Kurkure Momos veg",
                    price: 180,
                    img: "/Dishes_photos/Kurkure momos veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: " MOMOS ARE COATED IN CRISPY CORNFLAKES & DEEP FRIED, SERVED WITH MAYONESE. (6 PCS)"
                },
                {
                    id: "asmo008",
                    name: "Kurkure Momos Chicken",
                    price: 210,
                    img: "/Dishes_photos/Chicken kurkure momos.jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: " MOMOS ARE COATED IN CRISPY CORNFLAKES & DEEP FRIED, SERVED WITH MAYONESE. (6 PCS)"
                },
                {
                    id: "asmo009",
                    name: "Schezwan Tossed Momos(Veg)",
                    price: 180,
                    img: "/Dishes_photos/Schezwan tossed momo veg.jpg",
                    type: "veg",
                    genre: "momos",
                    description: "MOMOS ARE TOSSED IN SPICY SCHEZWAN SAUCE, SERVED WITH SCHEZWAN SAUCE. (6 PCS)"
                },
                {
                    id: "asmo010",
                    name: "Schezwan Tossed Momos Chicken",
                    price: 210,
                    img: "/Dishes_photos/Chicken schezwan tossed momos  (2).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: "MOMOS ARE TOSSED IN SPICY SCHEZWAN SAUCE, SERVED WITH SCHEZWAN SAUCE. (6 PCS)"
                },
                {
                    id: "asmo011",
                    name: "Butter Garlic Momos",
                    price: 170,
                    img: "/Dishes_photos/Veg butter garlic momos  (2).jpg",
                    type: "veg",
                    genre: "momos",
                    description: " MOMOS ARE TOSSED IN BUTTER, CREAM & GARLIC, SERVED WITH MAYONESE. (6 PCS)"
                },
                {
                    id: "asmo012",
                    name: "Butter Garlic Momos Chicken",
                    price: 210,
                    img: "/Dishes_photos/BUTTER GARLIC MOMOS (CHICKEN).jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: "MOMOS ARE TOSSED IN BUTTER, CREAM & GARLIC, SERVED WITH MAYONESE. (6 PCS)"
                },
                {
                    id: "asmo013",
                    name: "Momos Platter Veg",
                    price: 330,
                    img: "/Dishes_photos/MOMO PAlTTER VEG.png",
                    type: "veg",
                    genre: "momos",
                    description: "VEG MOMO PLATTER 2 PIECES OF EACH FLAVOUR, BUTTER GARLIC, SCHEZWAN TOSSED, KURKURE, STEAM, PAN FRIED. (10 PC)"
                },
                {
                    id: "asmo014",
                    name: "Momos Platter Chicken",
                    price: 390,
                    img: "/Dishes_photos/MOMO PLATTER CHICKEN.png",
                    type: "nonveg",
                    genre: "momos",
                    description: "CHICKEN MOMO PLATTER 2 PIECES OF EACH FLAVOUR, BUTTER GARLIC, SCHEZWAN TOSSED, KURKURE, STEAM, PAN FRIED. (10 PCS)"
                },
                {
                    id: "asmo015",
                    name: "Panner Momo",
                    price: 170,
                    img: "/Dishes_photos/PANEER STEAMED MOMO.jpeg",
                    type: "veg",
                    genre: "momos",
                    description: " MOMOS STUFFED WITH FRESH PANEER MINCED, CHOPPED ONION & GARLIC, IT'S STEAMED IN STEAMMER THEN SERVED WITH SCHEZWAN CHUTNEY.(6 PCS)"
                },
                {
                    id: "asmo016",
                    name: "Tandoori Momos Veg",
                    price: 180,
                    img: "/Dishes_photos/TANDOORI MOMOS VEG.jpeg",
                    type: "veg",
                    genre: "momos",
                    description: "VEG MOMOS MARINATED IN TANDOORI MASALA GRILLED IN TANDOOR, SERVED WITH MINT CHUTNEY & SALAD. (8 PCS)"
                },
                {
                    id: "asmo017",
                    name: "Tandoori Momos Chicken",
                    price: 210,
                    img: "/Dishes_photos/Tandoori Momos chicken.jpg",
                    type: "nonveg",
                    genre: "momos",
                    description: "CHICKEN MOMOS MARINATED IN TANDOORI MASALA GRILLED IN TANDOOR, SERVED WITH MINT CHUTNEY & SALAD. (8 PCS) "
                }
            ]
        }
    },
    {
        category: "chinese", subcategory: {
            Soup: [
                {
                    id: "chosoup001",
                    name: "Veg Manchow Soup ",
                    img: "/Dishes_photos/Veg manchow soup.jpg",
                    price: 100,
                    type: "veg",
                    genre: "soup",
                    description: " CHINESE VEGETERIAN SOUP MADE WITH MIXED VEGETABLES, GARLIC, GINGER, SOYA SAUCE, GROUND PEPPER & FEW OTHER PANTRY INGREDIENTS, THIS SUPER FLAVORFUL MANCHOW SOUP IS SERVED WITH CRISPY FRIED NOODLES."
                },
                {
                    id: "chosoup002",
                    name: "Chicken Manchow Soup",
                    price: 110,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: "CHINESE CHICKEN MANCHOW SOUP MADE WITH VEGGIES AND CHICKEN TOPPED WITH CRISPY FRIED NOODLES."
                },
                {
                    id: "chosoup003",
                    name: "Veg Sweet Corn Soup",
                    price: 100,
                    img: "/Dishes_photos/Veg sweet corn soup.jpg",
                    type: "veg",
                    genre: "soup",
                    description: " INDO CHINESE STYLE SOUP MADE WITH MIXED VEGETABLES, SWEET CORN KERNELS, HERBS AND SPICES."
                },
                {
                    id: "chosoup004",
                    name: "Chicken Sweet Corn Soup",
                    price: 120,
                    img: "/Dishes_photos/Chicken sweet corn soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: "LITTLE CHUNKS OF CHICKEN COOKED WITH SWEETCORN & STOCK."
                },
                {
                    id: "chosoup005",
                    name: "Veg Hot & Sour Soup",
                    price: 100,
                    img: "/Dishes_photos/Tom yum veg soup.jpg",
                    type: "veg",
                    genre: "soup",
                    description: " IT'S INDO CHINESE CUISINE MADE WITH LOTS OF FRESH VEGETABLES & VIBRANT SPICES, IT'S A SPICY SOUR AND HOT"
                },
                {
                    id: "chosoup006",
                    name: "Chicken Hot & Sour Soup",
                    price: 100,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: " IT'S INDO CHINESE CUISINE MADE WITH LOTS OF FRESH VEGETABLES, CHICKEN & VIBRANT SPICES, IT'S A SPICY SOUR AND HOT"
                },
                {
                    id: "chosoup007",
                    name: "Veg Clear Soup",
                    price: 80,
                    img: "/Dishes_photos/Clear Soup Veg-1.jpg",
                    type: "veg",
                    genre: "soup",
                    description: "SOUP MADE BY SIMMERING VEGIES STOCK"
                },
                {
                    id: "chosoup008",
                    name: "Chicken Clear Soup",
                    price: 100,
                    img: "",
                    type: "nonveg",
                    genre: "soup",
                    description: "SOUP MADE BY SIMMERING VEGIES & CHICKEN STOCK"
                },
                {
                    id: "chosoup009",
                    name: "sea Food Tom Yum Soup",
                    price: 160,
                    img: "/Dishes_photos/Tom yum seafood soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: " TOM YUM SOUP IS SPICY THAI SOUP MADE WITH COCONUT CREAM"
                },
            ],
            Starter: [
                {
                    id: "chostar001",
                    name: "Chicken 65",
                    price: 220,
                    img: "/Dishes_photos/Chicken 65  (1).jpg",
                    type: "nonveg",
                    description: " IT'S A BITE SIZE PIECES OF CHICKEN COATED IN SPICY MASALA MARINATED WITH CHILI POWDER, TURMERIC, GARAM MASALA POWDER, LEMON JUICE, GINGER, GARLIC, EGGS, RICE FLOUR THEN DEEP FRIED, SERVED WITH SCHEZWAN SAUCE"
                },
                {
                    id: "chostar002",
                    name: "Chicken Chilly",
                    price: 220,
                    img: "/Dishes_photos/Chicken chilli fry.jpg",
                    type: "nonveg",
                    description: " BONELESS CHICKEN IS MARINATED IN CHINESE SAUCES, FRIED UNTIL CRISPY, THIS IS STIRRED FRIED WITH LOTS OF GINGER, GARLIC, ONIONS, BELL PEPPERS AND SAUCES"
                },
                {
                    id: "chostar003",
                    name: "Crispy Chicken",
                    price: 240,
                    img: "/Dishes_photos/Crispy chicken  (2).jpg",
                    type: "nonveg",
                    description: " SHREDDED CHICKEN BREAST BONELESS COATED WITH CORN STARCH, FLOUR & BAKING SODA, TOSSED WITH SCHEZWAN SAUCE & SEASONING"
                },
                {
                    id: "chostar004",
                    name: "Honey Chicken",
                    price: 240,
                    img: "/Dishes_photos/Honey chicken  (1).jpg",
                    type: "nonveg",
                    description: "THIS HONEY CHICKEN IS CRISPY PIECES OF CHICKEN BREAST THAT ARE FRIED TO GOLDEN BROWN PERFECTION, THEN TOSSED IN A SWEET AND SAVORY HONEY SAUCE"
                },
                {
                    id: "chostar005",
                    name: "Chicken Dry Fry",
                    price: 230,
                    img: "",
                    type: "nonveg",
                    description: "DRY FRY IT'S SIMILAR TO CHICKEN PAKODA WITH BONE, MIXED WITH CHILI POWDER, LEMON JUICE, GARAM MASALA THEN DEEP FRIED, GARNISHED WITH CHUTNEY & CHOPPED CORIANDER"
                },
                {
                    id: "chostar006",
                    name: "Chicken Spring Roll",
                    price: 220,
                    img: "/Dishes_photos/Chicken spring roll.jpg",
                    type: "nonveg",
                    description: "PASTRY SHEETS ARE FILLED WITH VEGETABLE, CHICKEN & EGGS, THEN DEEP FRIED SERVED WITH SCHEZWAN SAUCE"
                },
                {
                    id: "chostar007",
                    name: "Chicken Salt & Pepper",
                    price: 240,
                    img: "/Dishes_photos/Chicken salt and papper  (2).jpg",
                    type: "nonveg",
                    description: " CRISPY SEASONED CHICKEN FRIED UP WITH CRUNCHY ONION, SPICES & BLACK PEPPER, SERVED DRY / GRAVY"
                },
                {
                    id: "chostar008",
                    name: "Chicken Manchurian Dry",
                    price: 220,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: " BONELESS FRIED CHICKEN PAKODA SAUTÉ WITH ONION GARLIC, GINGER, CHILLY AND SOYA SAUCE, SERVED DRY"
                },
                {
                    id: "chostar009",
                    name: "Chicken Manchurian Gravy",
                    price: 220,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: " BONELESS FRIED CHICKEN PAKODA SAUTÉ WITH ONION GARLIC, GINGER, CHILLY AND SOYA SAUCE, SERVED GRAVY"
                },
                {
                    id: "chostar010",
                    name: "Golden Fried Prawns",
                    price: 310,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: "GOLDEN FRIED PRAWNS IS THE PERFECT STARTER DISH WITH JUMBO PRAWNS COATED WITH CRISPY GOLDEN BATTER FRIED, SERVED WITH MAYO DIPPING"
                },
                {
                    id: "chostar011",
                    name: "Prawns Chilly Dry",
                    price: 290,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: " PRAWNS IS MARINATED IN CHINESE SAUCES, FRIED UNTIL CRISPY, THIS IS STIRRED FRIED WITH LOTS OF GINGER, GARLIC, ONIONS, BELL PEPPERS AND SAUCES"
                },
                {
                    id: "chostar012",
                    name: "Prawns Chilly Gravy",
                    price: 210,
                    img: "",
                    type: "nonveg",
                    genre: "manchurian",
                    description: " PANEER IS MARINATED IN CHINESE SAUCES, FRIED UNTIL CRISPY, THIS IS STIRRED FRIED WITH LOTS OF GINGER, GARLIC, ONIONS, BELL PEPPERS AND SAUCES"
                },
                {
                    id: "chostar013",
                    name: "Paneer Chilly Dry",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: "PANEER IS MARINATED IN CHINESE SAUCES, FRIED UNTIL CRISPY, THIS IS STIRRED FRIED WITH LOTS OF GINGER, GARLIC, ONIONS, BELL PEPPERS AND SAUCES"
                },
                {
                    id: "chostar014",
                    name: "Paneer Chilly Gravy",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: "PANEER IS MARINATED IN CHINESE SAUCES, FRIED UNTIL CRISPY, THIS IS STIRRED FRIED WITH LOTS OF GINGER, GARLIC, ONIONS, BELL PEPPERS AND SAUCES"
                },
                {
                    id: "chostar015",
                    name: "Paneer Manchurian ",
                    price: 210,
                    img: "/Dishes_photos/Paneer manchurian.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: "CRISPY SEASONED PANEER FRIED UP WITH CRUNCHY ONION, SPICES & BLACK PEPPER, SERVED DRY / GRAVY"
                },
                {
                    id: "chostar016",
                    name: "Veg Crispy",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: "VEG CRISPY IS BASICALLY BATTER FRIED VEGGIES LATER STIR FRIED IN SCHZEWAN SAUCE. CRISPY FRIED VEGETABLES"
                },
                {
                    id: "chostar017",
                    name: "Veg Spring Roll",
                    price: 150,
                    img: "/Dishes_photos/Veg spring roll.jpg",
                    type: "veg",
                    description: "PASTRY SHEETS ARE FILLED WITH VEGETABLE, DEEP FRIED SERVED WITH SCHEZWAN SAUCE"
                },
                {
                    id: "chostar018",
                    name: "Baby Corn Chilly Dry ",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: "CRISPY FRIED BABY CORN SAUTÉ WITH ONION CAPSICUM, CHILLY & CHILI SAUCE, SERVED DRY"
                },
                {
                    id: "chostar019",
                    name: "Baby Corn Chilly Gravy",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: "CRISPY FRIED BABY CORN SAUTÉ WITH ONION CAPSICUM, CHILLY & CHILI SAUCE, SERVED GRAVY"
                },
                {
                    id: "chostar020",
                    name: "Honey Sesame Potato",
                    price: 170,
                    img: "/Dishes_photos/Honeyy sesame potato  (2).jpg",
                    type: "veg",
                    description: " CRISPY CUBES FRIED POTATOES, TOSSED WITH HONEY AND SESAME SEEDS"
                },
                {
                    id: "chostar021",
                    name: "Paneer 65",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: "PANEER CRISPY PAKODA SAUTED WITH INDIAN MIX MASALA LIKE CURRY LEAVES, MUSTARD SEEDS, CURD, CAPSICUM, ONION, SPICY & TANGY, SERVED IN DRY / GRAVY"
                },
                {
                    id: "chostar022",
                    name: "Paneer Salt & Pepper",
                    price: 210,
                    img: "/Dishes_photos/Paneer salt and pepper  (2).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: "CRISPY SEASONED PANEER FRIED UP WITH CRUNCHY ONION, SPICES & BLACK PEPPER, SERVED DRY / GRAVY"
                },
                {
                    id: "chostar023",
                    name: "Veg Manchurian Gravy",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: " VEGIES PAKODA SAUTE WITH ONION GARLIC, GINGER, CHILLY AND SOYA SAUCE, SERVED GRAVY"
                },
                {
                    id: "chostar024",
                    name: "Veg Manchurian Dry",
                    price: 160,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: " VEGIES PAKODA SAUTE WITH ONION GARLIC, GINGER, CHILLY AND SOYA SAUCE, SERVED DRY"
                },
                {
                    id: "chostar025",
                    name: "Gobi Manchurian gravy ",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "manchurian",
                    description: "GOBI MANCHURIAN MADE WITH BATTER COATED, FRIED, CRISPY CAULIFLOWER FLORETS TOSSED IN SPICY, SWEET, HOT AND UMAMI MANCHURIAN SAUCE"
                },
                {
                    id: "chostar026",
                    name: "Gobi Manchurian Dry",
                    price: 160,
                    img: "/Dishes_photos/Gobhi manchurian.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: "GOBI MANCHURIAN MADE WITH BATTER COATED, FRIED, CRISPY CAULIFLOWER FLORETS TOSSED IN SPICY, SWEET, HOT AND UMAMI MANCHURIAN SAUCE"
                },
                {
                    id: "chostar027",
                    name: "Mushroom Chilly Gravy",
                    price: 170,
                    img: "/Dishes_photos/Mushroom chilli gravy.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: "FRESH MUSHROOM PAKODA SAUTE WITH ONION, CAPSICUM & CHILLY"
                },
                {
                    id: "chostar028",
                    name: "Mushroom Chilly Dry",
                    price: 170,
                    img: "/Dishes_photos/Mushroom chilli.jpg",
                    type: "veg",
                    genre: "manchurian",
                    description: "FRESH MUSHROOM PAKODA SAUTE WITH ONION, CAPSICUM & CHILLY"
                },
                {
                    id: "chostar029",
                    name: "Chicken Masala Lollypop",
                    price: 240,
                    img: "/Dishes_photos/MASALA LOLIPOP.jpg",
                    type: "nonveg",
                    genre: "manchurian",
                    description: "FRIED CHICKEN LOLIPOP SAUTE WITH SCHEZWAN SAUCE"
                }
            ],
            Rice: [
                {
                    id: "chorice001",
                    name: "Veg Combination Fried Rice",
                    price: 150,
                    img: "/Dishes_photos/VEG COMBINATION FRIED RICE.jpg",
                    type: "veg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE AND NOODLES COOKED TOGETHER IN A WOK WITH VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH HOT GARLIC SAUCE"
                },
                {
                    id: "chorice002",
                    name: "Veg Fried Rice",
                    price: 140,
                    img: "/Dishes_photos/Veg fried rice  (1).jpg",
                    type: "veg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE COOKED TOGETHER IN A WOK WITH VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH HOT GARLIC SAUCE"
                },
                {
                    id: "chorice003",
                    name: "Chicken Fried Rice",
                    price: 180,
                    img: "/Dishes_photos/Chicken fried rice  (1).jpg",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE COOKED TOGETHER IN A WOK WITH CHICKEN & EGG VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH HOT GARLIC SAUCE"
                },
                {
                    id: "chorice004",
                    name: 'Egg Fried Rice',
                    price: 150,
                    img: "/Dishes_photos/Egg fried  rice.jpg",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE COOKED TOGETHER IN A WOK WITH EGG VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH HOT GARLIC SAUCE"
                },
                {
                    id: "chorice005",
                    name: "Veg Schezwan Fried Rice",
                    price: 140,
                    img: "/Dishes_photos/VEG Schezwan fried rice.jpg",
                    type: "veg",
                    genre: "fried rice",
                    description: " STIRRED FRIED RICE COOKED TOGETHER IN A SEZWAN SAUCE IN A WOK WITH VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH GARLIC SAUCE"
                },
                {
                    id: "chorice006",
                    name: "Chicken Schezwan Fried Rice",
                    price: 190,
                    img: "",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE & CHICKEN COOKED TOGETHER IN A SEZWAN SAUCE IN A WOK WITH VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH GARLIC SAUCE"
                },
                {
                    id: "chorice007",
                    name: "Chefs Special Veg Fried Rice",
                    price: 170,
                    img: "",
                    type: "veg",
                    genre: "fried rice",
                    description: " SPECIAL RECIPE FROM OUR CHEF, RICE WITH BABY CORN, MUSHROOM, PANEER, BELL PEPPER, BROCCOLI & LITTLE TOUCH WITH SCHEZWAN SAUCE"
                },
                {
                    id: "chorice008",
                    name: "Chefs Special non-Veg Fired Rice ",
                    price: 210,
                    img: "/Dishes_photos/Chef special fried rice.jpg",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "SPECIAL RECIPE FROM OUR CHEF, RICE WITH PRAWNS, SQUIDS, EGGS & LITTLE TOUCH WITH SCHEZWAN SAUCE"
                },
                {
                    id: "chorice009",
                    name: "Mix Seafood Fried Rice",
                    price: 250,
                    img: "/Dishes_photos/MIX SEAFOOD FRIED RICE NON VEG.jpeg",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "STIRRED FRIED RICE COOKED TOGETHER IN A WOK WITH SEAFOOD (SQUID, PRAWNS) VEGETABLE, SOYA SAUCE & GREEN ONION. SERVED WITH HOT GARLIC SAUCE"
                },
                {
                    id: "chorice010",
                    name: "Tripple Schezwan Chicken Fried Rice",
                    price: 250,
                    img: "/Dishes_photos/TRIPPLE CHICKEN SCHEZWAN FRIED RICE.jpg",
                    type: "nonveg",
                    genre: "fried rice",
                    description: " RICE & NOODLE COOKED WITH STIRRED FRIED VEGIES & CHICKEN, EGG SEASONED WITH SPLASH OF SAUCES VENIGER & BLACK PEPPER. SERVED WITH CHICKEN GRAVEY AND FRIED EGG AS A GARNISH"
                },
            ],
            Noodles: [
                {
                    id: "chonoodles001",
                    name: "Veg Noodles",
                    price: 140,
                    img: "/Dishes_photos/Veg  hakka noodles  (3).jpg",
                    type: "veg",
                    genre: "noodles",
                    description: "VEGETABLE NOODLES COOKED WITH STIRRED FRIED VEGIES, SEASONED WITH SPLASH OF SAUCES VENIGER & BLACK PEPPER. SERVED WITH SEZWAN SAUCE"
                },
                {
                    id: "chonoodles002",
                    name: "Chicken Noodles",
                    price: 180,
                    img: "/Dishes_photos/Chicken  hakka nooldes.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: "NOODLES COOKED WITH STIRRED FRIED VEGIES, & CHICKEN, EGG SEASONED WITH SPLASH OF SAUCES VENIGER & BLACK PEPPER. SERVED WITH SEZWAN SAUCE"
                },
                {
                    id: "chonoodles003",
                    name: "Egg Noodles",
                    price: 160,
                    img: "/Dishes_photos/Egg nooldes.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: ""
                },
                {
                    id: "chonoodles004",
                    name: "Veg Schezwan Noodles",
                    price: 140,
                    img: "/Dishes_photos/Veg schezwan noodles.jpg",
                    type: "veg",
                    genre: "noodles",
                    description: "NOODLES COOKED WITH STIRRED FRIED VEGIES, SEASONED WITH SPLASH OF SAUCES VENIGER & BLACK PEPPER, TOSSED WITH SEZWAN SAUCE. SERVED WITH SEZWAN SAUCE"
                },
                {
                    id: "chonoodles005",
                    name: "Chicken Schezwan Noodles",
                    price: 180,
                    img: "/Dishes_photos/Chicken schezwan noodles.jpg",
                    type: "nonveg",
                    genre: "noodles",
                    description: "NOODLES COOKED WITH STIRRED FRIED VEGIES & CHICKEN, EGG SEASONED WITH SPLASH OF SAUCES VENIGER & BLACK PEPPER, TOSSED WITH SEZWAN SAUCE. SERVED WITH SEZWAN SAUCE"
                }
            ]
        },
    },
    {
        category: "indian",
        subcategory: {
            Soup: [
                {
                    id: "indsoup001",
                    name: "Veg Chefs Special Soup",
                    price: 120,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "indsoup002",
                    name: "Chicken Chefs Special Soup",
                    price: 130,
                    img: "/Dishes_photos/chef special chicken soup.jpg",
                    type: "nonveg",
                    genre: "soup",
                    description: ""
                },
                {
                    id: "indsoup003",
                    name: "Tomato Shorba",
                    price: 90,
                    img: "",
                    type: "veg",
                    genre: "soup",
                    description: " THIK TOMATO SOUP WITH GOODNESS & FLAVOUR OF FRESH CORRIENDER LEAVES & INDIAN SPICES"
                }
            ],
            Starter: [
                {
                    id: "indstarter001",
                    name: "Masala Omelet",
                    price: 60,
                    img: "",
                    type: "nonveg",
                    description: ""
                }
            ],
            Salad: [
                {
                    id: "indsalad001",
                    name: "Green Salad",
                    price: 110,
                    img: "/Dishes_photos/Green_salad.jpg",
                    type: "veg",
                    description: "SLICED FRESH VEGIES LIKE ONION, TOMATO, CUCUMBER, CARROT"
                }
            ],
            Gravy: [
                {
                    id: "indgravy001",
                    name: "Veg Kadai",
                    price: 200,
                    img: "",
                    type: "veg",
                    description: "JULIENNE CUT MIX VEG COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy002",
                    name: "Veg Kolhapuri",
                    price: 200,
                    img: "",
                    type: "veg",
                    description: "SPICY MIXED VEGETABLE DISH COOKED IN INDIAN GRAVY"
                },
                {
                    id: "indgravy003",
                    name: 'Veg handi',
                    price: 210,
                    img: "",
                    type: "veg",
                    description: "DICE CUT MIX VEG COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy004",
                    name: "Mutter Mushroom Masala",
                    price: 210,
                    img: "",
                    type: "veg",
                    description: " FRESH MUSHROOM & GREEN PEAS COOKED IN ONION GRAVY. (MEDIUM SPICY)"
                },
                {
                    id: "indgravy005",
                    name: "Paneer kadai",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: " MIX VEGGIES WITH PANEER COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy006",
                    name: "Paneer Butter Masala",
                    price: 220,
                    img: "/Dishes_photos/Panner butter masala.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: " RICH & CREAMY CURRY MADE WITH PANEER, SPICES, ONION, TOMATOES, CASHEWS & BUTTER, GARNISHED WITH FRESH CREAM & BUTTER"
                },
                {
                    id: "indgravy007",
                    name: "Paneer Masala",
                    price: 220,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: "SPICY & FLAVOURFUL PANEER MASALA IS SAUTED IN FRESH SPICES & COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy008",
                    name: "Paneer Tikka Masala",
                    price: 260,
                    img: "/Dishes_photos/PANEER TIKKA MASALA-1 (1).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: "COOKED PANEER TIKKA FROM TANDOOR ALONG WITH CAPSICUM, ONION, TOMATO THEN COOKED IN ONION, TOMATO GRAVY & TANDOOR MASALA"
                },
                {
                    id: "indgravy009",
                    name: "Matar Paneer",
                    price: 210,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: "RICH & CREAMY CURRY MADE WITH PANEER, SPICES, ONION, TOMATOES, CASHEWS & BUTTER, GARNISHED WITH FRESH CREAM & BUTTER"
                },
                {
                    id: "indgravy010",
                    name: "Palak paneer",
                    price: 210,
                    img: "/Dishes_photos/Egg nooldes.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: " BLANCHED SPINACH IS PUREED AND COOKED WITH SPICES, ONION & TOMATOES UNTIL THICK CURRY LIKE CONSISTENCY IS ACHIEVED"
                },
                {
                    id: "indgravy011",
                    name: "Dal Tadka",
                    price: 140,
                    img: "/Dishes_photos/DAL TADKA.jpg",
                    type: "veg",
                    description: " COOKED DAL FINISHED WITH A TEMPERING MADE OF GHEE & SPICES"
                },
                {
                    id: "indgravy012",
                    name: "Dal Fry",
                    price: 140,
                    img: "",
                    type: "veg",
                    description: " BOILED TOOR DAL & MOONG DAL WITH ONION, TOMATO, GREEN CHILI, CHOPPED GARLIC & JEERA SAUTÉD IN BUTTER, GARNISHED WITH FRESH CORIANDER"
                },
                {
                    id: "indgravy013",
                    name: "Chefs Special Veg Gravy",
                    price: 230,
                    img: "",
                    type: "veg",
                    description: "IT'S MIX OF VEGIES LIKE BABYCORN,MASHROOM, PANEER, CARROT, BROCCOLI, COOKED IN TANGY TOMATO GRAVY, GARNISHED WITH CRUSHED PAPAD"
                },
                {
                    id: "indgravy014",
                    name: "Butter Chicken",
                    price: 230,
                    img: "/Dishes_photos/Butter chicken.jpg",
                    type: "nonveg",
                    description: " RICH & CREAMY CURRY MADE WITH CHICKEN, SPICES, ONION, TOMATOES, CASHEWS & BUTTER, GARNISHED WITH FRESH CREAM & BUTTER"
                },
                {
                    id: "indgravy015",
                    name: "Chicken Tikka Masala",
                    price: 330,
                    img: "",
                    type: "nonveg",
                    description: " COOKED CHICKEN TIKKA FROM TANDOOR ALONG WITH CAPSICUM, ONION, TOMATO THEN COOKED IN ONION, TOMATO GRAVY & TANDOOR MASALA"
                },
                {
                    id: "indgravy016",
                    name: "Chicken Korma",
                    price: 260,
                    img: "",
                    type: "nonveg",
                    description: "TRADITIONAL MUGHLAI DISH WHERE CHICKEN IS COOKED WITH SPICES, ONION PASTE, YOGURT & NUTS, RICH & DELICIOUS"
                },
                {
                    id: "indgravy017",
                    name: 'Chefs Special Non-Veg ',
                    price: 340,
                    img: "/Dishes_photos/Chef special non veg gravy  (2).jpg",
                    type: "nonveg",
                    description: "TANDOORI CHICKEN PIECES COOKED IN ONION, TOMATO & TANDOORI MASALA, GARNISHED WITH PLAIN OMLETTE"
                },
                {
                    id: "indgravy018",
                    name: "Veg Hydrabadi",
                    price: 280,
                    img: "",
                    type: "veg",
                    description: " MIX VEG COOKED IN GREEN MASALA AND ONION GRAVY LIKE CORIANDER LEAVES, MINT, GREEN CHILI AND CAPSICUM THEN FINISHED WITH CREAM & BUTTER. (SPICY)"
                },
                {
                    id: "indgravy019",
                    name: "Chicken Kolhapuri",
                    price: 230,
                    img: "",
                    type: "nonveg",
                    description: " MIX VEG & CHICKEN COOKED IN ONION GRAVY & SPICY MASALA. (SPICY)"
                },
                {
                    id: "indgravy020",
                    name: "Chicken Handi",
                    price: 240,
                    img: "",
                    type: "nonveg",
                    description: "DICE CUT MIX VEG & CHICKEN COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy021",
                    name: "Chicken Kadai",
                    price: 240,
                    img: "",
                    type: "nonveg",
                    description: "JULIENNE CUT MIX VEG & CHICKEN COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy022",
                    name: "Chicken Masala",
                    price: 240,
                    img: "",
                    type: "nonveg",
                    description: " SPICY & FLAVOURFUL CHICKEN MASALA IS SAUTED IN FRESH SPICES & COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy023",
                    name: "Mutton Masala",
                    price: 320,
                    img: "",
                    type: "nonveg",
                    description: "SPICY & FLAVOURFUL MUTTON MASALA IS SAUTED IN FRESH SPICES & COOKED IN ONION & TOMATO GRAVY"
                },
                {
                    id: "indgravy024",
                    name: "Veg Makhani",
                    price: 210,
                    img: "",
                    type: "veg",
                    description: " MIX VEG COOKED IN MILD TOMATO CREAMY GRAVEY. (LESS SPICY)"
                }
            ],
            Rice: [
                {
                    id: "indrice001",
                    name: "Steamed Rice",
                    price: 110,
                    img: "",
                    type: "veg",
                    genre: "fried rice",
                    description: "RICE STEAMED IN STEAMMER"
                },
                {
                    id: "indrice002",
                    name: "Jira Rice",
                    price: 110,
                    img: "/Dishes_photos/Jeera rice.jpg",
                    type: "veg",
                    genre: "fried rice",
                    description: "FRAGRANT BASMATI RICE IS SCENTED WITH BUTTER CUMIN SEEDS CARDAMON & GREEN CHILLY, GARNISHED WITH FRESH CORIENDER"
                },
                {
                    id: "indrice003",
                    name: 'Veg Pulao',
                    price: 170,
                    img: "/Dishes_photos/Veg Pulao.jpg",
                    type: "veg",
                    genre: "fried rice",
                    description: "BASMATI RICE MIXED WITH SPICES & VEGITABLES, AROMATIC DELICIOUS & SUPER HEALTHEY"
                }
            ],
            Biryani: [
                {
                    id: "indbiryani001",
                    name: "Veg Biryani",
                    price: 170,
                    img: "/Dishes_photos/Veg biryani  (2).jpg",
                    type: "veg",
                    genre: "biryani",
                    description: "AROMATIC, DELICIOUS & SPICY ONE POT BIRYANI IS MADE BY MARINATING MIX VEGGIES IN YOGURT SPICES, LAYERD WITH BASMATI RICE AND KEPT FOR DUM, SERVED WITH RAITA"
                },
                {
                    id: "indbiryani002",
                    name: "Egg Biryani",
                    price: 180,
                    img: "/Dishes_photos/Egg biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: "AROMATIC, DELICIOUS & SPICY ONE POT BIRYANI IS MADE BY MARINATING MIX VEGGIES IN YOGURT SPICES & EGG, LAYERD WITH BASMATI RICE AND KEPT FOR DUM, SERVED WITH RAITA"
                },
                {
                    id: "indbiryani003",
                    name: "Prawns Biryani",
                    price: 340,
                    img: "/Dishes_photos/Prawns biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: " AROMATIC, DELICIOUS & SPICY ONE POT BIRYANI IS MADE BY MARINATING MIX VEGGIES & PRAWNS IN YOGURT SPICES, LAYERD WITH BASMATI RICE AND KEPT FOR DUM, SERVED WITH RAITA"
                },
                {
                    id: "indbiryani004",
                    name: "Chicken Biryani",
                    price: 280,
                    img: "/Dishes_photos/Chicken biryani  (2).jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: " AROMATIC, DELICIOUS & SPICY ONE POT BIRYANI IS MADE BY MARINATING MIX VEGGIES & CHICKEN IN YOGURT SPICES, LAYERD WITH BASMATI RICE AND KEPT FOR DUM, SERVED WITH RAITA"
                },
                {
                    id: "indbiryani005",
                    name: "Mutton Biryani",
                    price: 340,
                    img: "/Dishes_photos/Mutton biryani.jpg",
                    type: "nonveg",
                    genre: "biryani",
                    description: " AROMATIC, DELICIOUS & SPICY ONE POT BIRYANI IS MADE BY MARINATING MIX VEGGIES & MUTTON IN YOGURT SPICES, LAYERD WITH BASMATI RICE AND KEPT FOR DUM, SERVED WITH RAITA"
                }
            ]
        }
    },
    {
        category: "tandoor", subcategory: {
            Grilled: [
                {
                    id: "tagrgril001",
                    name: "Tandoori Chicken Full",
                    price: 440,
                    img: "/Dishes_photos/Tandoori chicken  (1).jpg",
                    type: "nonveg",
                    description: " MASALA IS PREPARED FROM HUNG CURD WITH SOME SPICES MIXED INTO IT & CHICKEN IS MARINATED INTO IT, THEN GRILED IN THE TANDOOR UNTILL TENDER, JUICY, SMOKY FLAVOUR IS ADAPTED, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrgril002",
                    name: "Tandoori Chicken Half ",
                    price: 250,
                    img: "/Dishes_photos/Tandoori chicken  (2).jpg",
                    type: "nonveg",
                    description: " MASALA IS PREPARED FROM HUNG CURD WITH SOME SPICES MIXED INTO IT & CHICKEN IS MARINATED INTO IT, THEN GRILED IN THE TANDOOR UNTILL TENDER, JUICY, SMOKY FLAVOUR IS ADAPTED, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrgril003",
                    name: "Grilled Mushroom TIkka",
                    price: 240,
                    img: "",
                    type: "veg",
                    description: "FRESH MASHROOM MARINATED IN SPICY CURD & GRILLED IN TANDOOR, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrgril004",
                    name: "Tandoori Broccoli",
                    price: 270,
                    img: "/Dishes_photos/Tandoori broccoli (2).jpg",
                    type: "veg",
                    description: "FRESH BROCOLLI MIXED WITH HUNG CURD ALONG WITH SPICES LIKE AJWIN, CHAT MASALA, KASOORI METHI, BRING OUT FANTASTIC FLAVOUR OF TANDOORI BROCOLLI"
                },
                {
                    id: "tagrgril005",
                    name: "Tandoori Baby Corn",
                    price: 270,
                    img: "/Dishes_photos/TANDOORI BABYCORN.jpeg",
                    type: "veg",
                    description: "FRESH BABYCORN MARINATED WITH SPICY CURD & GRILLED IN TANDOOR, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrgril006",
                    name: "Tandoori Gobi",
                    price: 210,
                    img: "/Dishes_photos/Tandoori gobhi.jpg",
                    type: "nonveg",
                    description: " FRESH CAULIFLOWER MIXED WITH HUNG CURD ALONG WITH SPICES LIKE AJWIN, CHAT MASALA, KASOORI METHI, BRING OUT FANTASTIC FLAVOUR OF TANDOOR GOBI"
                },
                {
                    id: "tagrgril007",
                    name: "Tandoori Wings",
                    price: 260,
                    img: "/Dishes_photos/tandoori wings.png",
                    type: "veg",
                    description: "FRESH CAULIFLOWER MIXED WITH HUNG CURD ALONG WITH SPICES LIKE AJWIN, CHAT MASALA, KASOORI METHI, BRING OUT FANTASTIC FLAVOUR OF TANDOOR GOBI"
                },
                {
                    id: "tagrgril008",
                    name: "Chicken Afghani Kebab",
                    price: 290,
                    img: "/Dishes_photos/CHICKEN AFGHANI KEBAB.jpg",
                    type: "nonveg",
                    description: "BONELESS CHICKEN MARINATED WITH MINT, YOGURT, CREAM & SPICES, SERVED WITH GREEN CHUTNEY & SALAD"
                },
                {
                    id: "tagrgril009",
                    name: "Grilled Chicken Lolypop",
                    price: 240,
                    img: "/Dishes_photos/MASALA LOLIPOP.jpg",
                    type: "nonveg",
                    description: "CHICKEN LOLYPOP MARINATED WITH TANDOORI MASALA GRILLED AND GARNISHED WITH BUTTER , SERVED WITH MINT SAUCE & SALAD"
                },
                {
                    id: "tagrgril010",
                    name: "Tandoori Grilled Prawns",
                    price: 390,
                    img: "/Dishes_photos/TANDOORI PRAWNS.jpg",
                    type: "nonveg",
                    description: " PRAWNS MARINATED WITH TANDOORI MASALA GRILLED AND GARNISHED WITH BUTTER , SERVED WITH MINT SAUCE & SALAD"
                },
                {
                    id: "tagrgril011",
                    name: "Grilled Mackrel",
                    price: 170,
                    img: "",
                    type: "nonveg",
                    description: " MACKREL MARINATED WITH TANDOORI MASALA GRILLED AND THEN FINISHED WITH BUTTER , SERVED WITH MINT SAUCE & SALAD"
                },
                {
                    id: "tagrgril012",
                    name: "Tandoori Malai Brocolli",
                    price: 240,
                    img: "",
                    type: "veg",
                    description: " MALAI BROCCOLI IS A FLAVORFUL AND DELIGHTFUL APPETIZER WHERE BROCCOLI FLORETS ARE COATED WITH RICH, CREAMY MALAI MARINATED AND GRILLED UNTIL PERFECTLY GOLDEN, SERVED WITH GREEN CHUTNEY AND SALAD"
                }
            ],
            Kebab: [
                {
                    id: "tagrkeba001",
                    name: "Tangdai Kebab",
                    price: 290,
                    img: "/Dishes_photos/Tangadi Kabab-1.jpg",
                    type: "nonveg",
                    description: "APPETITE MADE FROM CHICKEN DRUMSTICKS MARINATED WITH SPICES, CURD & CREAM, GRILLED IN TANDOOR, SERVED WITH MINT CHUTNEY & GREEN SALAD, SERVED IN 3 PCS"
                },
                {
                    id: "tagrkeba002",
                    name: "Malai Kebab",
                    price: 320,
                    img: "/Dishes_photos/Malai kebab.jpg",
                    type: "nonveg",
                    description: "CHICKEN MARINATED IN CREAMY YOGURT SOFT & TENDER CHUNKY GRILLED IN TANDOOR, SERVED WITH SALAD AND MINT CHUTNEY. (8 PC)"
                },
                {
                    id: "tagrkeba003",
                    name: "Haryani Chicken Tikka",
                    price: 289,
                    img: "",
                    type: "nonveg",
                    description: "A BLEND OF MINT AND CORIENDER, CHICKEN MARINATED FOR LONG TIME TO DEVELOP ENOUGH FLAOUR, GRILLED IN TANDOOR"
                },
                {
                    id: "tagrkeba004",
                    name: "Chicken Shish Taouk",
                    price: 289,
                    img: "/Dishes_photos/chicken sheesh taouk.jpg",
                    type: "nonveg",
                    description: "IT'S A TRADITIONAL MEDITERIAN CUISINE, SIMILAR TO CHICKEN TIKKA, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrkeba005",
                    name: " Chicken TIkka",
                    price: 280,
                    img: "/Dishes_photos/Chicken tikka  (1).jpg",
                    type: "nonveg",
                    description: "CHICKEN TIKKA IS ALSO KNOWN AS MURG TIKKA, THESE ARE CHUNKS OF MARINATED WITH SPICED YOGURT GRILLED IN TANDOOR, SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrkeba006",
                    name: "Chicken Seekh Kabab",
                    price: 285,
                    img: "/Dishes_photos/CHICKEN SEEKH KEBAB.jpg",
                    type: "nonveg",
                    description: " GROUNDED CHICKEN MINCE SEASONED WITH HERBS & AROMATIC SPICES, SKEWED GRILED IN TANDOOR SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrkeba007",
                    name: "Mutthon Seekh Kabab",
                    price: 350,
                    img: "/Dishes_photos/mutton seekh kebab.jpeg",
                    type: "nonveg",
                    description: " GROUNDED MUTTON MINCE SEASONED WITH HERBS & AROMATIC SPICES, SKEWED GRILED IN TANDOOR SERVED WITH CHUTNEY & SALAD"
                },
                {
                    id: "tagrkeba008",
                    name: "Paneer Haryani Kabab",
                    price: 260,
                    img: "",
                    type: "veg",
                    genre: "paneer",
                    description: " MARINATED PANEER IN TANDOORI MASALA WHICH IS BLEND OF MINT AND CORRIENDER, MARINATED FOR LONG TIME TO DEVELOP ENOUGH FLAOUR, GRIILED IN TANDOOR"
                },
                {
                    id: "tagrkeba009",
                    name: "Paneer Tikka",
                    price: 250,
                    img: "/Dishes_photos/Paneer tikka  (2).jpg",
                    type: "veg",
                    genre: "paneer",
                    description: " PANEER CUBES, CAPSICUM, ONION, TOMATO MARINATED IN SPICED YOGURT, SERVED WITH CHUTNEY & SALAD. (8 PC)"
                },
                {
                    id: "tagrkeba010",
                    name: "Paneer Malai Tikka",
                    price: 270,
                    img: "/Dishes_photos/PANEER TIKKA.jpg",
                    type: "veg",
                    genre: "paneer",
                    description: "PANEER MALAI KEBAB MARINATED WITH FRESH CREAM, MILED SPICE, CASHEW NUTS, SERVED WITH GREEN CHUTNEY & SALAD"
                },
                {
                    id: "tagrkeba011",
                    name: "Veg Seekh Kebab",
                    price: 220,
                    img: "",
                    type: "veg",
                    description: "GROUNDED MIX VEG MINCE SEASONED WITH HERBS & AROMATIC SPICES, SKEWED GRILED IN TANDOOR SERVED WITH CHUTNEY & SALAD"
                }
            ],
            Roti: [
                {
                    id: "tagrroti001",
                    name: "Tandoori Roti",
                    price: 15,
                    img: "/Dishes_photos/Plain roti.jpg",
                    type: "veg",
                    description: "IT'S A FLATBREAD MADE FROM WHOLE WHEAT & TRADITIONALLY COOKED IN TANDOOR"
                },
                {
                    id: "tagrroti002",
                    name: "Butter Roti",
                    price: 15,
                    img: "/Dishes_photos/Butter roti.jpg",
                    type: "veg",
                    description: "IT'S A FLATBREAD MADE FROM WHOLE WHEAT & TRADITIONALLY COOKED IN TANDOOR & BRUSHED WITH BUTTER ON ROTI"
                },
                {
                    id: "tagrroti003",
                    name: "Butter Naan",
                    price: 35,
                    img: "/Dishes_photos/Butter naan.jpg",
                    type: "veg",
                    description: "MADE WITH FRESH MAIDA COOCKED IN TANDOORI, BRUSHED WITH BUTTER OVER NAAN"
                },
                {
                    id: "tagrroti004",
                    name: "Plain Naan",
                    price: 25,
                    img: "/Dishes_photos/Plain naan.jpg",
                    type: "veg",
                    description: "MADE WITH FRESH MAIDA COOCKED IN TANDOORI, BRUSHED WITH BUTTER OVER NAAN"
                },
                {
                    id: "tagrroti005",
                    name: "Chesse Garlic Naan",
                    price: 120,
                    img: "/Dishes_photos/CHEESE GARLIC NAAN (2).jpg",
                    type: "veg",
                    description: "GRATTED CHEESE STUFFED INSIDE NAAN & CHOPPED GARLIC MINCED PRESSED ON THE NAAN COOKED IN TANDOORI"
                },
                {
                    id: "tagrroti006",
                    name: "Tandoori Butter Paratha",
                    price: 35,
                    img: "/Dishes_photos/Butter paratha.jpg",
                    type: "veg",
                    description: "FLATBREAD MADE FROM FRESH WHEAT FLOUR, BRUSHED BUTTER ON PARATHA, COOKED IN TANDOORI, ALSO KNOWN AS LACCHA PARATHA"
                },
                {
                    id: "tagrroti007",
                    name: "Tandoori Plain Paratha",
                    price: 25,
                    img: "/Dishes_photos/Plain paratha.jpg",
                    type: "veg",
                    description: "MADE FROM FRESH WHEAT FLOUR, COOKED IN TANDOORI. ALSO KNOWN AS LACCHA PARATHA"
                },
                {
                    id: "tagrroti008",
                    name: "Garlic Naan",
                    price: 45,
                    img: "/Dishes_photos/BUTTER GARLIC NAAN1.jpg",
                    type: "veg",
                    description: "CHOPPED GARLIC MINCED PRESSED ON THE NAAN COOKED IN TANDOORI"
                },
                {
                    id: "tagrroti009",
                    name: "Onion Butter Kulcha ",
                    price: 45,
                    img: "/Dishes_photos/Onion garlic naan  (2).jpg",
                    type: "veg",
                    description: "STUFFED ONION & CHOPPED GREEN CHILLY, CORRIENDER PRESSED ON KULCHA SEASONED WITH WHITE SESAME SEEDS"
                },
                {
                    id: "tagrroti010",
                    name: "Butter Garlic Naan",
                    price: 45,
                    img: "/Dishes_photos/BUTTER GARLIC NAAN1.jpg",
                    type: "veg",
                    description: " CHOPPED MINCED GARLIC  PRESSED ON THE NAAN COOKED IN TANDOORI & BRUSHED BUTTER ON TOP"
                }
            ]
        }
    },
    {
        category: "goan", subcategory: {
            Starter: [
                {
                    id: "goststa001",
                    name: "Chicken Tawa Fry",
                    price: 280,
                    img: "/Dishes_photos/Chicken tawa fry  (2).jpg",
                    type: "nonveg",
                    description: "CHICKEN THIN SLICE MARINATED WITH MIXED SPICES, LEMON JUICE & ONION CAPSICUM, TOMATO, CURRY LEAVES THEN SHALLOW FRIED ON TAWA, SERVED IN (8PCS)"
                },
                {
                    id: "goststa002",
                    name: "Chicken Rawa Fry",
                    price: 270,
                    img: "/Dishes_photos/Chicken rawa fry  (2).jpg",
                    type: "nonveg",
                    description: "CHICKEN BREAST BONELESS MARINATED WITH CHILLY & GINGER GARLIC PASTE COATED WITH RAWA & SHALLOW FRIED, SERVED WITH SALAD"
                },
                {
                    id: "goststa003",
                    name: "Prawns (Rawa Fry)",
                    price: 270,
                    img: "/Dishes_photos/Prawns rawa fry  (2).jpg",
                    type: "nonveg",
                    description: "JUMBO PRAWNS MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER  COATED WITH FINE RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa004",
                    name: "KingFish Rawa Fry",
                    price: 380,
                    img: "/Dishes_photos/Prawns rawa fry  (2).jpg",
                    type: "nonveg",
                    description: "KINGFISH MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER THEN COATED WITH RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa005",
                    name: "Kingfish Masala Fry",
                    price: 380,
                    img: "",
                    type: "nonveg",
                    description: "KINGFISH MARINATED WITH LEMON JUICE, CHILLY PASTE, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH SALAD"
                },
                {
                    id: "goststa006",
                    name: "Mackerel Rawa Fry",
                    price: 150,
                    img: "",
                    type: "nonveg",
                    description: "MACKEREL MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER COATED WITH RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa007",
                    name: "Mackerel Masala Fry",
                    price: 170,
                    img: "",
                    type: "nonveg",
                    description: "MACKEREL MARINATED WITH LEMON JUICE, CHILLY PASTE, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH SALAD"
                },
                {
                    id: "goststa008",
                    name: "Mackerel Recheado",
                    price: 190,
                    img: "/Dishes_photos/RECHEAD MACKREL FRY.jpg",
                    type: "nonveg",
                    description: "MACKEREL MARINATED WITH LEMON JUICE, CHILLY PASTE, RECHEAD MASALA, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH SALAD"
                },
                {
                    id: "goststa009",
                    name: "Chonak Rawa Fry",
                    price: 380,
                    img: "",
                    type: "nonveg",
                    description: "CHONAK MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER COATED WITH RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa010",
                    name: "Chonak Masala Fry",
                    price: 380,
                    img: "",
                    type: "nonveg",
                    description: "CHONAK MARINATED WITH LEMON JUICE, CHILLY PASTE, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH SALAD"
                },
                {
                    id: "goststa011",
                    name: "Silver Fish Rawa Fry",
                    price: 170,
                    img: "/Dishes_photos/Sliver fish rawa fry  (2).jpg",
                    type: "nonveg",
                    description: "SILVER FISH MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER THEN COATED IN RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa012",
                    name: "Silver Fish Masala Fry",
                    price: 170,
                    img: "",
                    type: "nonveg",
                    description: "SILVER FISH MARINATED WITH LEMON JUICE, CHILLY PASTE, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH SALAD"
                },
                {
                    id: "goststa013",
                    name: "Squid Chilly Fry",
                    price: 280,
                    img: "/Dishes_photos/Squied chilli fry  (2).jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goststa014",
                    name: "Modso Rawa Fry",
                    price: 280,
                    img: "",
                    type: "nonveg",
                    description: "MODSO MARINATED WITH LEMON JUICE, GINGER GARLIC PASTE, CHILLY POWDER, TURMERIC POWDER THEN COATED WITH RAWA & SHALLOW FRIED"
                },
                {
                    id: "goststa015",
                    name: "Modso Masala Fry",
                    price: 340,
                    img: "",
                    type: "nonveg",
                    description: " MODSO MARINATED WITH LEMON JUICE, CHILLY PASTE, SHALLOW FRIED WITH RECHEADO MASALA, SERVED WITH GOAN SALAD"
                },
                {
                    id: "goststa016",
                    name: "Chilly Chicken Fry",
                    price: 240,
                    img: "/Dishes_photos/Chilly chicken fry  (2).jpg",
                    type: "nonveg",
                    description: "FRIED CHICKEN COOKED WITH VEGETABLE, JULIENNE CUT WITH TOMATO KETCHUP, CHILLY SAUCE, LITTLE GOAN VINEGER, SERVED HOT AND TANGY"
                },
                {
                    id: "goststa017",
                    name: "Calamari Chilly Fry",
                    price: 280,
                    img: "",
                    type: "nonveg",
                    description: "JULIENNE CUT VEGETABLES SAUTED WITH CHICKEN WITH TOMATO KETCHUP, CHIILY SAUCE, GOAN VINEGER"
                }
            ],
            Gravy: [
                {
                    id: "gogragra001",
                    name: "Chicken Cafreal",
                    price: 250,
                    img: "/Dishes_photos/Chicken carfeal  (2).jpg",
                    type: "nonveg",
                    description: "FRESH COCONUT GROUNDED WITH AUTHENTIC SPICES OF GOA, IT HAS RICH DELICIOUS BLENDED LOCAL SPICES & FRESH COCONUT, SERVED IN GRAVEY"
                },
                {
                    id: "gogragra002",
                    name: "Chicken Xacuti",
                    price: 240,
                    img: "/Dishes_photos/Chicken xacuti  (2).jpg",
                    type: "nonveg",
                    description: "FRESH COCONUT GROUNDED WITH AUTHENTIC SPICES OF GOA, IT HAS RICH DELICIOUS BLENDED LOCAL SPICES & FRESH COCONUT, SERVED IN GRAVEY"
                }
            ],
            Thali: [
                {
                    id: "goththali001",
                    name: "Fish Thali",
                    price: 230,
                    img: "/Dishes_photos/King fish thali.jpg",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "goththali002",
                    name: "Veg Thali",
                    price: 180,
                    img: "/Dishes_photos/VEG THALI.jpg",
                    type: "veg",
                    description: ""
                }
            ],
            Rice: [
                {
                    id: "goririce001",
                    name: "Prawns Peas Pulav",
                    price: 270,
                    img: "",
                    type: "nonveg",
                    genre: "fried rice",
                    description: "FRAGRANT GHEE, SAUTED ONIONS WITH LONG GRAIN BASMATI RICE COOKED WITH PEAS & MARINATED SHRIMP, SIMPLY DELICIOUS"
                }
            ],
            Curry: [
                {
                    id: "gocucurry001",
                    name: "Prawns Curry",
                    price: 270,
                    img: "",
                    type: "nonveg",
                    description: ""
                },
                {
                    id: "gocucurry002",
                    name: "KingFish Curry",
                    price: 270,
                    img: "",
                    type: "nonveg",
                    description: ""
                }
            ]
        }
    }
]


export default Dishes