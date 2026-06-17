import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './variantA.css';
import '../styles/variables.css';
export const VariantA = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Get Started', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return (_jsx("a", { href: href, className: "vs-cta", children: ctaText }));
        }
        return (_jsx("button", { onClick: onClick, className: "vs-cta", children: ctaText }));
    };
    return (_jsxs("div", { className: "vs-container vs-variant-a", style: containerStyle, children: [isBackgroundImage && !image && (_jsx("div", { className: "vs-overlay", style: { backgroundColor: 'rgba(0,0,0,0.5)' } })), _jsxs("div", { className: "vs-variant-a-header", children: [_jsx("h1", { className: "vs-title", children: title }), description && _jsx("p", { className: "vs-description", children: description })] }), _jsx("div", { className: "vs-variant-a-image", children: image && _jsx("img", { src: image, alt: title, className: "vs-image" }) }), _jsx("div", { className: "vs-variant-a-footer", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantA.js.map