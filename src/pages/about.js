import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const About = styled.div`
  section {
    margin-bottom: 30px;
    h2 {
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 20px;
    }
    ul {
      margin: 5px 0;
      li {
        line-height: 1.5;
        &:before {
          content: '- ';
        }
      }
    }
    .block {
      margin: 20px 0;
    }
  }
`;

const AboutPage = () => {
  return (
    <About>
      <Header title="About" description="Here's my story." />
      <section>
        <h2>The basics</h2>
        <div className="block">
          <p>
            My name is Myles Enriquez. I'm a Frontend Engineer. I enjoy building
            websites and web applications.
          </p>
        </div>
      </section>
      <section>
        <h2>The details</h2>
        <div className="block">
          <p>Here's how I got into coding.</p>
          <p>
            I didn't start to code until College. That's the first time I opened
            up a terminal, wrote a script, and watch it run. I've always enjoyed
            breaking and building things. Whether it was leggos when I was 5 (or
            even now) or doing some basic wood working to make furniture. It all
            came back to the idea of building something from scratch, for a
            purpose (or even just for fun).
          </p>
          <p>
            When I found out about coding and the fact that you could still
            build things with just a desk, laptop, and your imagination. I was
            hooked.
          </p>
          <p>
            Then 3 years into Computer Science in college, I sort of hit a
            plateua. Coding was great, don't get me wrong, but I wanted more
            than just building data structures and finding the best algorithm to
            use. I wanted visuals. Growing up, I loved to draw and paint. I
            loved the colors and how they could create beautiful visuals.
          </p>
          <p>
            That's when I took a mobile app design course. It was strictly
            design, and no coding. It literally opened up a whole different
            world. That's when I discovered Frontend development.
          </p>
          <p>
            From then on I took it upon myself to learn JavaScript and all the
            frameworks/tools that followed after (I'm currently on React and
            Gatsby). I learned more about HTML/CSS and ventured into their
            sub-areas like SEO, accessibility, animations, and layout modes.
          </p>
          <p>
            From then on I've been building small applications to learn some
            concept or just to experiment.
          </p>
        </div>
      </section>
      <section>
        <h2>The personality and lifestyle</h2>
        <div className="block">
          <p>
            I'm all about general well-being and stayling active, healthy, and
            happy. I do some yoga, love the outdoors, and practice Brazilian Jiu
            Jitsu (might have a blog about my bjj journey soon).
          </p>
          <p>
            I love craft coffee and beer. Oh, and teas are amazing as well. I
            love thinking outside the box and I would say I'm pretty
            open-minded.
          </p>
          <p>
            When I'm not coding or behind a screen, I'm either outside or
            practicing bjj.
          </p>
        </div>
      </section>
      <Footer />
    </About>
  );
};

export default AboutPage;
