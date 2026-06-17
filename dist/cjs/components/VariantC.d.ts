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
export declare const VariantC: React.FC<VariantCProps>;
//# sourceMappingURL=VariantC.d.ts.map