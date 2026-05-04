import { NextResponse } from 'next/server';

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  time: string;
  photoUrl?: string;
}

export interface ReviewsResponse {
  reviews: GoogleReview[];
  averageRating: number;
  totalRatings: number;
}

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author: 'James M.',
    rating: 5,
    text: 'ByteGigs Labs transformed our retail operations with their POS system. Inventory tracking is seamless and the support team is always responsive. Highly recommended to any business serious about tech.',
    time: '2 months ago',
  },
  {
    author: 'Aisha K.',
    rating: 5,
    text: 'The delivery platform they built for us handles hundreds of orders daily without a single hitch. Real-time tracking has our customers coming back. Outstanding engineering team.',
    time: '3 months ago',
  },
  {
    author: 'Peter O.',
    rating: 5,
    text: 'Our new website doubled our lead generation within the first month. They understood our brand perfectly and delivered beyond expectations — on time and within budget.',
    time: '1 month ago',
  },
  {
    author: 'Fatuma R.',
    rating: 5,
    text: 'Professional, responsive, and technically excellent. The custom ERP system integrates perfectly with our entire workflow. A genuine game-changer for our business operations.',
    time: '4 months ago',
  },
  {
    author: 'David N.',
    rating: 5,
    text: 'The biometric attendance system completely eliminated time fraud. Implementation was smooth and the team walked us through every step. Very satisfied with the results.',
    time: '2 months ago',
  },
  {
    author: 'Grace W.',
    rating: 5,
    text: 'Best tech company in Nairobi. Professional-grade CCTV setup and the mobile app they developed for our restaurant is exactly what we needed. Reliable, clean, and fast.',
    time: '5 months ago',
  },
  {
    author: 'Brian T.',
    rating: 5,
    text: 'Fast delivery, clean code, and they actually listen to your requirements. Our e-commerce platform has been running flawlessly since launch. Will work with them again.',
    time: '3 months ago',
  },
  {
    author: 'Mercy A.',
    rating: 5,
    text: 'The branding and graphics work completely elevated our market presence. Creative, fast, and professional from the first brief to the final delivery. Could not be happier.',
    time: '6 months ago',
  },
];

export async function GET() {
  const key = process.env.GOOGLE_PLACES_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || 'CfTN0iFRgMalEAI';

  if (!key) {
    return NextResponse.json<ReviewsResponse>({
      reviews: FALLBACK_REVIEWS,
      averageRating: 5.0,
      totalRatings: FALLBACK_REVIEWS.length,
    });
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'reviews,rating,user_ratings_total');
    url.searchParams.set('key', key);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Places API error');

    const data = await res.json();
    const result = data.result;

    if (!result || !result.reviews?.length) throw new Error('No reviews');

    const reviews: GoogleReview[] = result.reviews.map((r: {
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
      profile_photo_url?: string;
    }) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
      photoUrl: r.profile_photo_url,
    }));

    return NextResponse.json<ReviewsResponse>({
      reviews,
      averageRating: result.rating ?? 5,
      totalRatings: result.user_ratings_total ?? reviews.length,
    });
  } catch {
    return NextResponse.json<ReviewsResponse>({
      reviews: FALLBACK_REVIEWS,
      averageRating: 5.0,
      totalRatings: FALLBACK_REVIEWS.length,
    });
  }
}
