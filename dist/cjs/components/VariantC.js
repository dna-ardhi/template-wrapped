"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantC = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./variantC.css");
require("../styles/variables.css");
const VariantC = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', image, ctaText = 'Start Now', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return (0, jsx_runtime_1.jsx)("a", { href: href, className: "tw-cta", children: ctaText });
        }
        return (0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "tw-cta", children: ctaText });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tw-container tw-variant-c", style: containerStyle, children: [isBackgroundImage && (image ? ((0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: "tw-content-image" })) : ((0, jsx_runtime_1.jsx)("div", { className: "tw-placeholder", children: (0, jsx_runtime_1.jsx)("span", { children: "No Image" }) }))), !isBackgroundImage && (0, jsx_runtime_1.jsx)("div", { className: "tw-overlay", style: { backgroundColor: 'rgba(0,0,0,0.6)' } }), (0, jsx_runtime_1.jsxs)("div", { className: "tw-variant-c-content", children: [(0, jsx_runtime_1.jsx)("h1", { className: "tw-title", children: title }), description && (0, jsx_runtime_1.jsx)("p", { className: "tw-description", children: description })] }), (0, jsx_runtime_1.jsx)("div", { className: "tw-variant-c-footer", children: !isBackgroundImage && image && (0, jsx_runtime_1.jsx)("img", { src: image, alt: title, className: "tw-content-image" }) }), (0, jsx_runtime_1.jsx)("div", { className: "tw-variant-c-cta", children: renderCTA() })] }));
};
exports.VariantC = VariantC;
//# sourceMappingURL=VariantC.js.map