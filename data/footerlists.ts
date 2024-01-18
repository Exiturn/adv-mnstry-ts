export interface List {
    id: string;
    title: string;
    items: Array<string>;
}

const footerlists: List[] = [
    { 
        id: 'social-list',
        title: 'Social',
        items: [
            'Instagram',
            'Twitter',
            'LinkedIn',
            'Facebook',
        ]
    },
    { 
        id: 'initiative-list',
        title: 'Initiatives',
        items: [
            'Crafted',
            'Applied',
            'Brandbeats',
            'Moves',
            'A®/Mazing'
        ]
    },
    { 
        id: 'offices-list',
        title: 'Offices',
        items: [
            'San Diego - CA',
            'New York - NY',
            'Bay Area - CA',
            'St. Louis - MO',
            'Amsterdam - NL',
            'London - EN',
            'Berlin - GE',
            'Argentina - AR'
        ]
    },
]

export default footerlists;