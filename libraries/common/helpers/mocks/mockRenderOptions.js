import PropTypes from 'prop-types';

const options = {
  context: {
    i18n: () => ({
      __(input) {
        if (input) {
          return input;
        }
        return '';
      },
      _p: () => 'p',
      _d: () => 'd',
    }),
  },
  childContextTypes: {
    i18n: PropTypes.func,
  },
};

export default options;
