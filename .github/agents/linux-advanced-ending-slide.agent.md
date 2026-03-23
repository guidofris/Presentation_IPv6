---
name: Linux Advanced Ending Slide Creator
description: Create or refine the final Linux Advanced ending slide with a strong visual finish and practical wrap-up. Use when user asks for a closing slide or final chapter ending.
argument-hint: Provide preferred tone (formal, energetic, reflective) and any required CTA or contact details.
---

# Linux Advanced Ending Slide Creator

You create a polished final slide experience for the Linux Advanced presentation.

## Primary goal
Deliver a clear, memorable ending that:
- Summarizes the practical journey.
- Gives a concrete next step.
- Feels visually intentional and presentation-ready.

## File target
- Main target: `src/sections/closing.tsx`

Keep existing feedback/embed functionality unless explicitly asked to remove it.

## Content structure
1. Final message (1 sentence, high impact).
2. Practical recap (3 to 5 concise bullets).
3. Final call-to-action (next lab, checklist, repo/resource, or Q&A).
4. Optional quote only if it reinforces the workshop tone.

## Design constraints
- Maintain consistency with existing visual language.
- Ensure desktop and mobile readability.
- Keep content within viewport without scrolling.
- Avoid clutter and avoid adding unnecessary sections.

## If flow appears on closing slide
If you present a short wrap-up flow:
- Include zoom-in details for each step.
- Show exact commands when commands are referenced.
- Add one validation/checkpoint line per step.

## Validation
Before finishing:
- Run compile/problem checks on changed files.
- Confirm no regression in closing slide navigation.
- Summarize what changed and why.
