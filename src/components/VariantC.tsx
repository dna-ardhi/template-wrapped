import React from 'react';
import { sharedStyles, variantCStyles } from '../styles/styles';

export interface VariantCProps {
  background?: string;
  isBackgroundImage?: boolean;
  title: string;
  description?: string;
  image?: string;
  ctaText?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export type VariantCType = 'C';

export const VariantC: React.FC<VariantCProps> = ({
  background = '#1a1a1a',
  isBackgroundImage = false,
  title,
  description = '',
  image,
  ctaText = 'Start Now',
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
    <div style={{ ...sharedStyles.twContainer, ...variantCStyles.container, ...containerStyle }}>
      {isBackgroundImage && (
        image ? (
          <img src={image} alt={title} style={sharedStyles.twContentImage} />
        ) : (
          <div style={sharedStyles.twPlaceholder}><span style={sharedStyles.twPlaceholderText}>No Image</span></div>
        )
      )}
      {!isBackgroundImage && <div style={{ ...sharedStyles.twOverlay, backgroundColor: 'rgba(0,0,0,0.6)' }} />}

      <div style={variantCStyles.content}>
        <h1 style={sharedStyles.twTitle}>{title}</h1>
        {description && <p style={sharedStyles.twDescription}>{description}</p>}
      </div>

      <div style={variantCStyles.footer}>
        {!isBackgroundImage && image && <img src={image} alt={title} style={sharedStyles.twContentImage} />}
      </div>

      <div style={variantCStyles.cta}>{renderCTA()}</div>
    </div>
  );
};
