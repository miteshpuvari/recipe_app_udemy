import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
    new Category('c1', 'South Gujarat', '#F5428d'),
    new Category('c2', 'Quick & Easy', '#F54242'),
    new Category('c3', 'Punjabi', '#F5a442'),
    new Category('c4', 'Gujju Fast Food', '#F5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breackfast', '#9eecff'),
    new Category('c8', 'kathiyavadi', '#ffc7ff'),
    new Category('c9', 'Summer', '#47fced'),
    new Category('c10', 'South India', '#FF00FF')

];

export const MEALS = [
    new Meal(
        'm1',
        ['c1'],
        'Ubadiyu with chhas',
        'affordable',
        'simple',
        'https://2.bp.blogspot.com/-_i1V31oQmUo/WImr-RUbrxI/AAAAAAAAEWo/S0T3AZ-TY4UXicpyKbGhWAURgdfXTXncwCLcB/s1600/IMG_20161224_150651.jpg',
        55,
        [
            '1kg Papdi',
            'brinjals',
            'batatos',
            'aadu',
            'lasun',
            'Onions',
            'kan',
            'potato'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm2',
        ['c2'],
        'maggi',
        'affortable',
        'simple',
        'https://images.yourstory.com/cs/wordpress/2015/11/yourstory-maggi.png',
        2,
        [
            '1. Maggi',
            '2. Solt',
            '3. Tomatos'   
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm3',
        ['c3'],
        'Palak Paneer',
        'Quite Expensive',
        'simple',
        'https://s3.amazonaws.com/images.chefinyou.com/main/opos-palak-paneer-recipe/main-img4.JPG',
        20,
        [
            '1. Palak',
            '2. Paneer',
            '3. Oile'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm4',
        ['c4'],
        'Jalebi-Fafda',
        'affortable',
        'simple',
        'https://english.gujaratexclusive.in/wp-content/uploads/2020/10/Fafda-Jalebi-rate.jpg',
        30,
        [
            '1. jalebi material',
            '2. fafda material',
            '3. Oile'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm5',
        ['c5'],
        'Pani - Puri',
        'affortable',
        'simple',
        'https://imgmedia.lbb.in/media/2019/02/5c6e687640cb8a02c9fc487f_1550739574821.jpg',
        25,
        [
            '1. water',
            '2. puri',
            '3. potatoes'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm6',
        ['c6'],
        'Pizza',
        'Expensive',
        'Complex',
        'https://tonysbigpizza.com/wp-content/uploads/2020/04/bg_choose_locations.jpg',
        45,
        [
            '1. Tometos',
            '2. shimla mirch',
            '3. Oile'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm7',
        ['c7'],
        'Surti Locho',
        'affortable',
        'Simple',
        'https://foodontvnetwork.com/wp-content/uploads/2017/08/Surti-Locho-Recipe-Photo..jpg',
        30,
        [
            '1. Oile',
            '2. Powder',
            '3. Onion'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm8',
        ['c8'],
        'kathiyavadi Thali',
        'affortable',
        'Simple',
        'https://content3.jdmagicbox.com/comp/surat/g4/0261px261.x261.181220133005.f7g4/catalogue/patel-kathiyavadi-thali-mota-borsara-surat-restaurants-3u9o7wp00w.jpg',
        50,
        [
            '1. potatos',
            '2. onion',
            '3. raice'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm9',
        ['c9'],
        'Mengo Jues',
        'affortable',
        'Simple',
        'https://www.sailusfood.com/wp-content/uploads/2010/05/ripe-mango-juice.jpg',
        15,
        [
            '1. mango',
            '2. mixer',
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
    new Meal(
        'm10',
        ['c10'],
        'Idli Sambar',
        'affortable',
        'Simple',
        'https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg',
        35,
        [
            '1. Idli',
            '2. sambhar',
            '3. oile'
        ],
        [
            'cutt brinjals potatos',
            'prepar all ingridiants aadu lahsun',
            'mix all this',
            'put in matka',
        ]
    ),
];