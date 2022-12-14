// Building constants
const HUXLEY = "huxley";
const SHERFIELD = 'sherfield_building';
const CENTRAL_LIBRARY = "central_library";
const EEE = "eee_building";
const CHEM = 'chemistry_building';
const IB = "imperial_business_school";
const BLACKETT = "blackett_laboratory";
const SKEMPTON = 'skempton_building';
const CITY = "city&guilds_building";
const DYSON = "dyson_building";
const OTHER = "other"

const shareLocalFacilities = [

    // Water-fountain
    {
        title: 'EEE Cafe Water Fountain',
        name: 'EEE Cafe Water Fountain',
        tags: {
            water_fountain: true,
            eee_building: true,
            floor2: true,
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
        name: 'Computing Lab Water Fountain',
        tags: {
            water_fountain: true,
            huxley: true,
            floor2: true
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
        name: 'SCR water fountain',
        tags: {
            water_fountain: true,
            sherfield_building: true,
            floor2: true,
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
        name: 'Sherfield 2nd floor water fountain',
        tags: {
            water_fountain: true,
            sherfield_building: true,
            floor2: true,
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
        name: 'Central Library',
        tags: {
            study_space: true,
            group: true,
            silent: true,
            quiet: true,
            central_library: true,
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
        name: 'GoStudy Space',
        tags: {
            study_space: true,
            group: true,
            silent: true,
            chemistry_building: true,
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
        name: "Computing Lab",
        tags: {
            study_space: true,
            group: true,
            huxley: true,
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
        name: "Huxley 341&342",
        tags: {
            study_space: true,
            group: true,
            huxley: true,
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
        name: "Huxley 212",
        tags: {
            study_space: true,
            group: true,
            huxley: true,
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
        name: 'Toilet Huxley 227',
        tags: {
            toilet: true,
            male: true,
            huxley: true,
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
        building: { HUXLEY },
    }, {
        title: 'Toilet Huxley 224',
        name: 'Toilet Huxley 224',
        tags: {
            toilet: true,
            female: true,
            huxley: true,
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
        building: HUXLEY,
    }, {
        title: 'Library Cafe Accessible Toilet',
        name: 'Library Cafe Accessible Toilet',
        tags: {
            toilet: true,
            accessible: true,
            male: true,
            female: true,
            central_library: true,
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
        name: 'Accessible Toilet Huxley 236C',
        tags: {
            toilet: true,
            accessible: true,
            male: true,
            female: true,
            huxley: true,
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
        name: 'Secret Luxurious Male Toilet',
        tags: {
            toilet: true,
            male: true,
            huxley: true,
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
        name: 'Secret Luxurious Female Toilet',
        tags: {
            toilet: true,
            female: true,
            huxley: true,
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
        name: 'Secret Luxurious Accessible Toilet',
        tags: {
            toilet: true,
            accessible: true,
            male: true,
            female: true,
            huxley: true,
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
        name: 'SCR Restaurant',
        tags: {
            cafe: true,
            lunch: true,
            sherfield_building: true,
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
        name: 'The Loud Bird',
        tags: {
            cafe: true,
            breakfast: true,
            lunch: true,
            afternoon: true,
            chemistry_building: true,
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
        name: 'College Cafe',
        tags: {
            cafe: true,
            breakfast: true,
            lunch: true,
            afternoon: true,
            imperial_business_school: true,
        },
        openingHour: '8:00-18:00',
        avgRating: 0,
        numRatings: 0,
        location: "College Cafe can be found next door to the Alumni Visitor Centre, in the College's main entrance",
        description:
            "Situated next to the Alumni Centre near the main entrance, College Caf?? offers a wide range of hot and cold options for breakfast, lunch and everything inbetween." +
            "Start your day the right way with a College Caf?? breakfast. Choose from our freshly prepared bacon sandwiches, toasties or filled croissants. For a healthier option, perhaps opt instead for the breakfast yoghurt or a filling bowl of porridge, both served with a great choice of fresh toppings." +
            "For lunch, why not try one of our trademark delicious hand carved roast sandwiches, made with a freshly prepared meat or fish filling and accompanied with a homemade dressing. " +
            "College Caf?? also boasts a juice bar where you can order healthy juice concoctions and smoothies bursting with delicious, fresh flavours. Try one of the tried and tested favourites or create your own blend. Look out for the smoothie and juice of the day.",
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
        name: 'Library Cafe',
        tags: {
            cafe: true,
            breakfast: true,
            lunch: true,
            afternoon: true,
            supper: true,
            central_library: true,
        },
        openingHour: '8:00-23:00',
        avgRating: 0,
        numRatings: 0,
        location: "The Library Caf?? is located on the ground floor of the Imperial College Library Building, which faces onto the Queen's Lawn",
        description: "Whether you are looking for a quick pastry for breakfast, a filling baked potato for lunch, or simply a warm beverage and a space to study, the Library Caf?? is a great choice morning, afternoon or night. With longer opening hours than many of our other outlets, the Library Caf?? is there whenever you need to refuel after a hard day's work. Boasting comfortable booths and PCs connected to the College network it also makes an ideal place to study.",
        url: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/img-1493_1643298046507_x4.jpg",
        maps: [
            {
                url: "https://i.ibb.co/2s8PsJr/Central-Lib.png"
            }
        ],
        building: CENTRAL_LIBRARY,
    }, {
        title: 'Neo Pizza & Pasta',
        name: 'Neo Pizza & Pasta',
        tags: {
            cafe: true,
            lunch: true,
            sherfield_building: true,
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
        name: 'EEE Cafe Microwave Oven',
        tags: {
            microwave: true,
            eee_building: true,
        },
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
        name: 'Department of Computing Studnent Tea Point',
        tags: {
            microwave: true,
            huxley: true,
        },
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
        name: 'GoStudy Space Kitchen',
        tags: {
            microwave: true,
            chemistry_building: true,
        },
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
    },
    // Events
    {
        title: "GIG-A-BITES - Unknown to Known",
        name: "GIG-A-BITES - Unknown to Known",
        tags: {
            event: true,
            blyth_centre: true,
            year22: true,
            june: true,
            jazz: true,
            music: true,
        },
        openingHour: "29 June 2022",
        avgRating: 0,
        numRatings: 0,
        location: "Outside, between I-HUB and MSRH, Translation and Innovation Hub (I-HUB) Campus: White City Campus",
        description: "Intricate melodies and textural grooves combine over sonic landscapes informed by ragas of the Indian subcontinent. Mostly improvised, always interactive, honest and raw.",
        url: "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/utk-brighton-april-2021_1654697683830_eventfeatured2018_x2.webp",
        maps: [
            {
                url: "https://www.virtuoso.com/TouchPoints/Sites/VCom/Images/image-not-available-map.png"
            }
        ],
        building: OTHER,
    },
    {
        title: "GIG-A-BITES - The Coalminers",
        name: "GIG-A-BITES - The Coalminers",
        tags: {
            event: true,
            blyth_centre: true,
            year22: true,
            july: true,
            music: true,
        },
        openingHour: "27 July 2022",
        avgRating: 0,
        numRatings: 0,
        location: "Outside, between I-HUB and MSRH, Translation and Innovation Hub (I-HUB) Campus: White City Campus",
        description: "This brilliant five piece band bring the rhythem and soul of New Orleans alive, playing songs ranging from Professor Longhair to Allen Toussaint, Mardi Gras parade anthems to Fats Domino Rock & Roll classics and the swampy funk of The Meters and Dr John. They take their name from the Toussaint/Dorsey song 'Working In A Coalmine'.",
        url: "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/patlevett-3-1_1654688389700_eventlandscape2018_x2.webp",
        maps: [
            {
                url: "https://www.virtuoso.com/TouchPoints/Sites/VCom/Images/image-not-available-map.png"
            }
        ],
        building: OTHER,
    },
    // Other
    {
        title: "Student Hub",
        name: "Student Hub",
        tags: {
            student_hub: true,
            service: true,
        },
        openingHour: "Monday to Friday 10am - 4pm",
        avgRating: 0,
        numRatings: 0,
        location: "The Student Hub \n" +
                  "Level 3 Sherfield Building\n" +
                  "South Kensington Campus\n" +
                  "Imperial College London\n" +
                  "SW7 2AZ",
        description: "The Student Hub brings together many of Imperial's key support services in one easily accessible place. It is a hub for advice and information on a wide range of aspects of College life, including admissions, finance, exchange programmes and exam arrangements. Our team are on hand to answer your questions in person, by email or online. ",
        url: "https://pxl-imperialacuk.terminalfour.net/fit-in/2158x610/filters:upscale()/filters:format(webp)/prod01/channel_2/media/migration/imperial-students/00-171014-imp-studenthub-024_1598955039196_x4.jpg",
        maps: [
            {
                url: "https://www.virtuoso.com/TouchPoints/Sites/VCom/Images/image-not-available-map.png"
            }
        ],
        building: SHERFIELD,
        link: "https://www.imperial.ac.uk/student-hub/"
    },
];

export {
    CITY, DYSON, OTHER,
    SKEMPTON, BLACKETT, shareLocalFacilities, HUXLEY,
    SHERFIELD, CENTRAL_LIBRARY, EEE, CHEM, IB
};