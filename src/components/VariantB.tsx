import React from 'react';
import { sharedStyles, variantBStyles } from '../styles/styles';

export interface VariantBProps {
  background?: string;
  isBackgroundImage?: boolean;
  title: string;
  description?: string;
  ctaText?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export type VariantBType = 'B';

export const VariantB: React.FC<VariantBProps> = ({
  background = '#1a1a1a',
  isBackgroundImage = false,
  title,
  description = '',
  ctaText = 'Learn More',
  href,
  onClick,
}) => {
  const containerStyle: React.CSSProperties = isBackgroundImage
    ? { ...sharedStyles.twContainer, backgroundImage: `url(${background})` }
    : { ...sharedStyles.twContainer, backgroundColor: background };

  const renderCTA = () => {
    const baseStyle = { ...sharedStyles.twCta };
    const ctaStyle = href ? baseStyle : { ...baseStyle, ...sharedStyles.twCtaActive };

    if (href) {
      return <a href={href} style={ctaStyle}>{ctaText}</a>;
    }
    return <button onClick={onClick} style={ctaStyle}>{ctaText}</button>;
  };

  return (
    <div style={{ ...sharedStyles.twContainer, ...variantBStyles.container, ...containerStyle }}>
      {isBackgroundImage && (
        <>
          <div style={sharedStyles.twPlaceholder}><span style={sharedStyles.twPlaceholderText}>No Image</span></div>
          <div style={{ ...sharedStyles.twOverlay, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        </>
      )}

      <div style={variantBStyles.content}>
        <h1 style={sharedStyles.twTitle}>{title}</h1>
        {description && <p style={sharedStyles.twDescription}>{description}</p>}
      </div>

      <div style={variantBStyles.footer}>{renderCTA()}</div>
    </div>
  );
};
