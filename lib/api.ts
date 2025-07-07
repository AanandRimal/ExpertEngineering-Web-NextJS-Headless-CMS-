import { config } from './config';

const STRAPI_URL = config.strapi.url;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export interface HeroSection {
  heroTitle: string;
  heroSubtitle: string;
  heroBackgroundImage: {
    url: string;
    alternativeText?: string;
  };
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface ServicesOverview {
  sectionTitle: string;
  sectionHeading: string;
  sectionDescription: string;
}

export interface MissionVision {
  missionTitle: string;
  missionDescription: string;
  visionTitle: string;
  visionDescription: string;
}

export interface Stats {
  projectsCompleted: number;
  yearsExperience: number;
  expertEngineers: number;
  clientSatisfaction: number;
}

export interface Service {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: string;
    image?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export interface HomePageData {
  heroSection: HeroSection;
  servicesOverview: ServicesOverview;
  missionVision: MissionVision;
  stats: Stats;
}

export const strapiAPI = {
  // Fetch home page data
  async getHomePageData(): Promise<HomePageData> {
    try {
      const response = await fetch(`${STRAPI_URL}/api/home-page?populate=*`, {
        headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
      });
      const data = await response.json();
      if (!data.data || !data.data.attributes) {
        throw new Error("No home page data in Strapi");
      }
      return data.data.attributes;
    } catch (error) {
      console.error('Error fetching home page data:', error);
      // Return fallback data
      return {
        heroSection: {
          heroTitle: "Engineering Excellence for Every Project",
          heroSubtitle: "Comprehensive engineering consulting services including property valuation, structural design, environmental assessments, and feasibility studies.",
          heroBackgroundImage: {
            url: "/images/hero-1.png",
            alternativeText: "Engineering consulting background"
          },
          primaryButtonText: "Our Services",
          secondaryButtonText: "View Portfolio"
        },
        servicesOverview: {
          sectionTitle: "Our Expertise",
          sectionHeading: "Comprehensive Engineering Solutions",
          sectionDescription: "From initial feasibility studies to detailed project reports, we provide end-to-end engineering consulting services."
        },
        missionVision: {
          missionTitle: "Our Mission",
          missionDescription: "To provide innovative and sustainable engineering solutions that exceed client expectations while contributing to the development of resilient infrastructure and communities.",
          visionTitle: "Our Vision",
          visionDescription: "To be the leading engineering consulting firm recognized for technical excellence, innovation, and commitment to sustainable development."
        },
        stats: {
          projectsCompleted: 200,
          yearsExperience: 5,
          expertEngineers: 10,
          clientSatisfaction: 95
        }
      };
    }
  },

  // Fetch services
  async getServices(): Promise<Service[]> {
    try {
      const response = await fetch(`${STRAPI_URL}/api/services?populate=*`, {
        headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
      });
      const data = await response.json();
      if (!data.data) {
        throw new Error("No services data in Strapi");
      }
      return data.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },

  // Get image URL
  getImageUrl(image: any): string {
    if (!image) return '';
    if (image.url) return `${STRAPI_URL}${image.url}`;
    if (image.data?.attributes?.url) return `${STRAPI_URL}${image.data.attributes.url}`;
    return '';
  }
}; 