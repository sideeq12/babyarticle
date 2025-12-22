# pSEO Data Structure - README

## Overview
This data structure powers the programmatic SEO system for BabyBloom pregnancy tracking app. It enables generation of 450-600 unique, high-quality pages targeting pregnancy-related search queries.

## Files Created

### 1. `pregnancyWeeks.json` (40 entries)
Contains comprehensive data for all 40 weeks of pregnancy.

**Fields:**
- `week`: Week number (1-40)
- `trimester`: First, Second, or Third
- `baby_size`: Fruit/vegetable comparison (e.g., "lime", "banana")
- `baby_size_cm`: Size in centimeters
- `baby_weight`: Weight in grams
- `key_development`: Major developmental milestone this week
- `hormone_focus`: Primary hormonal changes
- `common_changes`: Array of typical changes this week

**Example:**
```json
{
  "week": 12,
  "trimester": "First",
  "baby_size": "lime",
  "baby_size_cm": "5.4 cm",
  "baby_weight": "14 g",
  "key_development": "Facial features becoming more defined",
  "hormone_focus": "hCG stabilizing, estrogen rising",
  "common_changes": ["reduced nausea", "more energy", "uterus expanding"]
}
```

### 2. `symptoms.json` (12 entries)
Defines common pregnancy symptoms with medical context.

**Symptoms included:**
- nausea
- vomiting
- fatigue
- headaches
- cramps
- back pain
- bloating
- dizziness
- breast tenderness
- mood swings
- insomnia
- frequent urination

**Fields:**
- `symptom`: Common name
- `medical_name`: Medical terminology
- `description`: Clear explanation
- `safe_remedies`: Array of safe relief methods
- `warning_signs`: When to contact a doctor

**Example:**
```json
{
  "symptom": "nausea",
  "medical_name": "morning sickness",
  "description": "A feeling of sickness or vomiting caused by hormonal changes",
  "safe_remedies": ["small frequent meals", "ginger tea", "hydration"],
  "warning_signs": ["severe dehydration", "persistent vomiting", "weight loss"]
}
```

### 3. `symptomWeekMap.json` (160+ entries)
**THE MAGIC FILE** - Maps symptoms to specific weeks with unique context.

**Fields:**
- `week`: Week number (4-40)
- `symptom`: Symptom name (matches symptoms.json)
- `severity`: "mild", "moderate", or "high"
- `is_common`: true/false
- `week_context`: **Unique explanation of why this symptom matters THIS specific week**

**Example:**
```json
{
  "week": 12,
  "symptom": "nausea",
  "severity": "mild",
  "is_common": true,
  "week_context": "Symptoms may begin easing as the first trimester ends"
}
```

## How This Generates Unique Content

### URL Structure
`/pregnancy/{week}-weeks-pregnant-{symptom}`

Examples:
- `/pregnancy/12-weeks-pregnant-nausea`
- `/pregnancy/20-weeks-pregnant-back-pain`
- `/pregnancy/32-weeks-pregnant-insomnia`

### Content Variation
Each page is unique because it combines:

1. **Week-specific data** from `pregnancyWeeks.json`:
   - Baby size comparison
   - Developmental milestones
   - Hormonal changes
   - Trimester context

2. **Symptom data** from `symptoms.json`:
   - Medical explanation
   - Safe remedies
   - Warning signs

3. **Week-symptom context** from `symptomWeekMap.json`:
   - Why this symptom happens THIS week
   - Severity at this stage
   - How common it is

### Example: Two Different Pages

**Page 1: `/pregnancy/6-weeks-pregnant-nausea`**
- Baby size: lentil (0.6 cm)
- Context: "Morning sickness often peaks around this week"
- Severity: High
- Hormone focus: "Estrogen and progesterone increasing"

**Page 2: `/pregnancy/12-weeks-pregnant-nausea`**
- Baby size: lime (5.4 cm)
- Context: "Symptoms may begin easing as the first trimester ends"
- Severity: Mild
- Hormone focus: "hCG stabilizing, estrogen rising"

## Page Count Calculation

### Current Coverage:
- **160+ symptom-week combinations** (from symptomWeekMap.json)
- **40 weekly overview pages** (one per week)
- **Calculator/tool pages** (to be added)

### To Reach 450-600 Pages:
You can add more combinations by:
1. Adding more symptoms to `symptoms.json`
2. Creating more week-symptom mappings in `symptomWeekMap.json`
3. Adding calculator pages (due date, weight gain, etc.)
4. Adding checklist pages (hospital bag, birth plan, etc.)

## Next Steps

### Immediate:
1. **Set up Next.js** with Static Site Generation
2. **Create page template** component
3. **Implement getStaticPaths** to generate all routes
4. **Add internal linking** logic

### SEO Requirements:
- Unique title & meta description per page
- 600-900 words per page
- Medical disclaimer on every page
- XML sitemap generation
- Canonical URLs

### Content Quality Checklist:
✅ Week-specific context (prevents duplicate content)
✅ Real symptoms (no invented conditions)
✅ Medical accuracy (safe remedies, warning signs)
✅ Varied severity by week (realistic progression)
✅ Trimester-appropriate context

## Usage Example (Pseudo-code)

```javascript
// Get data for a specific page
const week = 12;
const symptom = "nausea";

// Load all data
const weekData = pregnancyWeeks.find(w => w.week === week);
const symptomData = symptoms.find(s => s.symptom === symptom);
const mapping = symptomWeekMap.find(m => m.week === week && m.symptom === symptom);

// Generate unique content
const title = `${week} Weeks Pregnant With ${symptomData.medical_name} – What's Normal?`;
const intro = `At ${week} weeks pregnant, many women experience ${symptom} as ${weekData.hormone_focus}. Your baby is now about the size of a ${weekData.baby_size}. ${mapping.week_context}.`;
```

## File Locations
```
/data
 ├── pregnancyWeeks.json (40 entries)
 ├── symptoms.json (12 entries)
 └── symptomWeekMap.json (160+ entries)
```

## Important Notes

⚠️ **Medical Disclaimer Required**: Every page must include:
> "This content is for educational purposes only and does not replace medical advice."

⚠️ **No Thin Content**: Each page must have:
- 600-900 words minimum
- At least 2 dynamic sections
- Unique title & meta description
- Internal links to related pages

⚠️ **SEO Best Practices**:
- Clean URLs (no parameters)
- Static generation (no client-side rendering)
- XML sitemap
- Canonical URLs
- Index, follow tags

---

**Ready to build the Next.js page generator!** 🚀
