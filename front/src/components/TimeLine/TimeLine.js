import React from 'react';
import { Title } from '../';
import {
  TimeLineBox,
  TimeLineHeading,
  TimeLinePeriod,
} from './TimeLine.styles';

const TimeLine = () => {
  return (
    <TimeLineBox>
      <TimeLineHeading>
        <TimeLinePeriod>2008 - 2015</TimeLinePeriod>
        <Title>University of Studies</Title>
      </TimeLineHeading>
      <Title>UI Design</Title>
      <p>
        Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in
        posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis
        fermentum.
      </p>
    </TimeLineBox>
  );
};

export default TimeLine;
