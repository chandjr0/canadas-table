export const SITE = {
  name: "Sysco Canada",
  legalName: "Sysco Canada Inc.",
  url: import.meta.env["VITE_SITE_URL"] ?? "https://www.sysco.ca",
  locale: "en_CA",
  defaultOgImage: "/og-image.jpg",
  ogImageAlt: "Sysco Canada foodservice distribution — fresh produce and products for Canadian kitchens",
  defaultKeywords:
    "Sysco Canada, foodservice distribution, restaurant supply, broadline distributor, temperature-controlled delivery, culinary support, Canada",
} as const;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/impact", label: "Our Impact" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

/** Placeholder contact & social links — replace href when ready. */
export const SOCIAL = {
  website: { label: "add here", href: "#" },
  linkedin: { label: "add here", href: "#" },
  email: { label: "add here", href: "#" },
  careers: { label: "add here", href: "#" },
} as const;

export const LINKS = SOCIAL;

/** Routes that use a full-viewport hero (light header at top). */
export const HERO_ROUTES = ["/", "/about", "/solutions", "/products", "/impact", "/careers", "/contact"] as const;

export const JOURNEY = [
  {
    key: "source",
    label: "Source",
    title: "Sourced with intent",
    body: "Produce, proteins, dairy and dry goods are sourced from growers, fishers and manufacturers, with quality and food-safety standards applied before anything moves.",
  },
  {
    key: "prepare",
    label: "Prepare",
    title: "Held to standard",
    body: "Goods are received, inspected and stored in temperature-controlled environments so cold chain and quality hold from intake to dispatch.",
  },
  {
    key: "distribute",
    label: "Distribute",
    title: "Built into orders",
    body: "Orders are assembled across a national network of distribution centres, combining thousands of items into single, operator-ready deliveries.",
  },
  {
    key: "deliver",
    label: "Deliver",
    title: "Moved across Canada",
    body: "A refrigerated fleet runs planned routes to cities, small towns and remote communities — through Canadian distance and Canadian weather.",
  },
  {
    key: "serve",
    label: "Serve",
    title: "Served to guests",
    body: "The order lands in the kitchen: restaurants, hotels, hospitals, schools and community operators put it on the plate.",
  },
] as const;

export const SOLUTIONS = [
  {
    label: "Products",
    title: "A broadline range under one order",
    body: "Fresh produce, proteins, seafood, dairy, bakery, frozen, dry goods, beverages, disposables and cleaning supplies — consolidated instead of chased across a dozen suppliers.",
  },
  {
    label: "Supply",
    title: "Supply chain that absorbs the shocks",
    body: "Sourcing relationships and inventory depth help kitchens keep menus intact when a single item, season or route becomes difficult.",
  },
  {
    label: "Distribution",
    title: "Temperature-controlled delivery",
    body: "Distribution centres and a refrigerated fleet move cold, frozen and ambient goods on scheduled deliveries across Canadian regions.",
  },
  {
    label: "Culinary Support",
    title: "Culinary expertise on the line",
    body: "Chefs and specialists help operators with menu development, product selection, plate costing and finding the right substitution.",
  },
  {
    label: "Business Support",
    title: "Support beyond the delivery",
    body: "Sales consultants and digital ordering tools help operators manage ordering, order history and day-to-day running of the business.",
  },
] as const;

export const PRODUCTS = [
  { label: "Produce", body: "Fresh fruit and vegetables, prepped and whole." },
  { label: "Meat & Poultry", body: "Portioned and bulk cuts for volume kitchens." },
  { label: "Seafood", body: "Fresh and frozen fish and shellfish." },
  { label: "Dairy & Eggs", body: "Milk, cream, cheese, butter and eggs." },
  { label: "Bakery", body: "Breads, rolls, pastry and dessert." },
  { label: "Frozen", body: "Vegetables, proteins, appetizers and desserts." },
  { label: "Dry & Canned Goods", body: "Pantry staples, oils, sauces and seasonings." },
  { label: "Beverages", body: "Coffee, tea, juice and soft drinks." },
  { label: "Disposables & Packaging", body: "Takeout, service and front-of-house supplies." },
  { label: "Cleaning & Sanitation", body: "Kitchen chemicals, wares and safety supplies." },
] as const;

export const SEGMENTS = [
  "Restaurants",
  "Hotels & hospitality",
  "Healthcare",
  "Education",
  "Retail & convenience",
  "Recreation & entertainment",
] as const;
