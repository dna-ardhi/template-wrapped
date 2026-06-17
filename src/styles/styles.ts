// Shared CSS-in-JS styles for all variants

export const sharedStyles = {
  // Base container
  twContainer: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: 450,
    aspectRatio: '9/16',
    backgroundColor: '#1a1a1a',
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  // Text styles
  twTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
    lineHeight: 1.2,
  } as React.CSSProperties,

  twDescription: {
    fontSize: 16,
    fontWeight: 400,
    color: '#e5e5e5',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,

  // Image styles
  twImage: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    objectPosition: 'center',
  } as React.CSSProperties,

  twContentImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  } as React.CSSProperties,

  // Placeholder styles
  twPlaceholder: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    display: 'flex' as const,
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,

  twPlaceholderText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.7,
  } as React.CSSProperties,

  // CTA button styles
  twCta: {
    display: 'inline-flex' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    fontSize: 16,
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
  } as React.CSSProperties,

  twCtaHover: {
    backgroundColor: '#0056b3',
  } as React.CSSProperties,

  twCtaActive: {
    transform: 'scale(0.98)',
  } as React.CSSProperties,

  // Overlay
  twOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  } as React.CSSProperties,
};

// Variant A styles
export const variantAStyles = {
  container: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'space-between' as const,
    padding: '24px 20px',
  } as React.CSSProperties,

  header: {
    textAlign: 'center' as const,
    width: '100%',
  } as React.CSSProperties,

  image: {
    flexGrow: 1,
    display: 'flex' as const,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  } as React.CSSProperties,

  footer: {
    width: '100%',
    textAlign: 'center' as const,
    padding: '16px 0',
  } as React.CSSProperties,
};

// Variant B styles
export const variantBStyles = {
  container: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 20px',
  } as React.CSSProperties,

  content: {
    textAlign: 'center' as const,
    width: '100%',
  } as React.CSSProperties,

  footer: {
    width: '100%',
    textAlign: 'center' as const,
    padding: '16px 0 24px',
  } as React.CSSProperties,
};

// Variant C styles
export const variantCStyles = {
  container: {
    position: 'relative' as const,
    padding: 0,
  } as React.CSSProperties,

  content: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    textAlign: 'center' as const,
    zIndex: 1,
  } as React.CSSProperties,

  footer: {
    width: '100%',
    height: '50%',
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    zIndex: 0,
  } as React.CSSProperties,

  cta: {
    position: 'absolute' as const,
    bottom: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    width: '80%',
    textAlign: 'center' as const,
  } as React.CSSProperties,
};
