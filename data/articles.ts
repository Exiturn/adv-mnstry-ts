export interface Article {
    id: string;
    title: string;
    date: string;
    image: string;
}

const articles: Article[] = [
    {
        id: 'Article 1',
        title: 'The new roadmap for auto brands',
        date: '8.1.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 2',
        title: 'Breaking through the branding',
        date: '6.16.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 3',
        title: 'Ryan Parkhurst moderates talk on "The art and science of brand purpose and creativity',
        date: '6.5.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 4',
        title: 'John Waters, Bare Walls, and sparking creativity',
        date: '5.15.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 5',
        title: 'ADV/MNSTRY® is the 27th Webby Awards: Agency of the year',
        date: '4.25.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 6',
        title: 'ADV/MNSTRY® secures 19 Nominations for the 27th Annual Webby Awards',
        date: '4.4.23',
        image: '/assets/brands/manorsgold.webp',
    },
    {
        id: 'Article 7',
        title: "Women's history month spotlight at A/M®",
        date: '4.3.23',
        image: '/assets/brands/manorsgold.webp',
    },
]

export default articles;