import React from 'react';
import { Row, Col } from 'antd';
import { ResumeHeader, ContactItem, PortfolioLinks } from './Resume.styles';
import {
  Avatar,
  Button,
  Title,
  TitleAnimated,
  TimeLine,
  Tags,
} from '../../components';

const tags = [
  'html',
  'css',
  'react',
  'react-native',
  'html',
  'css',
  'react',
  'react-native',

  'html',
  'css',
  'react',
  'react-native',

  'html',
  'css',
  'react',
  'react-native',
];

const Resume = () => {
  return (
    <>
      <ResumeHeader>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 31 }}>
          <Col
            span={24}
            className="gutter-row header-avatar"
            lg={12}
            md={12}
            sm={24}
          >
            <Avatar
              size="360px"
              sizeM="260px"
              weight="600"
              img="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/cesar-rincon-1024x1024.jpg"
              rounded
              right
            />
          </Col>
          <Col span={24} className="header-info" lg={12} md={12} sm={24}>
            <div>
              <TitleAnimated
                size="1.6rem"
                weight="500"
                margin="0 0 10px 0"
                color="#aaa"
              >
                Front-end developer
              </TitleAnimated>
              <Title size="4.8rem" weight="500" margin="0 0 20px 0">
                Alex Smith
              </Title>
              <p className="header-description">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>
              <Button>Download CV</Button>
            </div>
          </Col>
        </Row>
      </ResumeHeader>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 31 }}>
        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Job Format
          </Title>

          <ContactItem>
            <i className="fas fa-users"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              Office
            </Title>
          </ContactItem>
          <ContactItem>
            <i className="fas fa-laptop"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              Remote
            </Title>
          </ContactItem>
        </Col>
        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Contacts
          </Title>
          <ContactItem>
            <i className="fas fa-location-arrow"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              Russia, Moscow
            </Title>
          </ContactItem>
          <ContactItem>
            <i className="fas fa-phone"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              +998909243031
            </Title>
          </ContactItem>
          <ContactItem>
            <i className="far fa-envelope"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              smartappcode@gmail.com
            </Title>
          </ContactItem>
          <ContactItem>
            <i className="fas fa-paper-plane"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              @smartcode
            </Title>
          </ContactItem>
          <ContactItem>
            <i className="fab fa-github"></i>
            <Title size="1.6rem" weight="500" margin="0 0 10px 0" color="#aaa">
              Git9243031
            </Title>
          </ContactItem>
        </Col>

        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Main Skills
          </Title>
          <Tags
            tags={tags}
            // floatLeft
          />
        </Col>
        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Additional Skills
          </Title>
          <Tags
            tags={tags}
            // floatLeft
          />
        </Col>

        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Education
          </Title>
          {Array.apply(null, Array(3)).map((itemData, index) => (
            <TimeLine key={index} data={itemData} />
          ))}
        </Col>
        <Col span={24} className="gutter-row" lg={12} md={12} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Experience
          </Title>
          {Array.apply(null, Array(5)).map((itemData, index) => (
            <TimeLine key={index} data={itemData} />
          ))}
        </Col>

        <Col span={24} className="gutter-row" lg={24} md={24} sm={24}>
          <Title
            size="2.1rem"
            margin="30px 0 30px"
            marginM="18px 0 30px 0"
            highlight
          >
            Portfolio Links
          </Title>
          <PortfolioLinks>
            <ul>
              {Array.apply(null, Array(5)).map((item, index) => (
                <li key={index}>
                  <a href="https://cryptocurrencies.ai">
                    https://cryptocurrencies.ai
                  </a>
                </li>
              ))}
            </ul>
          </PortfolioLinks>
        </Col>
      </Row>
    </>
  );
};

export default Resume;
