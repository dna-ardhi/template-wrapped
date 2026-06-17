"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryTemplate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const VariantA_1 = require("./VariantA");
const VariantB_1 = require("./VariantB");
const VariantC_1 = require("./VariantC");
const StoryTemplate = ({ variant = 'A', ...props }) => {
    switch (variant) {
        case 'A':
            return (0, jsx_runtime_1.jsx)(VariantA_1.VariantA, { ...props });
        case 'B':
            return (0, jsx_runtime_1.jsx)(VariantB_1.VariantB, { ...props });
        case 'C':
            return (0, jsx_runtime_1.jsx)(VariantC_1.VariantC, { ...props });
        default:
            return (0, jsx_runtime_1.jsx)(VariantA_1.VariantA, { ...props });
    }
};
exports.StoryTemplate = StoryTemplate;
//# sourceMappingURL=StoryTemplate.js.map