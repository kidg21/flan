// Codes for color palette
export const colors = {
  white: "hsl(101, 100%, 100%)",
  original_white: "hsl(34, 5%, 99%)",
  grey_light: "hsl(34, 5%, 95%)",
  grey_20: "hsl(34, 5%, 88%)",
  grey_40: "hsl(34, 5%, 72%)",
  grey_60: "hsl(34, 5%, 58%)",
  grey_80: "hsl(34, 5%, 36%)",
  grey_dark: "hsl(34, 5%, 28%)",
  black: "hsl(34, 5%, 12%)",
  anchor: "hsl(201, 56%, 60%)",
  success: "hsl(90, 46%, 46%)",
  warning: "hsl(34, 88%, 52%)",
  alert: "hsl(1, 55%, 50%)"
}

// Typefaces
export const fonts = {
  // primary: 'Muli, sans-serif',
  body: "Muli, Arial, sans-serif",
  headline: "Muli, Arial, sans-serif",
  data: "Muli, Arial, sans-serif"
}

// Sizes for typography scale
export const fontSize = {
  base: "14px"
  // paragraph: '1rem',
  // h1: '2.75rem',
  // h2: '2.3125rem',
  // h3: '1.6875rem',
  // h4: '1.4375rem',
  // h5: '1.125rem',
  // h6: '1rem',
  // xs: '12px',
  // sm: '14px',
  // lg: '18px',
  // xl: '20px',
  // xxl: '24px',
  // xxxl: '30px',
  // xxxxl: '36px'
}

// Sizes for typography scale
export const shadows = {
  cardShadow:
    "drop-shadow(0 0 1px hsl(34, 5%, 36%)) drop-shadow(0.25rem 0.25rem 0.25rem hsla(34, 5%, 36%, 0.333333));",
  dropShadow:
    "hsl(34, 5%, 36%) 0rem 0rem 1px, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem;",
  panelSectionShadow:
    "hsl(34, 5%, 36%) 0rem 0rem 1px, hsla(34, 5%, 36%, 0.333333) 0 0.1rem 0.5rem, hsla(34, 5%, 36%, 0.333333) 0 -0.1rem 0.5rem;",
  lightBorderShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsla(34, 5%, 36%, 0.333333) 0.25rem 0.25rem 0.5rem",
  checkedShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsla(34, 5%, 36%, 0.2) 2px 2px 2px",
  radioShadow:
    "hsl(34, 5%, 95%) -1px -1px 0 0 inset, hsl(34, 5%, 95%) 1px 1px 0 0 inset, hsl(34, 5%, 95%) -1px 1px 0 0 inset, hsl(34, 5%, 95%) 1px -1px 0 0 inset, hsla(34, 5%, 36%, 0.2) 2px 2px 2px"
}

export const data = {
  iceCream: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "pistachio", label: "Pistachio" },
    { value: "mint chocolate chip", label: "Mint Chocolate Chip" },
    { value: "cookie dough", label: "Cookie Dough" }
  ]
}
