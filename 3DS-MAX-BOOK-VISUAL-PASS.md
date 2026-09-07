# 3ds Max Book Visual Pass — v3.27.0

Source reviewed: **Essential Guide to 3ds Max for All Levels — Adeolu O / Computer Guru Institute** (167 pages, user supplied).

## Rule used

A figure was kept only if it helps a student do one of three things:

1. **Recognise** a modelling concept or workspace region.
2. **Judge** whether geometry/form/topology is behaving well.
3. **Check** a result before continuing.

A figure was rejected if it was merely decorative, too old to support exact current UI guidance, unrelated to the current modelling unit, or less clear than the Hub's existing diagram.

## Figures retained

| Book page | Local asset | Used in | Reason |
| --- | --- | --- | --- |
| 12 | `assets/modeling/book/interface-overview-p12.webp` | Lesson 1 | Broad interface orientation. Clearly labelled as a legacy/supporting overview rather than current click guide. |
| 31 | `assets/modeling/book/topology-rounded-prop-p31.webp` | Lesson 5 | Excellent wireframe-versus-surface comparison for edge flow and support geometry. |
| 31 | `assets/modeling/book/topology-car-wireframe-p31.webp` | Lesson 8 | Shows that topology density changes with form/detail; used as an advanced inspection example, not a target density. |
| 35 | `assets/modeling/book/subdivision-progression-p35.webp` | Lesson 7 | Makes subdivision growth visible across increasing levels. |
| 61 | `assets/modeling/book/uv-checker-p61.webp` | Lesson 10 | Clear checker distortion concept before UV/texturing work. |

## Considered but rejected

- **Page 23 / old welcome interface:** not useful enough for current navigation.
- **Page 24 Material Editor:** visibly old workflow and not needed for the Max → Substance teaching route.
- **Page 38 Editable Poly screenshot:** useful historically, but the exact interface is old and a current Autodesk/2024 reference already exists in the lesson.
- **Pages 54–59 materials:** mostly older Standard/Multi-Sub-Object workflow imagery; current course only needs deliberate material IDs before Substance.
- **Pages 81–107 lighting/rendering:** outside the current 3D Modelling Studio scope; Designer Studio already covers lighting/presentation.
- **Pages 107–138 animation/dynamics:** outside this modelling unit.
- **Pages 149–155 MAXScript:** outside this modelling unit and not useful for the scaffolded beginner path.

## Content ideas adopted from the book

- Modifier-stack/non-destructive working as a core habit.
- Clean edge flow and purposeful polygon distribution when retopologising/optimising.
- UV checker inspection, distortion correction and even texel-density thinking.
- Descriptive naming, logical asset folders and preservation of linked textures/materials.
- Incremental saves / backup versions and troubleshooting from a known clean state.

## Currency rule

The book is treated as **supporting reference**, not the source of truth for current 3ds Max UI. Current Autodesk documentation and screenshots from the college's installed Max version remain canonical for exact menu/button instructions.
