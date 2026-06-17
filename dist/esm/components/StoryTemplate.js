import { jsx as _jsx } from "react/jsx-runtime";
import { VariantA } from './VariantA';
import { VariantB } from './VariantB';
import { VariantC } from './VariantC';
export const StoryTemplate = ({ variant = 'A', ...props }) => {
    switch (variant) {
        case 'A':
            return _jsx(VariantA, { ...props });
        case 'B':
            return _jsx(VariantB, { ...props });
        case 'C':
            return _jsx(VariantC, { ...props });
        default:
            return _jsx(VariantA, { ...props });
    }
};
//# sourceMappingURL=StoryTemplate.js.map