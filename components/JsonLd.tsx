export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Train Matricx",
        url: "https://trainmatricx.com",
        logo: "https://trainmatricx.com/trainmatricx-logo.png",
        description:
            "High-precision computer vision training data for sports. Specializing in football, basketball, cricket, and more.",
        sameAs: [
            "https://www.linkedin.com/company/train-matricx",
            "https://twitter.com/trainmatricx",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "info@trainmatricx.com",
            url: "https://trainmatricx.com",
        },
        serviceType: [
            "Sports Data Annotation",
            "Computer Vision Training Data",
            "AI Data Labeling",
            "Video Annotation",
        ],
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Train Matricx",
        url: "https://trainmatricx.com",
        description:
            "High-precision computer vision training data for sports AI.",
    };

    const navigationSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Services",
                "url": "https://trainmatricx.com/#services"
            },
            {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Workflow",
                "url": "https://trainmatricx.com/#workflow"
            },
            {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Accuracy",
                "url": "https://trainmatricx.com/#accuracy"
            },
            {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Use Cases",
                "url": "https://trainmatricx.com/#use-cases"
            },
            {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "FAQ",
                "url": "https://trainmatricx.com/#faq"
            },
            {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Blog",
                "url": "https://trainmatricx.com/blog"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(navigationSchema),
                }}
            />
        </>
    );
}
