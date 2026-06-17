import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './variantB.css';
import '../styles/variables.css';
export const VariantB = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', ctaText = 'Learn More', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return (_jsx("a", { href: href, className: "vs-cta", children: ctaText }));
        }
        return (_jsx("button", { onClick: onClick, className: "vs-cta", children: ctaText }));
    };
    return (_jsxs("div", { className: "vs-container vs-variant-b", style: containerStyle, children: [isBackgroundImage && (_jsx("div", { className: "vs-overlay", style: { backgroundColor: 'rgba(0,0,0,0.4)' } })), _jsxs("div", { className: "vs-variant-b-content", children: [_jsx("h1", { className: "vs-title", children: title }), description && _jsx("p", { className: "vs-description", children: description })] }), _jsx("div", { className: "vs-variant-b-footer", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantB.js.map