# Version 2 design direction

## Working concept: Accounting in Motion

Financial Groove should feel like a contemporary performance and gallery experience with the operational clarity of a disciplined financial system.

The visitor should recognize their creative world first, understand Financial Groove's role second, and choose a next step third.

## Core experience

### Act 1 — The opening count

A full-viewport photographic composition introduces multiple creative disciplines through movement. On capable devices, images enter in a restrained canon sequence inspired by the 2022 animation brief. On reduced-motion devices, the complete composition is present immediately.

Primary message:

> Accounting expertise for the people who make culture move.

The opening should not depend on autoplay video, audio, or a loading animation before content becomes usable.

### Act 2 — “I am…”

Visitors select the lane that feels most like them. The historic nine genres should be consolidated into a manageable set of contemporary pathways:

1. I run a studio or program
2. I perform or freelance
3. I make, produce, or design
4. I lead a creative business
5. I am building something new

Music, theater, film, dance, wellness, technical production, visual art, and children's programs appear as identity tags and photographic cues within these pathways rather than nine competing primary pages.

### Act 3 — The financial score

Services appear as an interconnected operating system, not a row of equal cards:

- Books show what happened.
- Payroll keeps people moving.
- Tax prepares for what is due.
- Coaching turns information into a decision.
- Formation gives new work a sound beginning.

The interaction should show relationships without resembling a software dashboard.

### Act 4 — Proof of fluency

Jessica's story, credentials, verified press, and approved client evidence establish why Financial Groove understands both sides of the work. The founder portrait belongs here, supported by behind-the-scenes or environmental photography.

### Act 5 — Choose the next count

End with two clear routes:

- New here: start a fit conversation.
- Current client: open the secure portal.

## Visual language

- Use Stage Black, Paper, and Groove Pink from the October 21, 2026 brand kit.
- Keep League Gothic as the performance voice, but introduce more editorial scale variation so every heading is not equally loud.
- Use photography at cinematic scale with selective cutouts, crops, negative space, and overlaps.
- Treat halftone, torn labels, scratches, footsteps, and Groove Bars as punctuation rather than wallpaper.
- Preserve a strong gallery-like light mode for information-rich sections.
- Keep capsules for actions, identity tags, and navigation states.
- Avoid generic stock photos, floating feature cards, glassmorphism, finance-dashboard graphics, and decorative motion with no narrative role.

## Navigation

Use a compact persistent header and a full-screen menu inspired by the current site and early design notes. The overlay should expose the complete information architecture without making visitors hunt for basic pages.

Recommended top-level structure:

- Find your path
- Services
- How it works
- Resources
- About
- Start here
- Client portal

## Motion principles

- Motion follows a count: enter, hold, pass focus, resolve.
- One dominant movement per viewport.
- Hover and focus receive equivalent visual feedback.
- The page remains complete with JavaScript disabled.
- `prefers-reduced-motion` removes sequencing and parallax without hiding content.
- No scroll-jacking.
- No mandatory intro animation.

## Photography selection criteria

Select 18–24 launch images from the protected gallery:

- 5–7 hero/ensemble candidates with usable negative space
- One clear image for each audience pathway
- 4–6 detail shots: hands, feet, instruments, fabric, tools, lights, or stage texture
- 3–4 founder/environmental images
- 2–3 transition or footer images

For every candidate, record gallery identifier, orientation, subject, intended placement, crop safety, credit, and usage approval.

## Performance budget

- Mobile hero media: target under 500 KB initial transfer
- Desktop hero media: target under 1.2 MB initial transfer
- Defer all below-the-fold photography
- Prefer AVIF/WebP derivatives while retaining approved originals outside the deployed bundle
- Avoid loading the full audience montage on small screens
- Keep animation to transform and opacity where possible

## Implementation sequence

1. Curate and rights-check the protected photography.
2. Build the Version 2 homepage opening and full-screen navigation on `version-2`.
3. Validate the consolidated “I Am…” pathway with real images and mobile behavior.
4. Restyle shared service, audience, process, resource, and conversion components.
5. Re-run content verification for current services, credentials, testimonials, press, and office language.
6. Complete accessibility, performance, metadata, and browser QA.
7. Publish a separate Vercel preview before any production-domain decision.
