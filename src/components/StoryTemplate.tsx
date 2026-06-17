import React from 'react';
import { VariantA, VariantAProps } from './VariantA';
import { VariantB, VariantBProps } from './VariantB';
import { VariantC, VariantCProps } from './VariantC';
import { StoryTemplateProps } from '../types';

export type StoryTemplateVariant = 'A' | 'B' | 'C';

export interface StoryTemplateComponentProps extends StoryTemplateProps {
  variant?: StoryTemplateVariant;
}

export const StoryTemplate: React.FC<StoryTemplateComponentProps> = ({
  variant = 'A',
  ...props
}) => {
  switch (variant) {
    case 'A':
      return <VariantA {...(props as VariantAProps)} />;
    case 'B':
      return <VariantB {...(props as VariantBProps)} />;
    case 'C':
      return <VariantC {...(props as VariantCProps)} />;
    default:
      return <VariantA {...(props as VariantAProps)} />;
  }
};
