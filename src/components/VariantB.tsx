import React from 'react';
import './variantB.css';
import '../styles/variables.css';

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
    ? { backgroundImage: `url(${background})` }
    : { backgroundColor: background };

  const renderCTA = () => {
    if (href) {
      return <a href={href} className="tw-cta">{ctaText}</a>;
    }
    return <button onClick={onClick} className="tw-cta">{ctaText}</button>;
  };

  return (
    <div className="tw-container tw-variant-b" style={containerStyle}>
      {isBackgroundImage && (
        <>
          <div className="tw-image-placeholder"><span>No Image</span></div>
          <div className="tw-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} />
        </>
      )}

      <div className="tw-variant-b-content">
        <h1 className="tw-title">{title}</h1>
        {description && <p className="tw-description">{description}</p>}
      </div>

      <div className="tw-variant-b-footer">{renderCTA()}</div>
    </div>
  );
};
