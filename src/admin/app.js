import Logo from './extensions/logo.png';


export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
   // Replace the favicon
    head: {
      favicon: Logo,
    },
    // Add a new locale, other than 'en'
    locales: ['fr', 'de'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        alternative100: '#f6ecfc',
        alternative200: '#e0c1f4',
        alternative500: '#ac73e6',
        alternative600: '#9736e8',
        alternative700: '#8312d1',
        danger100: '#fcecea',
        danger200: '#f5c0b8',
        danger500: '#ee5e52',
        danger600: '#d02b20',
        danger700: '#b72b1a',
        neutral0: '#ffffff',
        neutral100: '#f6f6f9',
        neutral1000: '#181826',
        neutral150: '#eaeaef',
        neutral200: '#dcdce4',
        neutral300: '#c0c0cf',
        neutral400: '#a5a5ba',
        neutral500: '#8e8ea9',
        neutral600: '#666687',
        neutral700: '#4a4a6a',
        neutral800: '#32324d',
        neutral900: '#212134',
        primary100: '#f0f0ff',
        primary200: '#d9d8ff',
        primary500: '#7b79ff',
        primary600: '#1976d2',
        primary700: '#271fe0',
        secondary100: '#eaf5ff',
        secondary200: '#b8e1ff',
        secondary500: '#66b7f1',
        secondary600: '#0c75af',
        secondary700: '#006096',
        success100: '#eafbe7',
        success200: '#c6f0c2',
        success500: '#5cb176',
        success600: '#328048',
        success700: '#2f6846',
        warning100: '#fdf4dc',
        warning200: '#fae7b9',
        warning500: '#f29d41',
        warning600: '#d9822f',
        warning700: '#be5d01',
      },
    },
    // Extend the translations
    translations: {
      fr: {
        'Auth.form.email.label': 'test',
        Users: 'Utilisateurs',
        City: 'CITY (FRENCH)',
        // Customize the label of the Content Manager table.
        Id: 'ID french',
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: true },
  },

  bootstrap(app) {
    console.log(app);
  },
};
