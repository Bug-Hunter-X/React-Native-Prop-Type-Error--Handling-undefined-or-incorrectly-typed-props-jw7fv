// FixedComponent.js
import React from 'react';
import PropTypes from 'prop-types'; // Or use TypeScript

const FixedComponent = ({ name, age = 0 }) => {
  return (
    <Text>
      Hello, my name is {name}, I am {age} years old.
    </Text>
  );
};

FixedComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default FixedComponent;