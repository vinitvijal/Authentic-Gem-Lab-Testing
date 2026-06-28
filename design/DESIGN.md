# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Laboratory of Alchemy"**

This design system is not a standard utility framework; it is a digital atelier. It balances the cold, clinical precision of gemological testing with the soulful, heritage-rich warmth of Indian craftsmanship. We achieve a "High-End Editorial" feel by rejecting the standard "boxed" web layouts in favor of intentional asymmetry, generous whitespace (the "luxury of breath"), and sophisticated tonal layering.

The interface should feel like a physical desk—layers of heavy cream paper, gold leaf accents, and translucent glass tools. By moving away from rigid grids and embracing overlapping elements, we create an experience that feels curated rather than generated.

---

## 2. Colors: Tonal Depth & Soul
The color palette avoids "pure" digital shades in favor of organic, pigment-inspired tones.

### Surface Hierarchy & The "No-Line" Rule
To maintain a premium aesthetic, **explicitly prohibit 1px solid borders for sectioning.** 
*   **The Rule:** Boundaries are defined by background shifts or tonal transitions. 
*   **Nesting:** Use `surface-container-low` for the page background, `surface` for secondary sections, and `surface-container-lowest` (#ffffff) for primary interactive cards. This creates a "lift" that feels natural and expensive.

### Glass & Gradient Signature
*   **Aura Gradients:** For primary CTAs and hero backgrounds, use a subtle linear gradient from `primary` (#735c00) to `primary_container` (#d4af37). This provides a metallic "shimmer" that flat hex codes cannot replicate.
*   **Alchemical Glass:** Floating navigation bars or modal overlays must use Glassmorphism. Apply `surface` with 80% opacity and a `20px` backdrop-blur to allow the rich cream tones to bleed through.

| Token | Value | Role |
| :--- | :--- | :--- |
| `background` | #fbf9f5 | The soft cream foundation. |
| `primary` | #735c00 | The "Old Gold"—used for key iconography and headers. |
| `primary_container` | #d4af37 | "Gilded Accent"—used for primary buttons and high-intent states. |
| `on_surface` | #1b1c1a | "Deep Charcoal"—ensuring sharp, scientific readability. |
| `surface_container_highest` | #e4e2de | Used for nested metadata containers to provide grounding. |

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to bridge the gap between ancient wisdom and modern science.

*   **Display & Headlines (Noto Serif):** These are our "Trust" anchors. Use `display-lg` for hero sections with tight letter-spacing (-0.02em) to mimic high-fashion mastheads.
*   **Body & Labels (Manrope):** The "Precision" anchor. A modern, geometric sans-serif that ensures data (metal purity, gem weight) is legible and clinical.

| Scale | Font | Size | Weight | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Noto Serif | 3.5rem | 700 | Hero titles, Alchemical results. |
| `headline-md` | Noto Serif | 1.75rem | 600 | Section headers, Certificate titles. |
| `title-md` | Manrope | 1.125rem | 500 | Card titles, Input labels. |
| `body-md` | Manrope | 0.875rem | 400 | Testing methodology descriptions. |
| `label-sm` | Manrope | 0.6875rem | 600 | Metadata, Micro-copy, All-caps styling. |

---

## 4. Elevation & Depth
In this system, depth is a result of light physics, not CSS defaults.

*   **Tonal Layering:** Avoid shadows for static elements. A `surface-container-lowest` card on a `surface-container-low` background provides enough distinction.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use a "Sunlit" shadow: 
    *   `box-shadow: 0 20px 40px rgba(27, 28, 26, 0.05);` 
    *   This uses a 5% opacity version of `on_surface` to mimic soft, ambient laboratory lighting.
*   **The Ghost Border:** If a boundary is required (e.g., in high-density data tables), use `outline-variant` (#d0c5af) at 20% opacity. This creates a "suggestion" of a line rather than a hard barrier.

---

## 5. Components: Precision Crafted

### Buttons (The Signet)
*   **Primary:** `primary_container` (#d4af37) background with `on_primary_container` text. Use `xl` (1.5rem) roundedness. Add a subtle inner-glow (1px white top border at 30% opacity) to simulate a gold inlay.
*   **Secondary:** `none` background, `ghost-border` (20% opacity gold), with `primary` text.

### Input Fields (The Ledger)
*   **Styling:** No bottom line or full box. Use a `surface_container_low` background with `sm` rounded corners.
*   **Focus:** Transition the background to `surface_container_lowest` and add a 1px `primary` (gold) border. This mimics the focus of a magnifying loupe.

### Cards & Lists (The Collection)
*   **Constraint:** **Strictly forbid divider lines.** 
*   **Alternative:** Use `1.5rem` vertical spacing or alternating background tints (`surface` vs `surface_container_low`) to separate list items.
*   **Special Component: "The Gemstone Badge":** A soft-pill shape using `tertiary_container` (#97b0ff) at 10% opacity with `tertiary` text—used for marking rare gem characteristics.

### Signature Component: The Alchemical Mandala
A decorative, low-opacity background element (using `outline_variant` at 15%) that sits behind high-level summary cards. It should be a geometric motif inspired by sacred geometry, reinforcing the "Celestial" branding without distracting from the data.

---

## 6. Do's and Don'ts

### Do
*   **DO** use intentional asymmetry. Offset images of gems or metals from their text descriptions.
*   **DO** use "All-Caps" with 0.1em tracking for `label-sm` to create an authoritative, scientific feel.
*   **DO** allow elements to overlap (e.g., a gold-bordered image overlapping a cream background section).

### Don't
*   **DON'T** use pure black (#000) or pure white (#FFF). It breaks the organic, premium "cream and charcoal" harmony.
*   **DON'T** use heavy drop shadows. If it looks "heavy," it isn't Celestial.
*   **DON'T** use standard 8px grid spacing for everything. Use larger, editorial gaps (32px, 64px, 128px) to denote importance.