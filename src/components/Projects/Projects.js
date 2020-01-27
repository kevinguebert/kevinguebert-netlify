// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Projects.module.scss';
import Section from '../Section';
import ExperienceUnit from '../ExperienceUnit';

import emoodji from '../../../static/media/projects/Emoodji.png'
import harvyLogo from '../../../static/media/projects/harvy-social.jpg'
import harvyBPMLogo from '../../../static/media/projects/harvy-bpm.png'
import awLogo from '../../../static/media/projects/aww.jpg'
import notDead from '../../../static/media/projects/not-dead.jpg'

type Props = {
  edges: Edges
};

const Projects = ({ edges }: Props) => (
  <div>
    <Section title="Projects">
      <ExperienceUnit
        logo={harvyLogo}
        colour="#ff8c36"
        title="Harvy"
        cover
        link="https://harvy.app"
        timeperiod="2018 - Present"
        subtitle="Enjoy your runs with music that matches the elevation and difficulty of the path ahead. Side project built with React + Swift. Work in Progress."
      />
      <ExperienceUnit
        logo={emoodji}
        colour="#33435f"
        title="Emoodji"
        cover
        link="https://coda.io/d/Emoodji_d2tRkelpm2c/_suusf"
        timeperiod="2019"
        subtitle="A no-code application built with Coda. Winner of the ProductHunt 2019 No-Code Makers Festival"
      />
      <ExperienceUnit
        logo={harvyBPMLogo}
        colour="#312F31"
        title="BPM Explorer"
        cover
        link="https://bpm.harvy.app"
        timeperiod="2019"
        subtitle="Search for any song's BPM with Spotify."
      />
      <ExperienceUnit
        logo={awLogo}
        colour="#312F31"
        title="Aww New Tab"
        cover
        link="https://chrome.google.com/webstore/detail/aww-new-tab/imjpmelkeecfmlnnbobmneokhnamegpd"
        timeperiod="2019"
        subtitle="A Chrome Extension to spice up your new tab with gifs or images"
      />
      <ExperienceUnit
        logo={notDead}
        colour="#312F31"
        title="Not Dead Yet"
        cover
        link="https://chrome.google.com/webstore/detail/not-dead-yet/cemlmfgclebhbiphkabobhgbhgpnhbdc"
        timeperiod="2019"
        subtitle="Check if a product is dead before clicking on the link."
      />
    </Section>
  </div>
);

export default Projects;
