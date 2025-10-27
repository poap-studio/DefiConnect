// Image constants mapping for deployment - using actual Figma assets
export const images = {
  // POAP and collection images
  generalAttendance: "/general-attendance.png",
  collection: "/assets/collection-bg.png",
  
  // Brand assets
  defiConnectLogo: "/deficonnect-logo.svg",
  defiConnectLogoWhite: "/deficonnect-logo-white.svg",
  defiConnectLogoFooter: "/deficonnect-logo.svg",
  
  // Background graphics
  heroVector: "/hero-vector.svg",
  heroGroup: "/hero-group.svg",
  heroGroup8: "/hero-group8.svg",
  backgroundMap: "/background-map.png",
  mapLevel1: "/map-level-1.png",
  collectionBg: "/collection-bg.png",
  
  // Reward images
  collectorPin: "/reward-image.png",
  rewardImage1: "/reward-image.png",
  rewardImage2: "/reward-image.png",
  
  // Icons and graphics
  calendarIcon: "/assets/calendar-icon.svg",
  locationIcon: "/assets/location-icon.svg",
  searchIcon: "/assets/search-icon.svg",
  externalLinkIcon: "/assets/external-link-icon.svg",
  menuIcon: "/assets/menu-icon.svg",
  circleGraphic: "/circle-graphic.svg",
  vectorGraphic: "/assets/vector-graphic.svg",
  unionGraphic: "/union-graphic.svg",
  
  // Navigation bullets
  bullets1: "/assets/bullets-1.svg",
  bullets2: "/assets/bullets-2.svg",
  bullets3: "/assets/bullets-3.svg",
  
  // Lines and dividers
  line1: "/assets/line-1.svg",
  line2: "/assets/line-2.svg",
  
  // POAP related icons
  poapIcon: "/assets/poap-icon.svg",
} as const

export type ImageKey = keyof typeof images