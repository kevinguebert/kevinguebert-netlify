// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './About.module.scss';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';
import outside from '../../../static/media/experience/outside.png'
import srLogo from '../../../static/media/experience/sr.jpg'
import activityBuzz from '../../../static/media/experience/ab.png'

type Props = {
  edges: Edges
};

const About= ({ edges }: Props) => (
  <div>
    <Section title="Experience">
      <ExperienceUnit
        logo={outside}
        colour='#FFF'
        title='Outside'
        link='https://www.outsideonline.com/'
        timeperiod='2017 - Present'
        subtitle='Helping bring the outdoors online. Web development with Drupal - PHP, JS, MySQL.'
      />
      <ExperienceUnit
        logo={srLogo}
        colour='#1a1a1a'
        title='SapientRazorfish_'
        link='https://www.publicissapient.com'
        timeperiod='2016-2017'
        subtitle='iOS Mobile App Developer. Created a new hire training program, worked on large-scale client teams'
      />
      <ExperienceUnit
        logo={activityBuzz}
        colour='#fc895a'
        title='ActivityBuzz'
        link=''
        timeperiod='2017 - 2018'
        subtitle='Lead developer (Ruby on Rails + iOS) for a now failed startup in Atlanta'
      />

    </Section>
  </div>
);

export default About;
