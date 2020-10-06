import { Card } from '../components/Card.tsx';

const Contact = () => (
  <Card className="w-4/5 md:w-2/4">
    <h1 className="text-2xl">Want to reach out?</h1>
    <p className="py-2">
      Professional Opportunities? Talk about tech things? Tell me how terrible
      this orange background is?
    </p>
    <p>
      Feel free to email me at:{' '}
      <a
        className="text-blue-400 underline"
        href="mailto:brendankyledavies@gmail.com?subject=How%20interesting&body=I-have-many-moneys-for-you"
      >
        BrendanKyleDavies@gmail.com
      </a>
    </p>
  </Card>
);

export default Contact;
