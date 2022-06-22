// Building constants
const HUXLEY = "Huxley Building";
const SHERFIELD = 'Sherfield Building';
const CENTRAL_LIBRARY = "Central Library";
const EEE = "Electrical and Electronic Engineering Building";
const CHEM = 'Chemistry Building';
const IB = "Imperial College Business School";
const BLACKETT = "Blackett Laboratory";
const SKEMPTON = 'Skempton Building';
const CITY = "City & Guilds Building";
const DYSON = "Dyson Building of Design Engineering";

const facilities = [

    // Water-fountain
    {
        title: 'EEE Cafe Water Fountain',
        waterfountain: true,
        STUDY: {
            EEE: true,
            floor: 2
        },
        description:
          "Electrical and Electronic Engineering Building 2nd floor? Cozy and" +
          "nice. A wonderful place to enjoy your holiday.",
        url: 'https://i.ibb.co/6shJ6fZ/EEE-Water-Fountain-1.jpg',
        maps: [
            {
                url: "https://i.ibb.co/bHZkqHx/EEE-Building.png"
            }
        ],
        location: 'EEE 2nd-floor cafe',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: EEE,
    }, {
        title: 'Computing Lab Water Fountain',
        waterfountain: true,
        STUDY: {
            Huxley: true,
            floor: 2
        },
        description:
            'Huxley ground floor, inside computing lab, need to access lab\n' +
            'Go straight for 20 meters',
        url: 'https://i.ibb.co/LQtJYJM/computing-lab-water.jpg',
        maps: [
            {
                url: "https://i.ibb.co/Qv6RchB/Huxley-L2-Water-Fountain.png"
            }
        ],
        location: 'Huxley ground-floor computing lab',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: HUXLEY,
    }, {
        title: 'SCR water fountain',
        waterfountain: true,
        STUDY: {
            Huxley: false,
            Sherfield: true,
            floor: 2
        },
        description:
            'Inside Senior common room, next to the food-selling place\n',
        url: 'https://i.ibb.co/dLk9zCj/Cafe-water.jpg',
        maps: [
            {
                url: "https://i.ibb.co/BKfFcBx/SCR.png"
            }
        ],
        location: 'Senior common room',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: SHERFIELD,
    }, {
        title: 'Sherfield 2nd floor water fountain',
        waterfountain: true,
        STUDY: {
            Huxley: false,
            Sherfield: true,
            floor: 2
        },
        description:
            'Sherfield 2nd floor, next to the accessible toilets\n' +
            'There are 2 of them both next to accessible toilets',
        url: 'https://i.ibb.co/Kznwhmb/sherfield-2-water.jpg',
        maps: [
            {
                url: "https://i.ibb.co/9pcMtvh/Sherfield-Water-Fountain.png"
            }
        ],
        location: 'Sherfield 2nd floor',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: SHERFIELD,
    },

    // Study space
    {
        title: 'Central Library',
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
        url: 'https://www.imperial.ac.uk/media/migration/administration-and-support-services/0000-191111-autumn-library-queens-lawn-018_1635242587445_x2.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/2s8PsJr/Central-Lib.png'
            }
        ],
        link: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/central-library/',
        location: '',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: CENTRAL_LIBRARY,
    }, {
        title: 'GoStudy Space',
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: true,
            QUIET: false
        },
        description:
            'Silent Study: Chemistry Building Rooms 460, 537\n' +
            'Group Study: Chemistry Building Rooms 430, 444, 538, 561',
        url: 'https://pxl-imperialacuk.terminalfour.net/fit-in/959x430/prod01/channel_2/media/migration/administration-and-support-services/211029-gostudy-spaces-rm537-001_1635779844596_x4.jpg',
        maps: [
            {
                url: "https://i.ibb.co/G5dpT3q/Chemistry-Building.png"
            }
        ],
        link: 'https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/gostudy/',
        location: '',
        openingHour: '',
        avgRating: 0,
        numRatings: 0,
        building: CHEM,
    }, {
        title: "Computing Lab",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 219...",
        url: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/IMG_20151110_122250365--tojpeg_1447160413584_x2.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/d6DmFFT/Huxley-L2-213.png'
            }
        ],
        location: '',
        openingHour: '',
        link: 'https://www.imperial.ac.uk/computing/csg/facilities/lab/',
        avgRating: 0,
        numRatings: 0,
        building: HUXLEY,
    }, {
        title: "Huxley 341&342",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 341&342...",
        url: 'https://i.ibb.co/HTjWccS/341-342.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/6P0DLhM/Huxley-L3-342-341.png'
            },
        ],
        location: '',
        openingHour: '',
        link: '',
        avgRating: 0,
        numRatings: 0,
        building: HUXLEY,
    }, {
        title: "Huxley 212",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxley Building 212...",
        url: 'https://i.ibb.co/M2F716f/212.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/vQND1Vz/Huxley-L2-212.png'
            },
        ],
        location: '',
        openingHour: '',
        link: '',
        avgRating: 0,
        numRatings: 0,
        building: HUXLEY
    },

    // Toilets
    {
        title: 'Toilet Huxley 227',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: true,
            FEMALE: false,
        },
        description: "Huxley Building 227...",
        url: 'https://i.ibb.co/MnY9Fx3/227.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/7pmt2dh/Huxley-L2-227.png'
            }
        ],
        location: '',
        openingHour: '',
        link: '',
        avgRating: 0,
        numRatings: 0,
        building: { HUXLEY }
    }, {
        title: 'Toilet Huxley 224',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: false,
            FEMALE: true,
        },
        description: "Huxley Building 224...",
        url: 'https://i.ibb.co/SPxzrdj/224.jpg',
        maps: [
            {
                url: 'https://i.ibb.co/VMVwpJL/Huxley-L2-224.png'
            }
        ],
        location: '',
        openingHour: '',
        link: '',
        avgRating: 0,
        numRatings: 0,
        building: HUXLEY
    }, {
        title: 'Library Cafe Accessible Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        url: 'https://w7.pngwing.com/pngs/310/99/png-transparent-unisex-public-toilet-bathroom-fee-s-text-bathroom-logo.png',
        maps: [
            {
                url: "https://i.ibb.co/2s8PsJr/Central-Lib.png"
            }
        ],
        description: "Library Cafe",
        location: 'Library Cafe',
        avgRating: 0,
        numRatings: 0,
        building: CENTRAL_LIBRARY,
    }, {
        title: 'Accessible Toilet Huxley 236C',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        url: 'https://i.ibb.co/FzVmGZG/20220615221920.jpg',
        description: "Huxley Building 236C...",
        avgRating: 0,
        numRatings: 0,
        maps: [
            {
                url: 'https://i.ibb.co/GczsmMm/Huxley-L2-236-C.png'
            }
        ],
        building: HUXLEY,
    }, {
        title: 'Secret Luxurious Male Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: true,
            FEMALE: false,
        },
        url: 'https://i.ibb.co/Fg3B122/secret-male.jpg',
        avgRating: 0,
        numRatings: 0,
        maps: [
            {
                url: 'https://i.ibb.co/Tmz1vhL/Huxley-L2-Utitled-Toilets.png'
            }
        ],
        building: HUXLEY,
        description: "Between Huxley labs and Blackett"
    }, {
        title: 'Secret Luxurious Female Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: false,
            FEMALE: true,
        },
        url: 'https://i.ibb.co/fqwDRMJ/secret-female.jpg',
        avgRating: 0,
        numRatings: 0,
        maps: [
            {
                url: 'https://i.ibb.co/Tmz1vhL/Huxley-L2-Utitled-Toilets.png'
            }
        ],
        description: "Between Huxley labs and Blackett",
        building: HUXLEY,
    }, {
        title: 'Secret Luxurious Accessible Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        url: 'https://i.ibb.co/TTRtNw1/secret-accessible.jpg',
        description: "Between Huxley labs and Blackett",
        avgRating: 0,
        numRatings: 0,
        maps: [
            {
                url: 'https://i.ibb.co/Tmz1vhL/Huxley-L2-Utitled-Toilets.png'
            }
        ],
        building: HUXLEY,
    },

    // Cafe
    {
        title: 'SCR Restaurant',
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
        url: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/IMG_20191001_112216-2--tojpeg_1578322000843_x4.jpg',
        avgRating: 0,
        numRatings: 0,
        maps: [  // TODO: Add corrent map
            {
                url: "https://i.ibb.co/BKfFcBx/SCR.png"
            }
        ],
        building: SHERFIELD,
    }, {
        title: 'The Loud Bird',
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
        url: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/the-loud-bird-wood-backgroundpng_1613099809796_x4.jpg',
        maps: [  // TODO: Add corrent map
            {
                url: 'https://ih1.redbubble.net/image.959951874.3860/pp,840x' +
                    '830-pad,1000x1000,f8f8f8.jpg'
            }
        ],
        building: CHEM,
    }, {
        title: 'College Cafe',
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
        url: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/College_Cafe004--tojpeg_1440508268653_x4.jpg",
        maps: [  // TODO: Add corrent map
            {
                url: 'https://ih1.redbubble.net/image.959951874.3860/pp,840x' +
                    '830-pad,1000x1000,f8f8f8.jpg'
            }
        ],
        building: IB,
    }, {
        title: 'Library Cafe',
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
        url: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/img-1493_1643298046507_x4.jpg",
        maps: [
            {
                url: "https://i.ibb.co/2s8PsJr/Central-Lib.png"
            }
        ],
        building: CENTRAL_LIBRARY,
    }, {
        title: 'Neo Pizza & Pasta',
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
        url: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/vecteezy-four-pizza-on-a-dark-wooden-background-807105_1620134120021_x4.jpg",
        maps: [
            {
                url: "https://i.ibb.co/BKfFcBx/SCR.png"
            }
        ],
        building: SHERFIELD,
    },
    // microwave 
    {
        title: 'EEE Cafe Microwave Oven',
        microwave: true,
        location: "EEE 2nd-floor cafe",
        description:
          "A microwave oven which normally sits there quietly. But most people" +
          "don't no that it is planning to fight for the liberty of all" +
          "microwave ovens.",
        url: "https://i.ibb.co/RBFq25S/EEE-Microwave-Oven-1.jpg",
        maps: [
            {
                url: "https://i.ibb.co/bHZkqHx/EEE-Building.png"
            }
        ],
        building: EEE,
        avgRating: 0,
        numRatings: 0,
    }, {
        title: 'Department of Computing Studnent Tea Point',
        microwave: true,
        avgRating: 0,
        numRatings: 0,
        location: "Huxley 223. Inside DoC Lab Area",
        description: "Fridge, Coffee machine & microwave!",
        url: "https://i.ibb.co/H2sxYnp/Do-CStudent-Tea-Point.jpg",
        maps: [
            {
                url: "https://i.ibb.co/bHZkqHx/EEE-Building.png"
            }
        ],
        building: HUXLEY,
    }, {
        title: 'GoStudy Space Kitchen',
        microwave: true,
        avgRating: 0,
        numRatings: 0,
        location: "Chemistry Building 448.",
        description: "GoStudy is open to all students and offers a variety of study environments to suit your needs including Silent Study, Group Study and Breakout Spaces where you can eat and drink.",
        url: "https://pxl-imperialacuk.terminalfour.net/fit-in/959x430/prod01/channel_2/media/migration/administration-and-support-services/gostudy8_1635780402942_x4.jpg",
        maps: [
            {
                url: "https://i.ibb.co/G5dpT3q/Chemistry-Building.png"
            }
        ],
        building: CHEM,
    }
];

export {
    CITY, DYSON,
    SKEMPTON, BLACKETT, facilities, HUXLEY,
    SHERFIELD, CENTRAL_LIBRARY, EEE, CHEM, IB
};