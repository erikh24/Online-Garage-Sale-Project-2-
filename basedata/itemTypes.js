// properties
const SIZES = ['xs', 's', 'm', 'l', 'xl'];
const TYPES = ['shirts', 'jackets', 'pants', 'sweaters', 'dresses', 'shorts', 'skirts'];
const COLORS = [
    'black',
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'brown',
    'purple',
    'orange',
    'tan',
    'other'
];

// item types
const CLOTHING = {
    name: 'clothing',
    properties: new Map([
        ['size', SIZES],
        ['category', TYPES],
        ['color', COLORS],
        ['gender', ['na','mens', 'womens']]
    ])
};

module.exports = new Map([['clothing', CLOTHING]]);
