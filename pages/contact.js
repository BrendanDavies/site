import { Card } from '../components/Card.tsx';

const Contact = () => (
  <Card className="min-h-200">
    <h1 className="text-2xl">Want to reach out?</h1>
    <p className="py-2">
      Professional Opportunities? Talk about tech things? Tell me how terrible
      this orange background is?
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
