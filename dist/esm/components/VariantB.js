import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './variantB.css';
import '../styles/variables.css';
export const VariantB = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', ctaText = 'Learn More', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return _jsx("a", { href: href, className: "tw-cta", children: ctaText });
        }
        return _jsx("button", { onClick: onClick, className: "tw-cta", children: ctaText });
    };
    return (_jsxs("div", { className: "tw-container tw-variant-b", style: containerStyle, children: [isBackgroundImage && (_jsxs(_Fragment, { children: [_jsx("div", { className: "tw-image-placeholder", children: _jsx("span", { children: "No Image" }) }), _jsx("div", { className: "tw-overlay", style: { backgroundColor: 'rgba(0,0,0,0.4)' } })] })), _jsxs("div", { className: "tw-variant-b-content", children: [_jsx("h1", { className: "tw-title", children: title }), description && _jsx("p", { className: "tw-description", children: description })] }), _jsx("div", { className: "tw-variant-b-footer", children: renderCTA() })] }));
};
//# sourceMappingURL=VariantB.js.map