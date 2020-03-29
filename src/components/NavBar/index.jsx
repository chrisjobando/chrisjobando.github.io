import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Menu Icon
import { Icon } from '@iconify/react';
import menu from '@iconify/icons-mdi/menu';

// Styling
import style from './navbar.module.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 82, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={style.Background} />
      <div className={style.Container}>
        <div />
        <Img fixed={data.file.childImageSharp.fixed} />
        <Icon icon={menu} width="32px" />
      </div>
    </>
  );
};
