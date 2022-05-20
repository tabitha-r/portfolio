// Import Redux slice creation function
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define state types
export interface SkillType {
    id: number,
    name: string,
    fullName?: string,
    link: string,
    level: number,
    icon?: string,
    darkModeIcon?: boolean,
    description: string,
    tags: string[],
}

interface AllSkills {
    skills: {
        [skill: string]: SkillType,
    },
    filter: string[],
    sortBy: 'tags' | 'nameaz' | 'nameza' | 'levelasc' | 'leveldesc',
};

// Set initial state for skills slice
// This slice is to hold all the skills data
// If skills need to be added later, then they can be added here once
// This saves repetition in other parts of the code
const initialState: AllSkills = {
    skills: {
        html: {
            id: 1,
            name: 'HTML',
            fullName: 'Hypertext Markup Language',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            description: 'The building-block language for making web pages.',
            tags: ['standard', 'frontend', 'all']
        },
        css: {
            id: 2,
            name: 'CSS',
            fullName: 'Cascading Style Sheets',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            description: 'The standard language for adding style and design to web pages.',
            tags: ['standard', 'design', 'frontend', 'all']
        },
        js: {
            id: 3,
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            description: 'The standard language for making web pages interactive.',
            tags: ['standard', 'interactivity', 'frontend', 'all']
        },
        sass: {
            id: 4,
            name: 'Sass',
            fullName: 'Syntactically Awesome Style Sheets',
            link: 'https://sass-lang.com/',
            level: 8,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
            description: 'An advanced form of CSS.',
            tags: ['advanced', 'design', 'frontend', 'all']
        },
        ts: {
            id: 5,
            name: 'TypeScript',
            link: 'https://www.typescriptlang.org/',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            description: 'A superset of JavaScript with strict types.',
            tags: ['advanced', 'interactivity', 'frontend', 'all']
        },
        handlebars: {
            id: 6,
            name: 'Handlebars',
            link: 'https://handlebarsjs.com/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg',
            darkModeIcon: true,
            description: 'A web template system.',
            tags: ['advanced', 'interactivity', 'frontend', 'all']
        },
        react: {
            id: 7,
            name: 'React',
            fullName: 'ReactJS',
            link: 'https://reactjs.org/',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            description: 'The front-end JavaScript library made by Meta (Facebook).',
            tags: ['advanced', 'spa', 'interactivity', 'frontend', 'all']
        },
        redux: {
            id: 8,
            name: 'Redux',
            link: 'https://redux.js.org/',
            level: 8,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            description: 'A library for managing centralized state.',
            tags: ['advanced', 'spa', 'interactivity', 'data', 'frontend', 'all']
        },
        wp: {
            id: 9,
            name: 'WordPress',
            fullName: 'WordPress.org',
            link: 'https://wordpress.org//',
            level: 8,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
            darkModeIcon: true,
            description: 'A content management system that powers 43% of the web.',
            tags: ['wordpress', 'frontend', 'backend', 'interactivity', 'data', 'all']
        },
        frontity: {
            id: 10,
            name: 'Frontity',
            link: 'https://frontity.org/',
            level: 9,
            icon: 'https://frontity.org/wp-content/uploads/2020/04/FrontityBlueLogo.svg',
            description: 'A framework for building a WordPress site with React.',
            tags: ['wordpress', 'spa', 'frontend', 'interactivity', 'all']
        },
        php: {
            id: 11,
            name: 'PHP',
            fullName: 'Hypertext Preprocessor',
            link: 'https://www.php.net/',
            level: 7,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
            description: 'A server scripting language for web development.',
            tags: ['wordpress', 'backend', 'all']
        },
        node: {
            id: 12,
            name: 'Node.js',
            link: 'https://nodejs.org/',
            level: 3,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            description: 'A back-end JavaScript runtime environment that runs JavaScript outside a browser.',
            tags: ['backend', 'development', 'all']
        },
        express: {
            id: 13,
            name: 'Express',
            fullName: 'Express.js',
            link: 'https://expressjs.com',
            level: 1,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            darkModeIcon: true,
            description: 'The standard server framework for Node.js',
            tags: ['backend', 'interactivity', 'all']
        },
        postgres: {
            id: 14,
            name: 'PostgreSQL',
            fullName: 'Postgre Structured Query Language',
            link: 'https://www.postgresql.org/',
            level: 4,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            description: 'A object-relational database system.',
            tags: ['backend', 'data' ]
        },
        firebase: {
            id: 15,
            name: 'Firebase',
            link: 'https://firebase.google.com',
            level: 3,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            description: 'A platform for developing apps.',
            tags: ['backend', 'data', 'app', 'all']
        },
        vsc: {
            id: 16,
            name: 'VS Code',
            fullName: 'Visual Studio Code',
            link: 'https://code.visualstudio.com/',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
            description: 'A code editor, or IDE (integrated development environment).',
            tags: ['development', 'app', 'all']
        },
        git: {
            id: 17,
            name: 'Git',
            link: 'https://git-scm.com/',
            level: 7,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            description: 'A version control system.',
            tags: ['development', 'vc', 'all']
        },
        gh: {
            id: 18,
            name: 'GitHub',
            link: 'https://github.com/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            darkModeIcon: true,
            description: 'Internet hosting for version control.',
            tags: ['development', 'vc', 'documentation', 'all']
        },
        bash: {
            id: 19,
            name: 'Bash',
            fullName: 'GNU Bourne Again SHell',
            link: 'https://www.gnu.org/software/bash',
            level: 7,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
            darkModeIcon: true,
            description: 'A shell language used for controlling a computer.',
            tags: ['development', 'vc', 'all']
        },
        npm: {
            id: 20,
            name: 'NPM',
            fullName: 'Node Package Manager',
            link: 'https://www.npmjs.com/',
            level: 8,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
            description: 'A package manager for JavaScript.',
            tags: ['development', 'backend', 'frontend', 'spa', 'interactivity', 'all']
        },
        markdown: {
            id: 21,
            name: 'Markdown',
            link: 'https://en.wikipedia.org/wiki/Markdown',
            level: 9,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
            darkModeIcon: true,
            description: 'A lightweight markup language commonly used for documentation.',
            tags: ['development', 'documentation', 'data', 'all']
        },
        figma: {
            id: 22,
            name: 'Figma',
            link: 'https://www.figma.com/',
            level: 7,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            description: 'A graphic design app.',
            tags: ['design', 'graphics', 'frontend', 'app', 'development', 'all']
        },
        gimp: {
            id: 23,
            name: 'GIMP',
            fullName: 'GNU Imagine Manipulation Program',
            link: 'https://www.gimp.org/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg',
            description: 'An image editor, similar to Photoshop.',
            tags: ['design', 'graphics', 'frontend', 'app', 'development', 'all']
        },
        photoshop: {
            id: 24,
            name: 'Photoshop',
            fullName: 'Adobe Photoshop',
            link: 'https://www.adobe.com/uk/products/photoshop.html',
            level: 4,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
            description: 'An image editor.',
            tags: ['design', 'graphics', 'frontend', 'app', 'development', 'all']
        },
        inkscape: {
            id: 25,
            name: 'Inkscape',
            link: 'https://inkscape.org/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg',
            description: 'A vector graphics program, similar to Illustrator.',
            tags: ['design', 'graphics', 'frontend', 'app', 'development', 'all']
        },
        illustrator: {
            id: 26,
            name: 'Illustrator',
            fullName: 'Adobe Illustrator',
            link: 'https://www.adobe.com/uk/products/illustrator.html',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
            description: 'A vector graphics program.',
            tags: ['design', 'graphics', 'frontend', 'app', 'development', 'all']
        },
        jest: {
            id: 27,
            name: 'Jest',
            link: 'https://jestjs.io/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            description: 'A testing framework for JavaScript.',
            tags: ['testing', 'development', 'all']
        },
        mocha: {
            id: 28,
            name: 'Mocha',
            link: 'https://mochajs.org/',
            level: 6,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
            description: 'A testing framework for JavaScript.',
            tags: ['testing', 'app', 'development', 'all']
        }, 
        electron: {
            id: 29,
            name: 'Electron',
            link: 'https://www.electronjs.org/',
            level: 3,
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
            description: 'A platform for building desktop apps.',
            tags: ['frontend', 'spa', 'development', 'all']
        }, 
    },
    filter: ['all'],
    sortBy: 'tags'
};

// Create slice
export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            // Checks if the tag is already in the filter array
            if (state.filter.includes(action.payload)) {
                // Filters out the tag and returns all other selected filters
                let filteredArray = state.filter.filter((tag) => {
                    return tag != action.payload
                });
                // Sets new filtered array to the filter array
                state.filter = filteredArray;

                // Checks if removing the tag has emptied the array
                if (state.filter.length === 0) {
                    // If array is empty then 'all' tag is added
                    state.filter.push('all');
                }
                console.log(state.filter);
            } else {
                // Adds new tag to filter array
                state.filter.push(action.payload);

                // Checks if the array includes 'all' alongside other filters
                if (state.filter.includes('all') && state.filter.length >= 2) {
                    // Filters out the 'all' tag
                    let arrWithoutAll = state.filter.filter((tag) => {
                        return tag != 'all';
                    });
                    // Sets array without 'all' as the filter array
                    state.filter = arrWithoutAll;
                }
                console.log(state.filter);
            };
        },
        setFilter: (state, action) => {
            state.filter = [action.payload];
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    },
});

// Export all reducer actions individually
export const { addFilter, setFilter, setSortBy } = skillsSlice.actions;

// Export selectors individually
export const selectSkills = (state: RootState) => state.skills.skills;
export const selectFilter = (state: RootState) => state.skills.filter;
export const selectSortBy = (state: RootState) => state.skills.sortBy;

// Export reducer actions
export default skillsSlice.reducer;