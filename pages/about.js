import { Card } from '../components/Card.tsx';
import { SectionHeader } from '../components/SectionHeader.tsx';

const About = () => (
  <Card className="w-4/5 md:w-2/4 text-on-secondary">
    <SectionHeader>about</SectionHeader>
    <p className="m-2">My name is Brendan.</p>
    <p className="m-2">
      I am a Software Engineer who has worked across many platforms, from DBA to
      Frontend Developer, and enjoys the common threads between them.
    </p>
    <p className="m-2">
      In my free time I attempt to be a Woodworker, travel whenever possible,
      and spend time with my animals when it is not.
    </p>
  </Card>
);

export default About;
