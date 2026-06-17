import React from 'react';
import './variantC.css';
import '../styles/variables.css';

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
    ? { backgroundImage: `url(${background})` }
    : { backgroundColor: background };

  const renderCTA = () => {
    if (href) {
      return <a href={href} className="tw-cta">{ctaText}</a>;
    }
    return <button onClick={onClick} className="tw-cta">{ctaText}</button>;
  };

  return (
    <div className="tw-container tw-variant-c" style={containerStyle}>
      {isBackgroundImage && (
        image ? (
          <img src={image} alt={title} className="tw-content-image" />
        ) : (
          <div className="tw-placeholder"><span>No Image</span></div>
        )
      )}
      {!isBackgroundImage && <div className="tw-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />}

      <div className="tw-variant-c-content">
        <h1 className="tw-title">{title}</h1>
        {description && <p className="tw-description">{description}</p>}
      </div>

      <div className="tw-variant-c-footer">
        {!isBackgroundImage && image && <img src={image} alt={title} className="tw-content-image" />}
      </div>

      <div className="tw-variant-c-cta">{renderCTA()}</div>
    </div>
  );
};