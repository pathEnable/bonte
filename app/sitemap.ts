import { MetadataRoute } from 'next'
import { rooms } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://le-majestic-hotel.com'

    const staticPages = [
        '',
        '/rooms',
        '/offers',
        '/services',
        '/amenities',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const dynamicRooms = rooms.map((room) => ({
        url: `${baseUrl}/rooms/${room.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...dynamicRooms]
}
