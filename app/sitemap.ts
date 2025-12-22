import { MetadataRoute } from 'next';
import pregnancyWeeks from '@/data/pregnancyWeeks.json';
import symptomWeekMap from '@/data/symptomWeekMap.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://babybloom.com'; // Replace with your actual domain

    // Main pages
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/pregnancy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pregnancy-symptoms`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pregnancy-nutrition`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pregnancy-due-date-calculator`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // All 40 pregnancy week pages
    const pregnancyPages = pregnancyWeeks.map((week) => ({
        url: `${baseUrl}/pregnancy/${week.week}-weeks-pregnant`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // All symptom-week combination pages (160+)
    const symptomPages = symptomWeekMap.map((mapping) => ({
        url: `${baseUrl}/pregnancy-symptoms/${mapping.week}-${mapping.symptom.replace(/ /g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...pregnancyPages, ...symptomPages];
}
