export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Train Matricx",
        url: "https://trainmatricx.com",
        logo: "https://trainmatricx.com/trainmatricx-logo.png",
        description:
            "High-precision computer vision training data for sports. Specializing in football, basketball, cricket, and more.",
        sameAs: [],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
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
        </>
    );
}
