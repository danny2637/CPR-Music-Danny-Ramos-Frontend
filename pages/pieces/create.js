import { Table, Button, Container, Card, Badge } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function CreatePiecePage() {

    // Get from backend instead of frontend

    const SUBMISSION_STATUSES = ['draft', 'submitted', 'under_review', 'approved', 'rejected', 'published'];

    const PART_STATUSES = ['pending', 'approved', 'needs_changes'];

    const RECORDING_STATUSES = ['uploaded', 'verified', 'needs_replacement'];

    return (
        <Layout>
            <Container className="mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>My Submissions</h2>
                    <Link href="/pieces/submission" passHref legacyBehavior>
                        <Button variant="success">+ Submit New Piece</Button>
                    </Link>
                </div>

                <Card className="p-3 shadow">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Submitted By</th>
                                <th>Status</th>
                                <th>Last Updated</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Take Five</td>
                                <td>Danny Ramos</td>
                                <td><Badge bg="warning">Under Review</Badge></td>
                                <td>June 20, 2025</td>
                                <td><Button variant="outline-primary" size="sm">View</Button></td>
                            </tr>
                            <tr>
                                <td>Whiplash</td>
                                <td>Danny Ramos</td>
                                <td><Badge bg="success">Approved</Badge></td>
                                <td>June 19, 2025</td>
                                <td><Button variant="outline-primary" size="sm">View</Button></td>
                            </tr>
                            <tr>
                                <td>Blue Velvet</td>
                                <td>Danny Ramos</td>
                                <td><Badge bg="secondary">Draft</Badge></td>
                                <td>June 18, 2025</td>
                                <td><Button variant="outline-primary" size="sm">View</Button></td>
                            </tr>
                            <tr>
                                <td>Easy Living</td>
                                <td>Danny Ramos</td>
                                <td><Badge bg="danger">Rejected</Badge></td>
                                <td>June 17, 2025</td>
                                <td><Button variant="outline-primary" size="sm">View</Button></td>
                            </tr>
                            <tr>
                                <td>Maybe</td>
                                <td>Danny Ramos</td>
                                <td><Badge bg="info">Published</Badge></td>
                                <td>June 16, 2025</td>
                                <td><Button variant="outline-primary" size="sm">View</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </Layout>
    );
}
