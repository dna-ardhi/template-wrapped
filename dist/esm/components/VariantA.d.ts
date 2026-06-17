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
export declare const VariantA: React.FC<VariantAProps>;
//# sourceMappingURL=VariantA.d.ts.map