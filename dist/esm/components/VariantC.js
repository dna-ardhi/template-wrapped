import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './variantC.css';
import '../styles/variables.css';
export const VariantC = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Start Now', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return _jsx("a", { href: href, className: "tw-cta", children: ctaText });
        }
        return _jsx("button", { onClick: onClick, className: "tw-cta", children: ctaText });
    };
    return (_jsxs("div", { className: "tw-container tw-variant-c", style: containerStyle, children: [isBackgroundImage && (image ? (_jsx("img", { src: image, alt: title, className: "tw-content-image" })) : (_jsx("div", { className: "tw-placeholder", children: _jsx("span", { children: "No Image" }) }))), !isBackgroundImage && _jsx("div", { className: "tw-overlay", style: { backgroundColor: 'rgba(0,0,0,0.6)' } }), _jsxs("div", { className: "tw-variant-c-content", children: [_jsx("h1", { className: "tw-title", children: title }), description && _jsx("p", { className: "tw-description", children: description })] }), _jsx("div", { className: "tw-variant-c-footer", children: !isBackgroundImage && image && _jsx("img", { src: image, alt: title, className: "tw-content-image" }) }), _jsx("div", { className: "tw-variant-c-cta", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantC.js.map