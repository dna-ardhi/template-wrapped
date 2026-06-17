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
export declare const VariantB: React.FC<VariantBProps>;
//# sourceMappingURL=VariantB.d.ts.map