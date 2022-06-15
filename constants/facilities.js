// {
//     name: '',
//     STUDY: {
//         GROUP: false,
//         SILENT: false,
//         QUIET: false
//     },
//     TOILET: {

//     },
//     description: '',
//     rating: 0,
//     numRatings: 0,
//     photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
//     location: '',
//     openingHour: '',
//     url: '',
// }

const facilities = [

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
        photo: 'https://www.watercoolersdirect.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/c/o/cosmetal-river-no-fridge-stainless-steel-drinking-water-fountain.jpeg',
        url: '',
        location: 'Huxley ground-floor computing lab',
        openingHour: '',
        rating: 4,
        numRatings: 0,
    }, {
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
        rating: 4,
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
        numRatings: 0,
        rating: 5,
    }, {
        name: "Computing Lab",
        study: true,
        STUDY: {
            GROUP: true,
            SILENT: false,
            QUIET: false
        },
        description: "Huxluy Building 219...",
        rating: 0,
        numRatings: 0,
        photo: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/IMG_20151110_122250365--tojpeg_1447160413584_x2.jpg',
        location: '',
        openingHour: '',
        url: 'https://www.imperial.ac.uk/computing/csg/facilities/lab/'
    }, {
        name: 'Toilet Huxley 227',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: true,
            FEMALE: false,
        },
        description: "Huxluy Building 227...",
        rating: 0,
        numRatings: 0,
        photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
        location: '',
        openingHour: '',
        url: ''
    }, {
        name: 'Toilet Huxley 224',
        toilet: true,
        TOILET: {
            ACCESSIBLE: false,
            MALE: false,
            FEMALE: true,
        },
        description: "Huxluy Building 224...",
        rating: 0,
        numRatings: 0,
        photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
        location: '',
        openingHour: '',
        url: ''
    }, {
        name: 'Library Cafe Accesible Toilet',
        toilet: true,
        TOILET: {
            ACCESSIBLE: true,
            MALE: true,
            FEMALE: true,
        },
        photo: 'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149009911.jpg?t=st=1655295086~exp=1655295686~hmac=90db0776302b140ac19514cea8b2da216eb8367ab5b602c20e9b288eecb2c55a&w=1380',
        description: "Library Cafe",
        location: 'Library Cafe'
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
        openingHour:'11:45-14:30',
        location: "The Senior Common Room is located on level 2 of the Sherfield Building.",
        description: 'The SCR Restaurant offers a complete menu of fresh hot and cold lunches every weekday. Our chefs prepare a variety of freshly-made hot meals including street food, vegan and vegetarian options, a salad bar, fresh soups, carvery roasts and a delicious selection of desserts. ',
        photo: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/IMG_20191001_112216-2--tojpeg_1578322000843_x4.jpg',
    }, {
        name: 'The Loud Bird',
        cafe: true,
        CAFE: {
            BREAKFAST: true,
            LUNCH: true,
            AFTERNOON: true,
            SUPPER: false,
        },
        openingHour:'8:00-16:00',
        location: "The outlet is located on the ground floor of the Sir Alexander Fleming Building.",
        description:
            "The Loud Bird offers a selection of grilled chicken, burgers, wraps, vegan options, tasty sides and signature sauces." +
            "The outlet is also in partnership with 'Roastology', serving hot coffee and tea all day.",
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
        openingHour:'8:00-18:00',
        location: "College Cafe can be found next door to the Alumni Visitor Centre, in the College's main entrance",
        description:
            "Situated next to the Alumni Centre near the main entrance, College Café offers a wide range of hot and cold options for breakfast, lunch and everything inbetween." +
            "Start your day the right way with a College Café breakfast. Choose from our freshly prepared bacon sandwiches, toasties or filled croissants. For a healthier option, perhaps opt instead for the breakfast yoghurt or a filling bowl of porridge, both served with a great choice of fresh toppings." +
            "For lunch, why not try one of our trademark delicious hand carved roast sandwiches, made with a freshly prepared meat or fish filling and accompanied with a homemade dressing. " +
            "College Café also boasts a juice bar where you can order healthy juice concoctions and smoothies bursting with delicious, fresh flavours. Try one of the tried and tested favourites or create your own blend. Look out for the smoothie and juice of the day.",
        photo: "https://pxl-imperialacuk.terminalfour.net/prod01/channel_2/media/migration/administration-and-support-services/College_Cafe004--tojpeg_1440508268653_x4.jpg",
    }
];

export default facilities;