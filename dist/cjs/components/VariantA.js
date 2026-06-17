"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantA = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./variantA.css");
require("../styles/variables.css");
const VariantA = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Get Started', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return (0, jsx_runtime_1.jsx)("a", { href: href, className: "tw-cta", children: ctaText });
        }
        return (0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "tw-cta", children: ctaText });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tw-container tw-variant-a", style: containerStyle, children: [isBackgroundImage && (image ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: "tw-image" })) : ((0, jsx_runtime_1.jsx)("div", { className: "tw-placeholder", children: (0, jsx_runtime_1.jsx)("span", { children: "No Image" }) }))), !isBackgroundImage && (0, jsx_runtime_1.jsx)("div", { className: "tw-overlay", style: { backgroundColor: 'rgba(0,0,0,0.5)' } }), (0, jsx_runtime_1.jsxs)("div", { className: "tw-variant-a-header", children: [(0, jsx_runtime_1.jsx)("h1", { className: "tw-title", children: title }), description && (0, jsx_runtime_1.jsx)("p", { className: "tw-description", children: description })] }), (0, jsx_runtime_1.jsx)("div", { className: "tw-variant-a-image", children: !isBackgroundImage && image && (0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: "tw-image" }) }), (0, jsx_runtime_1.jsx)("div", { className: "tw-variant-a-footer", children: renderCTA() })] }));
};
exports.VariantA = VariantA;
//# sourceMappingURL=VariantA.js.map