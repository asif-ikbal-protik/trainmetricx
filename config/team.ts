import { Cpu, Database, Activity, Shield, Terminal, Zap } from "lucide-react";

export interface TeamMember {
    name: string;
    role: string;
    specialty: string;
    imageUrl: string;
    projectsLed: number;
    resourcesMaintained: number;
    industryExpertise: string[];
    stats: {
        label: string;
        value: number; // 0-100
    }[];
    icon: any; // Lucide icon component
}

export const teamMembers: TeamMember[] = [
    {
        name: "Asif Ikbal",
        role: "Founder & CEO",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
        projectsLed: 24,
        resourcesMaintained: 150,
        industryExpertise: ["Professional Football", "Real-time Telemetry"],
        specialty: "Visionary architect driving the fusion of professional athlete performance with cutting-edge neural intelligence.",
        icon: Zap,
        stats: [
            { label: "Strategic Vision", value: 100 },
            { label: "Neural Innovation", value: 98 },
            { label: "Elite Performance", value: 97 }
        ]
    },
    {
        name: "Sarah Chen",
        role: "Head of Data Velocity",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
        projectsLed: 18,
        resourcesMaintained: 420,
        industryExpertise: ["Media & Broadcast", "Cloud Infrastructure"],
        specialty: "Orchestrating multi-petabyte annotation pipelines for elite sports leagues.",
        icon: Database,
        stats: [
            { label: "Data Throughput", value: 99 },
            { label: "Pipeline Integrity", value: 97 },
            { label: "Annotation Speed", value: 92 }
        ]
    },
    {
        name: "Marcus Vane",
        role: "Strategic Bio-Analyst",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
        projectsLed: 12,
        resourcesMaintained: 85,
        industryExpertise: ["Sports Medicine", "Biomechanics"],
        specialty: "Bridging human biomechanics with deep learning object tracking models.",
        icon: Activity,
        stats: [
            { label: "Biometric Fusion", value: 95 },
            { label: "Skeletal Mapping", value: 98 },
            { label: "Impact Analysis", value: 93 }
        ]
    },
    {
        name: "Elena Rossi",
        role: "CV Security Director",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
        projectsLed: 31,
        resourcesMaintained: 12,
        industryExpertise: ["Cyber Security", "Privacy Protocols"],
        specialty: "Ensuring end-to-end encryption and metadata privacy for proprietary footage.",
        icon: Shield,
        stats: [
            { label: "Data Encryption", value: 100 },
            { label: "Access Control", value: 99 },
            { label: "Protocol Auditing", value: 96 }
        ]
    },
    {
        name: "Jason Park",
        role: "Roster Logic Lead",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
        projectsLed: 15,
        resourcesMaintained: 210,
        industryExpertise: ["Basketball Analytics", "Identity Logic"],
        specialty: "Developing identity-preservation models for long-form match analysis.",
        icon: Terminal,
        stats: [
            { label: "ID Consistency", value: 97 },
            { label: "Temporal Tracking", value: 94 },
            { label: "Edge Case Logic", value: 95 }
        ]
    }
];

/**
 * REPLACEMENT GUIDE:
 * 1. Image Replacement: 
 *    - To use a local image, drop it into /public/team/
 *    - Change imageUrl to "/team/member-name.jpg"
 * 2. Icon Replacement:
 *    - Import a new icon from "lucide-react" and update the 'icon' property.
 * 3. Stats Modification:
 *    - Numbers are automatically formatted for the holographic UI.
 */
