export interface StoryTemplateProps {
  /** Background color or image URL */
  background?: string;
  /** Background is image if true, otherwise color */
  isBackgroundImage?: boolean;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Image source URL (for variants that support it) */
  image?: string;
  /** CTA text */
  ctaText?: string;
  /** CTA href (for navigation) */
  href?: string;
  /** CTA click handler (for actions) */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Variant to render: 'A', 'B', or 'C' */
  variant?: 'A' | 'B' | 'C';
}
