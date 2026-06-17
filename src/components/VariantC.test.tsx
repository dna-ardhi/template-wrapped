import { render, screen } from '@testing-library/react';
import { VariantC } from './VariantC';

describe('VariantC', () => {
  it('renders title', () => {
    render(<VariantC title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<VariantC title="Test" description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(<VariantC title="Test" image="https://example.com/image.jpg" />);
    const img = screen.getByAltText('Test');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders CTA with default text', () => {
    render(<VariantC title="Test" />);
    expect(screen.getByText('Start Now')).toBeInTheDocument();
  });

  it('renders CTA with custom text', () => {
    render(<VariantC title="Test" ctaText="Custom CTA" />);
    expect(screen.getByText('Custom CTA')).toBeInTheDocument();
  });

  it('renders as anchor with href', () => {
    render(<VariantC title="Test" href="https://example.com" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('calls onClick when CTA is clicked', () => {
    const handleClick = jest.fn();
    render(<VariantC title="Test" onClick={handleClick} />);
    
    const cta = screen.getByRole('button');
    cta.click();
    
    expect(handleClick).toHaveBeenCalled();
  });
});
