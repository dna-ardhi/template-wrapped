# template-wrapped

A reusable React component library for 9:16 vertical story templates, perfect for Instagram Stories, Spotify Wrapped, and similar vertical content formats.

## Features

- **Parent Component**: Single `StoryTemplate` wrapper with `variant` prop to switch between layouts
- **3 Template Variants**: Three distinct layout compositions for different storytelling needs
- **Image Placeholders**: Graceful fallback when image is not provided
- **Fully Customizable**: Override background, copy, images, and CTA behaviors via props
- **No Dependencies**: Built with React and Vanilla CSS only
- **TypeScript Ready**: Full TypeScript support with typed props

## Installation

```bash
npm install template-wrapped
# or
yarn add template-wrapped
```

## Usage

```tsx
import { StoryTemplate, VariantA, VariantB, VariantC } from 'template-wrapped';

// Using the parent component
<StoryTemplate
  variant="A"
  title="My Story"
  description="This is a great story"
  image="https://example.com/image.jpg"
  ctaText="Read More"
  href="https://example.com"
/>

// Or use variants directly
<VariantA
  title="My Story"
  description="This is a great story"
  image="https://example.com/image.jpg"
  ctaText="Read More"
  href="https://example.com"
/>

<VariantB
  title="My Story"
  description="This is a great story"
  ctaText="Learn More"
  onClick={(e) => console.log('Clicked!', e)}
/>

<VariantC
  title="My Story"
  description="This is a great story"
  image="https://example.com/image.jpg"
  ctaText="Start Now"
  background="#ff6b6b"
  isBackgroundImage={false}
/>
```

## Props

All variants accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `background` | `string` | `'#1a1a1a'` | Background color or image URL |
| `isBackgroundImage` | `boolean` | `false` | Set to `true` if background is an image URL |
| `title` | `string` | *required* | Title text |
| `description` | `string` | `''` | Description text |
| `image` | `string` | `undefined` | Image source URL (not used in Variant B) |
| `ctaText` | `string` | `'Get Started'` | CTA button text |
| `href` | `string` | `undefined` | CTA link href (for navigation) |
| `onClick` | `(e: MouseEvent) => void` | `undefined` | CTA click handler |

## Variants

### Variant A
Title at top, centered image in the middle (or placeholder), CTA at bottom.

### Variant B
Text-only layout with no image. Placeholder shown when `isBackgroundImage={true}`.

### Variant C
Full background image with centered text overlay and fixed bottom CTA.

## License

MIT
