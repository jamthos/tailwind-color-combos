# Tailwind Color Combos

See demo site:  
https://tailwind-color-combos.netlify.app

When creating a theme system for a recent project, I wanted to see how combinations from the default Tailwind color palette would work together. This app is a way to choose a primary, secondary and tertiary color from the extended Tailwind color palette and see how they harmonize in real time inside a sample layout.

With this technique, you can create templates using custom color value tailwind classes like `text-main-500`, or `bg-secondary-200`, and then you can change the colors that apply to these classes per page, per template, or on the fly, by dynamically updating the related custom css properties.

## Motivation

My goal was to have a single template that defined element's colors as _main_, _secondary_, _tertiary_, and _neutral_, not as hard coded colors. I wanted to give content creators the ability to pick between a few different color themes as it applied to their content. Defining a color theme looks like this:

```javascript
const defaultTheme = {
  primary: "rose",
  secondary: "sky",
  tertiary: "pink",
  neutral: "trueGray",
}
```

This example uses color names from the default Tailwind color palette, but any colors defined in your Tailwind config will work. This object gets passed to a function which returns a CSS object defining custom properties that will apply to your tailwind classes. This CSS object can be applied to any element in your page (like the wrapper or layout element) via the style prop and the theme is updated.
