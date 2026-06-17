import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './variantC.css';
import '../styles/variables.css';
export const VariantC = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Start Now', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return (_jsx("a", { href: href, className: "vs-cta", children: ctaText }));
        }
        return (_jsx("button", { onClick: onClick, className: "vs-cta", children: ctaText }));
    };
    return (_jsxs("div", { className: "vs-container vs-variant-c", style: containerStyle, children: [isBackgroundImage && (_jsx("div", { className: "vs-overlay", style: { backgroundColor: 'rgba(0,0,0,0.6)' } })), _jsxs("div", { className: "vs-variant-c-content", children: [_jsx("h1", { className: "vs-title", children: title }), description && _jsx("p", { className: "vs-description", children: description })] }), _jsx("div", { className: "vs-variant-c-footer", children: image && _jsx("img", { src: image, alt: title, className: "vs-content-image" }) }), _jsx("div", { className: "vs-variant-c-cta", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantC.js.map