import { render, screen } from '@testing-library/react';
import { VariantB } from './VariantB';

describe('VariantB', () => {
  it('renders title', () => {
    render(<VariantB title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<VariantB title="Test" description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders CTA with default text', () => {
    render(<VariantB title="Test" />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders CTA with custom text', () => {
    render(<VariantB title="Test" ctaText="Custom CTA" />);
    expect(screen.getByText('Custom CTA')).toBeInTheDocument();
  });

  it('renders as anchor with href', () => {
    render(<VariantB title="Test" href="https://example.com" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('calls onClick when CTA is clicked', () => {
    const handleClick = jest.fn();
    render(<VariantB title="Test" onClick={handleClick} />);
    
    const cta = screen.getByRole('button');
    cta.click();
    
    expect(handleClick).toHaveBeenCalled();
  });
});
