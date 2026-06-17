import React from 'react';
import { sharedStyles, variantAStyles } from '../styles/styles';

export interface VariantAProps {
  background?: string;
  isBackgroundImage?: boolean;
  title: string;
  description?: string;
  image?: string;
  ctaText?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export type VariantAType = 'A';

export const VariantA: React.FC<VariantAProps> = ({
  background = '#1a1a1a',
  isBackgroundImage = false,
  title,
  description = '',
  image,
  ctaText = 'Get Started',
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
    <div style={{ ...sharedStyles.twContainer, ...variantAStyles.container, ...containerStyle }}>
      {isBackgroundImage && (
        image ? (
          <img src={image} alt={title} style={sharedStyles.twImage} />
        ) : (
          <div style={sharedStyles.twPlaceholder}><span style={sharedStyles.twPlaceholderText}>No Image</span></div>
        )
      )}
      {!isBackgroundImage && <div style={{ ...sharedStyles.twOverlay, backgroundColor: 'rgba(0,0,0,0.5)' }} />}

      <div style={variantAStyles.header}>
        <h1 style={sharedStyles.twTitle}>{title}</h1>
        {description && <p style={sharedStyles.twDescription}>{description}</p>}
      </div>

      <div style={variantAStyles.image}>
        {!isBackgroundImage && image && <img src={image} alt={title} style={sharedStyles.twImage} />}
      </div>

      <div style={variantAStyles.footer}>{renderCTA()}</div>
    </div>
  );
};
