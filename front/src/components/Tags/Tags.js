import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from '../';
import { TagsContainer } from './Tags.styles';
import { colors } from '../../helpers/colors';

const Tags = ({ tags, floatLeft }) => {
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          floatLeft={floatLeft}
          color={colors[colors.length > index ? index : index - colors.length]}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  floatLeft: PropTypes.string,
};

export default Tags;
