"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantB = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./variantB.css");
require("../styles/variables.css");
const VariantB = ({ background = '#1a1a1a', isBackgroundImage = false, title, description = '', ctaText = 'Learn More', href, onClick, }) => {
    const containerStyle = isBackgroundImage
        ? { backgroundImage: `url(${background})` }
        : { backgroundColor: background };
    const renderCTA = () => {
        if (href) {
            return ((0, jsx_runtime_1.jsx)("a", { href: href, className: "vs-cta", children: ctaText }));
        }
        return ((0, jsx_runtime_1.jsx)("button", { onClick: onClick, className: "vs-cta", children: ctaText }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "vs-container vs-variant-b", style: containerStyle, children: [isBackgroundImage && ((0, jsx_runtime_1.jsx)("div", { className: "vs-overlay", style: { backgroundColor: 'rgba(0,0,0,0.4)' } })), (0, jsx_runtime_1.jsxs)("div", { className: "vs-variant-b-content", children: [(0, jsx_runtime_1.jsx)("h1", { className: "vs-title", children: title }), description && (0, jsx_runtime_1.jsx)("p", { className: "vs-description", children: description })] }), (0, jsx_runtime_1.jsx)("div", { className: "vs-variant-b-footer", children: renderCTA() })] }));
};
exports.VariantB = VariantB;
//# sourceMappingURL=VariantB.js.map