import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
    slug: string;
    title: string;
    date: string;
    client: string;
    industry: string;
    coverImage: string;
    excerpt: string;
    content: string;
}

export function getAllCaseStudies(): CaseStudy[] {
    if (!fs.existsSync(caseStudiesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(caseStudiesDirectory);
    const allCaseStudiesData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(caseStudiesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                ...(data as { title: string; date: string; client: string; industry: string; coverImage: string; excerpt: string }),
            };
        });

    return allCaseStudiesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
    try {
        const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as { title: string; date: string; client: string; industry: string; coverImage: string; excerpt: string }),
        };
    } catch {
        return null;
    }
}
