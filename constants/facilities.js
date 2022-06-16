const facilities = [

    // Water-fountain
    {
        name: 'Computing Lab water fountain',
        waterfountain: true,
        STUDY: {
            Huxley: true,
            floor: 2
        },
        description:
            'Huxley ground floor, inside computing lab, need to access lab\n' +
            'Go straight for 20 meters',
        photo: 'https://i.ibb.co/LQtJYJM/computing-lab-water.jpg',
        url: '',
        location: 'Huxley ground-floor computing lab',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'SCR water fountain',
        waterfountain: true,
        STUDY: {
            Huxley: false,
            Sherfield: true,
            floor: 2
        },
        description:
            'Inside Senior common room, next to the food-selling place\n',
        photo: 'https://i.ibb.co/dLk9zCj/Cafe-water.jpg',
        url: '',
        location: 'Senior common room',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Sherfield 2nd floor water fountain',
        waterfountain: true,
        STUDY: {
            Huxley: false,
            Sherfield: true,
            floor: 2
        },
        description:
            'Sherfield 2nd floor, next to the accessible toilets\n' +
            'There are 2 of them both next to accessible toilets',
        photo: 'https://i.ibb.co/Kznwhmb/sherfield-2-water.jpg',
        url: '',
        location: 'Sherfield 2nd floor',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
    },

    // Study space
    {
        name: 'Central Library',
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: true,
            QUIET: true
        },
        description:
            'Silent study - levels 2 and 3\n' +
            'Quiet study - levels 1, 4 and 5\n' +
            'Group study - level 1\n' +
            'Height adjustable desks - levels 2 and 3\n',
        photo: 'https://www.imperial.ac.uk/media/migration/administration-and-support-services/0000-191111-autumn-library-queens-lawn-018_1635242587445_x2.jpg',
        url: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/central-library/',
        location: '',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'GoStudy Space',
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: true,
            QUIET: false
        },
        description:
            'Silent Study: Chemistry Building Rooms 460, 537\n' +
            'Group Study: Chemistry Building Rooms 430, 444, 538, 561',
        photo: 'https://pxl-imperialacuk.terminalfour.net/fit-in/959x430/prod01/channel_2/media/migration/administration-and-support-services/211029-gostudy-spaces-rm537-001_1635779844596_x4.jpg',
        url: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/gostudy/',
        location: '',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: "Computing Lab",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 219...",
        rating: 0,
        numRatings: 0,
        photo: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/IMG_20151110_122250365--tojpeg_1447160413584_x2.jpg',
        location: '',
        openingHour: '',
        url: 'https://www.imperial.ac.uk/computing/csg/facilities/lab/',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: "Huxley 341&342",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 341&342...",
        rating: 0,
        numRatings: 0,
        photo: 'https://i.ibb.co/HTjWccS/341-342.jpg',
        location: '',
        openingHour: '',
        url: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: "Huxley 212",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 212...",
        rating: 0,
        numRatings: 0,
        photo: 'https://i.ibb.co/M2F716f/212.jpg',
        location: '',
        openingHour: '',
        url: '',
        avgRating: 0,
        numRatings: 0,
    },

    // Toilets
    {
        name: 'Toilet Huxley 227',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: true,
            FEMALE: false,
        },
        description: "Huxley Building 227...",
        rating: 0,
        numRatings: 0,
        photo: 'https://i.ibb.co/MnY9Fx3/227.jpg',
        location: '',
        openingHour: '',
        url: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Toilet Huxley 224',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: false,
            FEMALE: true,
        },
        description: "Huxley Building 224...",
        rating: 0,
        numRatings: 0,
        photo: 'https://i.ibb.co/SPxzrdj/224.jpg',
        location: '',
        openingHour: '',
        url: '',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Library Cafe Accessible Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        photo: 'https://w7.pngwing.com/pngs/310/99/png-transparent-unisex-public-toilet-bathroom-fee-s-text-bathroom-logo.png',
        description: "Library Cafe",
        location: 'Library Cafe',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Accessible Toilet Huxley 236C',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        photo: 'https://i.ibb.co/FzVmGZG/20220615221920.jpg',
        description: "Huxley Building 236C...",
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Secret Luxurious Male toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: true,
            FEMALE: false,
        },
        photo: 'https://i.ibb.co/Fg3B122/secret-male.jpg',
        description: "Between Huxley labs and Blackett",
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Secret Luxurious Female toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: false,
            FEMALE: true,
        },
        photo: 'https://i.ibb.co/fqwDRMJ/secret-female.jpg',
        description: "Between Huxley labs and Blackett",
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'Secret Luxurious Accessible toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        photo: 'https://i.ibb.co/TTRtNw1/secret-accessible.jpg',
        description: "Between Huxley labs and Blackett",
        avgRating: 0,
        numRatings: 0,
    },

    // Cafe
    {
        name: 'SCR Restaurant',
        cafe: true,
        CAFE: {
            BREAKFAST: false,
            LUNCH: true,
            AFTERNOON: false,
            SUPPER: false,
        },
        openingHour: '11:45-14:30',
        location: "The Senior Common Room is located on level 2 of the Sherfield Building.",
        description: 'The SCR Restaurant offers a complete menu of fresh hot and cold lunches every weekday. Our chefs prepare a variety of freshly-made hot meals including street food, vegan and vegetarian options, a salad bar, fresh soups, carvery roasts and a delicious selection of desserts. ',
        photo: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/IMG_20191001_112216-2--tojpeg_1578322000843_x4.jpg',
        avgRating: 0,
        numRatings: 0,
    }, {
        name: 'The Loud Bird',
        cafe: true,
        CAFE: {
            BREAKFAST: true,
            LUNCH: true,
            AFTERNOON: true,
            SUPPER: false,
        },
        openingHour: '8:00-16:00',
        location: "The outlet is located on the ground floor of the Sir Alexander Fleming Building.",
        description:
            "The Loud Bird offers a selection of grilled chicken, burgers, wraps, vegan options, tasty sides and signature sauces." +
            "The outlet is also in partnership with 'Roastology', serving hot coffee and tea all day.",
        avgRating: 0,
        numRatings: 0,
        photo: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/the-loud-bird-wood-backgroundpng_1613099809796_x4.jpg',
    }, {
        name: 'College Cafe',
        cafe: true,
        CAFE: {
            BREAKFAST: true,
            LUNCH: true,
            AFTERNOON: true,
            SUPPER: false,
        },
        openingHour: '8:00-18:00',
        avgRating: 0,
        numRatings: 0,
        location: "College Cafe can be found next door to the Alumni Visitor Centre, in the College's main entrance",
        description:
            "Situated next to the Alumni Centre near the main entrance, College Café offers a wide range of hot and cold options for breakfast, lunch and everything inbetween." +
            "Start your day the right way with a College Café breakfast. Choose from our freshly prepared bacon sandwiches, toasties or filled croissants. For a healthier option, perhaps opt instead for the breakfast yoghurt or a filling bowl of porridge, both served with a great choice of fresh toppings." +
            "For lunch, why not try one of our trademark delicious hand carved roast sandwiches, made with a freshly prepared meat or fish filling and accompanied with a homemade dressing. " +
            "College Café also boasts a juice bar where you can order healthy juice concoctions and smoothies bursting with delicious, fresh flavours. Try one of the tried and tested favourites or create your own blend. Look out for the smoothie and juice of the day.",
        photo: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/College_Cafe004--tojpeg_1440508268653_x4.jpg",
    }, {
        name: 'Library Cafe',
        cafe: true,
        CAFE: {
            BREAKFAST: true,
            LUNCH: true,
            AFTERNOON: true,
            SUPPER: true,
        },
        openingHour: '8:00-23:00',
        avgRating: 0,
        numRatings: 0,
        location: "The Library Café is located on the ground floor of the Imperial College Library Building, which faces onto the Queen's Lawn",
        description: "Whether you are looking for a quick pastry for breakfast, a filling baked potato for lunch, or simply a warm beverage and a space to study, the Library Café is a great choice morning, afternoon or night. With longer opening hours than many of our other outlets, the Library Café is there whenever you need to refuel after a hard day's work. Boasting comfortable booths and PCs connected to the College network it also makes an ideal place to study.",
        photo: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/img-1493_1643298046507_x4.jpg",
    }, {
        name: 'Neo Pizza & Pasta',
        cafe: true,
        CAFE: {
            BREAKFAST: false,
            LUNCH: true,
            AFTERNOON: false,
            SUPPER: false,
        },
        openingHour: '11:30-14:30',
        avgRating: 0,
        numRatings: 0,
        location: "Neo Pizza and Pasta can be found in the JCR.",
        description: "Try one of our freshly prepared pizzas using only the very best ingredients.",
        photo: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/vecteezy-four-pizza-on-a-dark-wooden-background-807105_1620134120021_x4.jpg",
    },
    // microwave 
    {
        name: 'Department of Computing Studnent Tea Point',
        microwave: true,
        avgRating: 0,
        numRatings: 0,
        location: "Huxley 223. Inside DoC Lab Area",
        description: "Fridge, Coffee machine & microwave!",
        photo: "https://i.ibb.co/H2sxYnp/Do-CStudent-Tea-Point.jpg",
    }, {
        name: 'GoStudy Space Kitchen',
        microwave: true,
        avgRating: 0,
        numRatings: 0,
        location: "Chemistry Building 448.",
        description: "GoStudy is open to all students and offers a variety of study environments to suit your needs including Silent Study, Group Study and Breakout Spaces where you can eat and drink.",
        photo: "https://pxl-imperialacuk.terminalfour.net/fit-in/959x430/prod01/channel_2/media/migration/administration-and-support-services/gostudy8_1635780402942_x4.jpg",
    }
];

export default facilities;