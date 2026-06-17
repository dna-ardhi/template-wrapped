import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './variantA.css';
import '../styles/variables.css';
export const VariantA = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Get Started', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return _jsx("a", { href: href, className: "tw-cta", children: ctaText });
        }
        return _jsx("button", { onClick: onClick, className: "tw-cta", children: ctaText });
    };
    return (_jsxs("div", { className: "tw-container tw-variant-a", style: containerStyle, children: [isBackgroundImage && (image ? (_jsx("img", { src: image, alt: title, className: "tw-image" })) : (_jsx("div", { className: "tw-placeholder", children: _jsx("span", { children: "No Image" }) }))), !isBackgroundImage && _jsx("div", { className: "tw-overlay", style: { backgroundColor: 'rgba(0,0,0,0.5)' } }), _jsxs("div", { className: "tw-variant-a-header", children: [_jsx("h1", { className: "tw-title", children: title }), description && _jsx("p", { className: "tw-description", children: description })] }), _jsx("div", { className: "tw-variant-a-image", children: !isBackgroundImage && image && _jsx("img", { src: image, alt: title, className: "tw-image" }) }), _jsx("div", { className: "tw-variant-a-footer", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantA.js.map