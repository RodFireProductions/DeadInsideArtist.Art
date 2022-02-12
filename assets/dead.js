/*
    Rodrick hates their life.
--------------------------- # # # # #
    Time to define some things!

*/

let siteName = 'RodFireProductions'
let siteURL = 'https://deadinsideartist.art'
let year = '2022'

let theme = {
    light: '#ddd',
    dark: '#1f0d23',
    linksl: '#AE89C3',
    linksd: '#320d46'
}

let author = {
    name        : 'Rodrick \'RodFireProductions\'',
    pronouns    : 'they/them',
    title       : 'Your Nonbinary Demigod',
    picture     : ''
}

let widgets = {
    kofi        : "<div style='display: block; margin:0 auto; text-align: center;'><script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#71507e', 'R6R34PDMQ');kofiwidget2.draw();</script></div>"
}

// [name, link(internal), [site ,link(external)], description, category, content warning, picture, team?, year]
let projects = {
    games: [
        [
            'My Little Cat Girl',
            null,
            ['Itch', 'https://rodfireproductions.itch.io/my-little-cat-girl'],
            `You, a young guy, take in a sickly and homeless cat girl from off the
            streets and try to nurse her to health. You treat her as if she was your
            daughter. In this visual novel you get taken through a few small moments
            through out the time of her getting well and, you guys becoming a family.
            There is only one ending, so you don't have to take the choices into serious thought.`,
            'Game',
            null,
            'assets/images/projects/mylittlecatgirl.webp',
            null,
            'May 2019'
        ],
        [
            'Poseidon\'s Orb',
            null,
            ['Itch', 'https://rodfireproductions.itch.io/poseidons-orb'],
            `Charlotte's been transformed into a merperson and threatened
            by a sea witch! To get their old life back, they'll have to steal a
            valuable artifact from an underwater kingdom. As they learn more about
            Poseidon's Orb and the merpeople of Aquatris, will Charlotte have a change of heart?`,
            'Game',
            null,
            'assets/images/projects/poseidonorb.webp',
            'Coding & CG/Title screen art',
            'SuNoFes 2021'
        ],
        [
            'Blooming Hearts!',
            null,
            ['Itch', 'https://lavinnia.itch.io/blooming-hearts'],
            `During the day, Rowan (trans girl, she/her) is an ordinary high school
            student and kind of a loner. At night, she fights the Aphids as a magical
            girl called Carnation. One day her companion Aster (asshole flying rabbit,
            he/him) turns her crush Penelope (she/her) into a magical girl. Rowan
            must teach Penelope how to be a magical girl. Will they defeat the enemy
            and find love? Play to find out! Bloom my Heart!`,
            'Game',
            null,
            'assets/images/projects/bloominghearts.webp',
            'Character Sprites',
            'Aug - Sep 2021'
        ]
    ],
    tools: [
        [
            'Desktop Backdrop',
            null,
            ['Itch' ,'https://rodfireproductions.itch.io/desktop-backdrop'],
            `"I just need to not see my desktop in the background when working with smaller windows."<br>
            Why not make application that's just a changable solid color?`,
            'Tool',
            null,
            'assets/images/projects/deskdrop.gif',
            null,
            'Dec 2020'
        ]/*,
        [
            'DeadJournals',
            null,
            ['Official Site', 'https://deadjournals.deadinsideartist.art'],
            `DeadJournals is a tool for making static blogs using html, css,
            and vanilla javascript. Minimum html markup and javascript array and
            dictionary knowledge is needed to begin working with DeadJournals.`,
            'Tool',
            null,
            'assets/images/projects/deadjournals.webp',
            null,
            'October 2021 -> Current'
        ]*/
    ],
    writings: [
        [
            'Meet Chalice<3',
            null,
            ['Itch', 'https://rodfireproductions.itch.io/meet-chalice3'],
            `It's just a simple piece about one of my original characters, Chalice. Just something fun and creative I made while at school.`,
            'Zine',
            null,
            'assets/images/projects/meetchalice.webp',
            null,
            'Electric Zine Jame 2.0' //September 17, 2021
        ],
        [
            'Hurt✂️',
            null,
            ['Itch', 'https://rodfireproductions.itch.io/hurt'],
            `"Why not cause more hurt when you're already hurt?"<br>
            This is just a vent zine about dealing with thoughts of self harm.`,
            'Zine',
            'references to self harm',
            'assets/images/projects/hurt.webp',
            null,
            'October 8, 2021'
        ]
    ]
}
