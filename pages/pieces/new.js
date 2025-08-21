import Link from 'next/link';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import Layout from '../../components/layout';

export default function CollabDashboard() {
  return (
    <Layout>
      <Container className="mt-5 text-center">
        <Card className="p-4 shadow">
          <h1>Collaborators Dashboard</h1>
          <p className="mt-3">
            There’s a *lotttttt* of music out there and we need your help! 🎵<br />
            MusicCPR is about building a shared library of educational music resources created
            by the community, for the community.
          </p>
          <p>
            Ready to contribute? Click below to start your submission.
          </p>
          <Link href="/pieces/create" passHref legacyBehavior>
            <Button variant="primary" size="lg" className="mt-4">
              Start Your Submission
            </Button>
          </Link>
        </Card>
      </Container>
    </Layout>
  );
}