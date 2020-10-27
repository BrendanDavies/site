import { Card } from '../components/Card.tsx';
import { SectionHeader } from '../components/SectionHeader.tsx';

const Contact = () => (
  <Card className="w-4/5 md:w-2/4 text-on-secondary">
    <SectionHeader>Want to reach out?</SectionHeader>
    <p className="py-2 ">
      Professional Opportunities? Talk about tech things? Tell me how much this
      sites color palette looks like a law firm?
    </p>
    <p>
      Feel free to email me at:{' '}
      <a
        className="text-blue-800 underline"
        href="mailto:brendankyledavies@gmail.com?subject=How%20interesting&body=I-have-many-moneys-for-you"
      >
        BrendanKyleDavies@gmail.com
      </a>
    </p>
  </Card>
);

export default Contact;
