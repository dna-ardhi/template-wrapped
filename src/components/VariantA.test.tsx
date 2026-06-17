import { render, screen } from '@testing-library/react';
import { VariantA } from './VariantA';

describe('VariantA', () => {
  it('renders title', () => {
    render(<VariantA title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<VariantA title="Test" description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(<VariantA title="Test" image="https://example.com/image.jpg" />);
    const img = screen.getByAltText('Test');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders CTA with default text', () => {
    render(<VariantA title="Test" />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders CTA with custom text', () => {
    render(<VariantA title="Test" ctaText="Custom CTA" />);
    expect(screen.getByText('Custom CTA')).toBeInTheDocument();
  });

  it('renders as anchor with href', () => {
    render(<VariantA title="Test" href="https://example.com" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('calls onClick when CTA is clicked', () => {
    const handleClick = jest.fn();
    render(<VariantA title="Test" onClick={handleClick} />);
    
    const cta = screen.getByRole('button');
    cta.click();
    
    expect(handleClick).toHaveBeenCalled();
  });
});
