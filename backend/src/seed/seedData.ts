import mongoose from 'mongoose';
import argon2 from 'argon2';
import { env } from '../config/env';
import { User } from '../models/User';
import { Project } from '../models/Project';
import { Plot } from '../models/Plot';
import { Blog } from '../models/Blog';
import { UserRole, UserStatus, PropertyType, PropertyStatus, PlotStatus } from '../shared/enums';

export const seedDatabase = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // 1. Create Super Admin & Test Users
    const adminPassword = await argon2.hash('AdminPass123!');
    const adminUser = await User.findOneAndUpdate(
      { email: 'admin@primedevelopers.com' },
      {
        name: 'Prime Admin Executive',
        email: 'admin@primedevelopers.com',
        passwordHash: adminPassword,
        role: UserRole.SUPER_ADMIN,
        status: UserStatus.ACTIVE,
        isEmailVerified: true
      },
      { upsert: true, new: true }
    );

    const customerPassword = await argon2.hash('CustomerPass123!');
    const customerUser = await User.findOneAndUpdate(
      { email: 'customer@gmail.com' },
      {
        name: 'Alexander Wright',
        email: 'customer@gmail.com',
        passwordHash: customerPassword,
        role: UserRole.CUSTOMER,
        status: UserStatus.ACTIVE,
        isEmailVerified: true
      },
      { upsert: true, new: true }
    );

    const agentPassword = await argon2.hash('AgentPass123!');
    const agentUser = await User.findOneAndUpdate(
      { email: 'agent@primedevelopers.com' },
      {
        name: 'Elena Vance (Lead Partner)',
        email: 'agent@primedevelopers.com',
        passwordHash: agentPassword,
        role: UserRole.AGENT,
        status: UserStatus.ACTIVE,
        isEmailVerified: true
      },
      { upsert: true, new: true }
    );

    // 2. Create Luxury Projects
    const project1 = await Project.findOneAndUpdate(
      { slug: 'prime-palais-royale' },
      {
        title: 'Prime Palais Royale',
        slug: 'prime-palais-royale',
        tagline: 'Ultra-Luxury Golf & Lake Residences',
        description: 'Prime Palais Royale sets a new benchmark in ultra-luxury living. Featuring private elevators, panoramic skyline views, temperature-controlled Olympic pools, and bespoke concierge services.',
        location: {
          address: 'Golf Course Extension Road, Sector 65',
          city: 'Gurugram',
          state: 'Haryana',
          pincode: '122018',
          lat: 28.4025,
          lng: 77.0621
        },
        propertyType: PropertyType.LUXURY_VILLA,
        status: PropertyStatus.UNDER_CONSTRUCTION,
        bannerImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
        ],
        masterPlanImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80',
        amenities: ['Helipad', '18-Hole Golf Course', 'Private Infinity Pool', 'Wine Cellar', 'Spa & Wellness Center'],
        totalUnits: 48,
        availableUnits: 18,
        priceRange: { min: 85000000, max: 250000000, currency: 'INR' },
        featured: true,
        createdBy: adminUser._id
      },
      { upsert: true, new: true }
    );

    const project2 = await Project.findOneAndUpdate(
      { slug: 'prime-soho-towers' },
      {
        title: 'Prime Soho Towers',
        slug: 'prime-soho-towers',
        tagline: 'Futuristic Commercial & Tech Hub',
        description: 'A landmark Grade-A commercial workspace equipped with AI-powered building management systems, LEED Platinum certification, and helipad facilities.',
        location: {
          address: 'Financial District, Nanakramguda',
          city: 'Hyderabad',
          state: 'Telangana',
          pincode: '500032',
          lat: 17.4123,
          lng: 78.3412
        },
        propertyType: PropertyType.COMMERCIAL_OFFICE,
        status: PropertyStatus.READY_TO_MOVE,
        bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
        galleryImages: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
        ],
        amenities: ['Grade A Office Space', 'Multi-tier Security', 'Central Park', 'Sky Lounge', 'EV Charging Station'],
        totalUnits: 120,
        availableUnits: 34,
        priceRange: { min: 25000000, max: 120000000, currency: 'INR' },
        featured: true,
        createdBy: adminUser._id
      },
      { upsert: true, new: true }
    );

    // 3. Seed Interactive 2D Plots for Project 1
    const plotStatuses = [PlotStatus.AVAILABLE, PlotStatus.RESERVED, PlotStatus.BOOKED, PlotStatus.SOLD, PlotStatus.AVAILABLE];
    for (let i = 1; i <= 15; i++) {
      const plotNum = `PL-${100 + i}`;
      const statusIndex = (i - 1) % plotStatuses.length;
      await Plot.findOneAndUpdate(
        { projectId: project1._id, plotNumber: plotNum },
        {
          projectId: project1._id,
          plotNumber: plotNum,
          sector: 'Phase 1 - West Meadow',
          block: 'A',
          areaSqFt: 3500 + i * 250,
          facing: i % 2 === 0 ? 'North-East' : 'East',
          price: 45000000 + i * 2000000,
          status: plotStatuses[statusIndex],
          cornerPlot: i % 4 === 0,
          coordinates2D: {
            x: ((i - 1) % 5) * 110 + 20,
            y: Math.floor((i - 1) / 5) * 80 + 20,
            width: 90,
            height: 60,
            shape: 'rect'
          }
        },
        { upsert: true }
      );
    }

    // 4. Seed Blogs
    await Blog.findOneAndUpdate(
      { slug: 'real-estate-trends-2026' },
      {
        title: 'Ultra-Luxury Real Estate Market Trends for 2026',
        slug: 'real-estate-trends-2026',
        excerpt: 'Discover key insights into ultra-prime residential developments, NRI investments, and sustainable luxury living.',
        content: 'The high-net-worth real estate segment has experienced unprecedented demand for curated living spaces...',
        bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        author: 'Prime Insights Team',
        category: 'Market Research',
        published: true
      },
      { upsert: true }
    );

    console.log('Database seeding finished successfully!');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.disconnect();
  }
};

if (require.main === module) {
  seedDatabase();
}
