# Policy Pages — Fix Text Color

**Pages:** Terms & Conditions, Privacy Policy, Refund Policy, Safety Information  
**Source:** PDF Pages 10, 11, 12, 13

---

## Pages Affected

| Page | URL |
|------|-----|
| Terms & Conditions | https://skyrock.vercel.app/terms |
| Privacy Policy | https://skyrock.vercel.app/privacy |
| Refund Policy | https://skyrock.vercel.app/refund |
| Safety Information | https://skyrock.vercel.app/safety |

---

## Problem

On all 4 policy/info pages, the **body text is nearly invisible** — it appears as very light grey/white text on a white/cream background, making it unreadable.

---

## Fix Required

Update the text color on all body content in these pages to be **clearly readable**.

### Recommended Colors (per CI)
- **Body text:** Use dark color — either `#510E29` (Maroon) or `#333333` (dark grey) or `#5B5C02` (Safari Green)
- **Headings:** Use `#510E29` (Maroon) or `#5B5C02` (Safari Green)
- **Background:** Keep as Neutral Cream `#F6EDDF` or white

### Specific Fix
- The text is currently rendering with very low opacity or white/near-white color
- Check CSS for `.prose`, `p`, `li`, `h2`, `h3` selectors on these pages
- Ensure text color is set explicitly to a dark, readable color

---

## Action Items

- [ ] Fix text color on `/terms` page — all body text must be clearly readable
- [ ] Fix text color on `/privacy` page — all body text must be clearly readable
- [ ] Fix text color on `/refund` page — all body text must be clearly readable
- [ ] Fix text color on `/safety` page — all body text must be clearly readable
- [ ] The "Safety Information" page has colored info cards (green, red, yellow) — ensure those card texts are also readable
