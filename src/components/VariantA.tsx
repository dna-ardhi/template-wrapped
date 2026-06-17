import React from 'react';
import './variantA.css';
import '../styles/variables.css';

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
    ? { backgroundImage: `url(${background})` }
    : { backgroundColor: background };

  const renderCTA = () => {
    if (href) {
      return <a href={href} className="tw-cta">{ctaText}</a>;
    }
    return <button onClick={onClick} className="tw-cta">{ctaText}</button>;
  };

  return (
    <div className="tw-container tw-variant-a" style={containerStyle}>
      {isBackgroundImage && (
        image ? (
          <img src={image} alt={title} className="tw-image" />
        ) : (
          <div className="tw-placeholder"><span>No Image</span></div>
        )
      )}
      {!isBackgroundImage && <div className="tw-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />}

      <div className="tw-variant-a-header">
        <h1 className="tw-title">{title}</h1>
        {description && <p className="tw-description">{description}</p>}
      </div>

      <div className="tw-variant-a-image">
        {!isBackgroundImage && image && <img src={image} alt={title} className="tw-image" />}
      </div>

      <div className="tw-variant-a-footer">{renderCTA()}</div>
    </div>
  );
};
