// HitchFit Supplements BD - Product catalogue
// Prices in BDT (converted from USD at ~120 BDT, rounded to nearest 100).
// Each product has its own image in the images/ folder (see the "image" field).

var PRODUCTS = [
  {
    id: "whey-fusion",
    name: "Whey Protein Fusion Blend",
    price: 6000,
    category: "proteins",
    categoryLabel: "Proteins",
    image: "images/whey.png",
    rating: 5.0,
    reviews: 128,
    flavors: ["Cinnamon Roll", "Chocolate Fudge", "Vanilla Bean"],
    servings: "30 servings",
    description: "Hitch Fit Whey Protein Fusion Blend gives you 25g of sustained release protein per serving. A mix of whey isolate and concentrate for fast and long lasting absorption, with digestive enzymes and a complete amino acid profile to support muscle repair, growth and recovery.",
    features: [
      "25g sustained release protein per serving",
      "Whey isolate + concentrate blend",
      "Digestive enzymes for maximum absorption",
      "Complete amino acid profile",
      "Three delicious flavors"
    ]
  },
  {
    id: "whey-isolate",
    name: "Whey Isolate Protein Powder",
    price: 7200,
    category: "proteins",
    categoryLabel: "Proteins",
    image: "images/whey-isolate.png",
    rating: 5.0,
    reviews: 96,
    flavors: ["Chocolate Milkshake", "Vanilla Ice Cream"],
    servings: "29 servings",
    description: "A fast absorbing whey isolate delivering 25-26g of premium protein per serving with digestive enzymes. Low in carbs and fats, it is the clean choice for lean muscle building and rapid post-workout recovery.",
    features: [
      "25-26g protein per serving",
      "Pure whey isolate",
      "Low carb, low fat",
      "Digestive enzymes added",
      "29 servings per tub"
    ]
  },
  {
    id: "collagen",
    name: "Collagen Hydrolyzed Peptide",
    price: 5400,
    category: "proteins",
    categoryLabel: "Proteins",
    image: "images/collagen.png",
    rating: 5.0,
    reviews: 54,
    flavors: ["Unflavored"],
    servings: "30 servings",
    description: "5000mg of hydrolyzed collagen peptides per serving to support healthy skin, hair, nails, joints and muscle recovery. Mixes easily into any drink, hot or cold.",
    features: [
      "5000mg collagen peptides",
      "Supports skin, hair and nails",
      "Joint and muscle recovery",
      "Unflavored, mixes into anything",
      "30 servings"
    ]
  },
  {
    id: "pre-energy",
    name: "Pre Workout for Energy, Muscle & Strength",
    price: 6000,
    category: "pre-workout",
    categoryLabel: "Pre-Workouts & More",
    image: "images/pre-energy.png",
    rating: 5.0,
    reviews: 142,
    flavors: ["Citrus Splash", "Rocket Pop"],
    servings: "25 servings",
    description: "A powerful pre-workout with 250mg of caffeine for clean, sustained energy, sharper focus and bigger pumps. Formulated to push your training, strength and endurance to the next level.",
    features: [
      "250mg caffeine for sustained energy",
      "Increased focus and intensity",
      "Bigger pumps and endurance",
      "25 servings",
      "Two bold flavors"
    ]
  },
  {
    id: "pre-caffeine-free",
    name: "Pre-Workout | Caffeine-Free Pump & Performance",
    price: 6000,
    category: "pre-workout",
    categoryLabel: "Pre-Workouts & More",
    image: "images/pre-caffeine-free.png",
    rating: 5.0,
    reviews: 73,
    flavors: ["Cherry Mash", "Blue Raspberry"],
    servings: "25 servings",
    description: "A stim-free pre-workout built around 1500mg of Nitrosigine for explosive blood flow, muscular pumps and performance, without the caffeine. Perfect for evening training or stim-sensitive athletes.",
    features: [
      "Caffeine-free formula",
      "1500mg Nitrosigine",
      "Massive blood flow and pumps",
      "Great for evening training",
      "25 servings"
    ]
  },
  {
    id: "amino",
    name: "Amino + Hydration | BCAA & Electrolyte Formula",
    price: 6000,
    category: "pre-workout",
    categoryLabel: "Pre-Workouts & More",
    image: "images/amino.png",
    rating: 5.0,
    reviews: 111,
    flavors: ["Rocket Pop", "Lemon Bar"],
    servings: "30 servings",
    description: "An intra and post-workout recovery drink with a 2:1:1 BCAA ratio and a full electrolyte blend. Supports muscle recovery, reduces fatigue and keeps you hydrated through tough training.",
    features: [
      "2:1:1 BCAA ratio",
      "Full electrolyte blend",
      "Faster recovery, less fatigue",
      "All day hydration",
      "30 servings"
    ]
  },
  {
    id: "rocket-fuel",
    name: "Rocket Fuel | Clean Energy & Focus",
    price: 4800,
    category: "pre-workout",
    categoryLabel: "Pre-Workouts & More",
    image: "images/rocket-fuel.png",
    rating: 5.0,
    reviews: 67,
    flavors: ["Unflavored"],
    servings: "30 servings",
    description: "A fat burner and metabolism support formula that delivers clean, sustained energy and sharp focus. Helps support weight loss goals while keeping you driven throughout the day.",
    features: [
      "Metabolism and fat loss support",
      "Clean sustained energy",
      "Sharper mental focus",
      "Appetite support",
      "30 servings"
    ]
  },
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    price: 4200,
    category: "daily-nutrition",
    categoryLabel: "Daily Nutrition",
    image: "images/creatine.png",
    rating: 5.0,
    reviews: 203,
    flavors: ["Unflavored"],
    servings: "60 servings",
    description: "Pure 5000mg creatine monohydrate per serving for increased strength, power, and muscle growth. Unflavored and micronized for easy mixing into any drink.",
    features: [
      "5000mg pure creatine monohydrate",
      "More strength and power",
      "Supports muscle growth",
      "Unflavored and micronized",
      "60 servings"
    ]
  },
  {
    id: "glutamine",
    name: "Glutamine Amino Powder",
    price: 4200,
    category: "daily-nutrition",
    categoryLabel: "Daily Nutrition",
    image: "images/glutamine.png",
    rating: 5.0,
    reviews: 48,
    flavors: ["Unflavored"],
    servings: "60 servings",
    description: "5000mg of L-Glutamine per serving to support muscle repair, recovery and gut health. An easy daily addition to protect hard earned muscle and aid digestion.",
    features: [
      "5000mg L-Glutamine",
      "Supports muscle repair",
      "Aids gut health",
      "Unflavored",
      "60 servings"
    ]
  },
  {
    id: "greens-reds",
    name: "Greens & Reds | Super Greens Powder",
    price: 5400,
    category: "daily-nutrition",
    categoryLabel: "Daily Nutrition",
    image: "images/greens-reds.png",
    rating: 5.0,
    reviews: 62,
    flavors: ["Natural"],
    servings: "30 servings",
    description: "A superfood blend of organic greens and reds to support immunity, digestion and daily energy. An easy way to cover your fruit and vegetable nutrients in a single scoop.",
    features: [
      "Organic greens and reds blend",
      "Immune and digestive support",
      "Antioxidant rich",
      "Daily energy",
      "30 servings"
    ]
  },
  {
    id: "multivitamin",
    name: "Mega Multivitamin",
    price: 4200,
    category: "daily-nutrition",
    categoryLabel: "Daily Nutrition",
    image: "images/multivitamin.png",
    rating: 5.0,
    reviews: 88,
    flavors: ["Capsules"],
    servings: "30 servings",
    description: "A complete daily multivitamin built for athletes and active adults. Packed with essential vitamins and minerals to support energy, immunity and overall health.",
    features: [
      "Complete daily vitamins and minerals",
      "Built for active adults",
      "Supports energy and immunity",
      "Easy to swallow capsules",
      "30 servings"
    ]
  },
  {
    id: "build-muscle-stack",
    name: "Build Muscle Stack",
    price: 30600,
    category: "stacks",
    categoryLabel: "Stacks",
    image: "images/build-muscle-stack.png",
    rating: 5.0,
    reviews: 41,
    flavors: ["Standard"],
    servings: "Complete bundle",
    description: "The complete supplement bundle for strength and size. Includes whey isolate, creatine, pre-workout and amino + hydration to fuel training, growth and recovery from every angle.",
    features: [
      "Whey Isolate Protein",
      "Creatine Monohydrate",
      "Pre-Workout for Energy",
      "Amino + Hydration",
      "Save vs buying separately"
    ]
  },
  {
    id: "essential-stack",
    name: "Essential Supplement Stack",
    price: 23400,
    category: "stacks",
    categoryLabel: "Stacks",
    image: "images/essential-stack.png",
    rating: 5.0,
    reviews: 35,
    flavors: ["Standard"],
    servings: "Complete bundle",
    description: "Daily protein, pre-workout and recovery bundle. The foundational stack covering the essentials so you can train hard, recover well and stay consistent.",
    features: [
      "Whey Protein Fusion Blend",
      "Pre-Workout for Energy",
      "Amino + Hydration",
      "Everyday foundation stack",
      "Save vs buying separately"
    ]
  },
  {
    id: "starter-pack",
    name: "Starter Pack",
    price: 12600,
    category: "stacks",
    categoryLabel: "Stacks",
    image: "images/starter-pack.png",
    rating: 5.0,
    reviews: 29,
    flavors: ["Standard"],
    servings: "Complete bundle",
    description: "Core strength, recovery and nutritional support in one starter bundle. A simple, affordable way to begin your supplement routine with the daily basics.",
    features: [
      "Creatine Monohydrate",
      "Glutamine Amino Powder",
      "Mega Multivitamin",
      "Perfect for beginners",
      "Save vs buying separately"
    ]
  },
  {
    id: "weight-loss-stack",
    name: "Weight Loss Stack",
    price: 34800,
    category: "stacks",
    categoryLabel: "Stacks",
    image: "images/weight-loss-stack.png",
    rating: 5.0,
    reviews: 52,
    flavors: ["Standard"],
    servings: "Complete bundle",
    description: "The complete weight loss stack for fat loss, energy and recovery. Combines protein, fat burner, pre-workout, hydration and daily nutrition to support a leaner, stronger you.",
    features: [
      "Whey Protein Fusion Blend",
      "Rocket Fuel Fat Burner",
      "Pre-Workout for Energy",
      "Amino + Hydration & Mega Multi",
      "Save vs buying separately"
    ]
  },
  {
    id: "womens-wellness-stack",
    name: "Women's Total Wellness Stack",
    price: 29400,
    category: "stacks",
    categoryLabel: "Stacks",
    image: "images/womens-wellness-stack.png",
    rating: 5.0,
    reviews: 38,
    flavors: ["Standard"],
    servings: "Complete bundle",
    description: "A total wellness bundle built for women. Brings together protein, greens, multivitamin, collagen and glutamine to support strength, beauty and everyday health.",
    features: [
      "Whey Protein Fusion Blend",
      "Greens & Reds",
      "Mega Multivitamin",
      "Collagen & Glutamine",
      "Save vs buying separately"
    ]
  }
];

// Helpers shared across pages
function formatBDT(amount) {
  return "BDT " + amount.toLocaleString("en-US");
}

function getProductById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) {
      return PRODUCTS[i];
    }
  }
  return null;
}
