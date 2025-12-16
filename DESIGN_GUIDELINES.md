# MakeForm Documentation Design Guidelines

## Overview
This document outlines the design principles, styling conventions, and progress tracking for the MakeForm help center documentation.

---

## UI Element Styling Convention

### Standard Style
All UI elements (buttons, tabs, field names, menu items, etc.) that users can click or interact with should use **cyan styling**:

```jsx
<span className="text-cyan-500 font-bold bg-cyan-100 px-2 py-1 rounded">Element Name</span>
```

### What to Style
Apply cyan styling to:
- ✅ **Buttons** - Any clickable button (e.g., "Publish", "New Form", "Rename")
- ✅ **Tabs** - Navigation tabs (e.g., "Share", "Summary", "Submissions")
- ✅ **Menu Items** - Dropdown options and menu selections
- ✅ **Field Labels** - Form field names and labels (e.g., "Label", "Field", "Operator")
- ✅ **Icons/Triggers** - Clickable icons (e.g., "⋯" three-dot menu)
- ✅ **Settings Options** - Configuration options and setting names
- ✅ **UI Sections** - Named sections in the interface (e.g., "Link Settings")

### Visual Example
```markdown
Click the <span className="text-cyan-500 font-bold bg-cyan-100 px-2 py-1 rounded">Publish</span> button to make your form live.
```

---

## Content Structure Guidelines

### Page Organization
Following Tally's progressive complexity model:
1. **Begin Your Journey** - Foundation and getting started
2. **Customize to Your Own** - Customization and configuration
3. **Advanced Features** - Complex functionality
4. **Deployment** - Publishing and sharing

### Current "Begin Your Journey" Order
1. 📄 Create a form
2. 🗂️ Form templates
3. 🏷️ Name question fields
4. 📑 Create a multi-page form
5. 🚀 Publish your form

---

## Completed Pages

### Guides (✅ Styling Applied)
- ✅ **guides/create-form.mdx**
  - Styled: "Try for Free", "New Form"
  - Enhanced: Added "In the chat interface" and "to the AI chatbot" for clarity

- ✅ **guides/form-templates.mdx**
  - Styled: "Templates"

- ✅ **guides/publish.mdx**
  - Styled: "Publish"

- ✅ **guides/how-to-rename-forms.mdx**
  - Styled: "⋯" (three-dot menu), "Rename" (multiple instances)

- ✅ **guides/name-question-fields.mdx**
  - Styled: "Summary", "Submissions", "Label", "Figure 2"
  - Note: Has broken link to `../get-start` on line 56 (should be `./how-to-rename-forms`)

- ✅ **guides/customize-form.mdx**
  - Styled: "Customize"

- ✅ **guides/create-a-multi-page-form.mdx**
  - Styled: "+" button

### Features (✅ Styling Applied)
- ✅ **features/share-settings.mdx** (merged from link-preview.mdx + share-setting.mdx)
  - Styled: "Share" tab, "Link Settings", "Customize text", "Customize image", "Customize favicon"
  - Added: QR code download section from old share-setting.mdx
  - Note: Renamed from "Link Preview" to "Share Settings" for clarity

- ✅ **features/conditional-logic.mdx**
  - Styled: "Add conditional logic to this page", "Field", "Operator", "Value", "Go to", "Default Action", "Logic Flow"

### Main Pages (✅ Fixed Links)
- ✅ **pages/index.mdx** (Help Center main page)
  - Fixed: Changed `./get-start` to `./guides`

- ✅ **pages/guides.mdx** (Getting Started overview)
  - Fixed all paths from `./get-start/` to `./guides/`
  - Added missing guide pages to both sections

---

## Pending Pages

### Guides (⏳ Needs Styling Review)
- ⏳ **guides/form-settings.mdx**
  - Needs review for setting names and UI elements to style
  - Many potential elements: "Settings" tab, various setting options

- ⏳ **guides/supported-languages.mdx**
  - Needs review for UI elements (language dropdown, etc.)

### Features (⏳ Needs Styling Review)
- ⏳ **features/headings.mdx**
- ⏳ **features/long-text-input.mdx**
- ⏳ **features/multi-select.mdx**
- ⏳ **features/multiple-choice.mdx**
- ⏳ **features/opinion-scale.mdx**
- ⏳ **features/rating.mdx**
- ⏳ **features/short-text-input.mdx**
- ⏳ **features/summary-detail.mdx**
- ⏳ **features/text.mdx**
- ⏳ **features/address-input.mdx**
- ⏳ **features/currency-input.mdx**
- ⏳ **features/date-picker.mdx**
- ⏳ **features/email-input.mdx**
- ⏳ **features/link-input.mdx**
- ⏳ **features/number-input.mdx**
- ⏳ **features/phone-input.mdx**
- ⏳ **features/range-slider.mdx**
- ⏳ **features/ranking-input.mdx**
- ⏳ **features/single-select.mdx**
- ⏳ **features/time-input.mdx**
- ⏳ **features/checkboxes.mdx**
- ⏳ **features/custom-domain.mdx**
- ⏳ **features/email-notifications.mdx**
- ⏳ **features/file-upload.mdx**
- ⏳ **features/geo-capture.mdx**
- ⏳ **features/hidden-fields.mdx**
- ⏳ **features/remove-makeform-branding.mdx**
- ⏳ **features/signature.mdx**

---

## Known Issues to Fix

### Broken Links
~~1. **guides/name-question-fields.mdx:56**~~ ✅ **FIXED**
   - ~~Current: `<Link href="../get-start">`~~
   - ~~Should be: `<Link href="./how-to-rename-forms">`~~
   - Fixed on 2024-12-15

### Content Improvements
- Consider adding more guide pages under "Customize to Your Own" section
- Review feature pages for consistency with established patterns

---

## Design Decisions Log

### 2024 - Content Consolidation (Share Settings)
- **Decision**: Merged `link-preview.mdx` and `share-setting.mdx` into `share-settings.mdx`
- **Rationale**: 80% content overlap, one comprehensive page is better than two redundant ones
- **Impact**:
  - Eliminated duplicate content
  - Added QR code section to comprehensive share settings page
  - Updated all references to point to new unified page
  - Improved user experience with single authoritative source

### 2024 - Styling Standardization
- **Decision**: Use only cyan styling for all UI elements (removed gray styling distinction)
- **Rationale**: Simplifies design system and improves consistency
- **Impact**: All clickable/interactive elements now have uniform appearance

### 2024 - Path Structure Fix
- **Decision**: Changed all guide links from `./get-start/` to `./guides/`
- **Rationale**: The `get-start` directory doesn't exist; guides are in `./guides/`
- **Impact**: All navigation links now work correctly

### 2024 - Content Organization
- **Decision**: Follow Tally's progressive complexity model
- **Rationale**: Industry best practice for onboarding documentation
- **Impact**: Guides are organized from basic to advanced

---

## Future Tasks

### High Priority
- [ ] Review and apply styling to `guides/form-settings.mdx`
- [ ] Review and apply styling to `guides/supported-languages.mdx`
- [x] Fix broken link in `guides/name-question-fields.mdx` ✅ **COMPLETED**
- [ ] Audit all feature pages for UI elements needing styling

### Medium Priority
- [ ] Review all feature documentation pages for consistency
- [ ] Consider adding "Share Your Form" section (like Tally)
- [ ] Add more advanced customization guides

### Low Priority
- [ ] Create style guide component library for common patterns
- [ ] Document image requirements and best practices
- [ ] Review SEO and meta descriptions across all pages

---

## Reference: Tally's Help Center Structure
Used as inspiration for organization:
1. Start Here - Foundational topics
2. Make it Your Own - Customization
3. Share Your Form - Distribution
4. Settings - Configuration
5. Block Settings - Advanced features
6. Additional Resources - External links

---

## Maintenance Notes

### When Adding New Documentation
1. Apply cyan styling to all UI elements
2. Follow progressive complexity model
3. Use clear, concise language
4. Include screenshots where helpful
5. Test all links before publishing

### When Updating Existing Pages
1. Maintain consistent styling
2. Update this document with changes
3. Check for broken links
4. Ensure screenshots are current

---

**Last Updated**: 2024-12-15
**Maintained By**: Development Team
