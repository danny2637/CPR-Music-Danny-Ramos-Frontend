import { useState, useRef } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import Layout from '../../components/layout';
import { useMutation } from 'react-query';
import { mutateCreatePiece } from '../../api';
import dynamic from 'next/dynamic';

const FlatFullCompose = dynamic(() => import('./flat-full-compose'), {
    ssr: false,
});



export default function NewPieceForm() {

    const [currentStep, setCurrentStep] = useState(1);
    const [triedStep, setTriedStep] = useState(false);
    const [formData, setFormData] = useState({
        pieceName: '',
        ensembleTypeName: '',
        composerName: '',
        composerUrl: '',
        arrangerName: '',
        melody: { F: '', Eb: '', Concert_Pitch_TC_8: '', Concert_Pitch_TC: '', Concert_Pitch_BC_8vb: '', Concert_Pitch_BC: '', Bb: '', Alto_Clef: '' },
        bassline: { F: '', Eb: '', Concert_Pitch_TC_8: '', Concert_Pitch_TC: '', Concert_Pitch_BC_8vb: '', Concert_Pitch_BC: '', Bb: '', Alto_Clef: '' },
        accompanimentFile: null,
        melodySampleFile: null,
        basslineSampleFile: null,
        audioLinks: '',
        reflectPrompt: '',
        connectPrompt: '',
        parts: ''
    });

    const transpositionKeyMap = {
        F: 'F',
        Eb: 'Eb',
        Concert_Pitch_TC_8: 'Concert Pitch TC 8va',
        Concert_Pitch_TC: 'Concert Pitch TC',
        Concert_Pitch_BC_8vb: 'Concert Pitch BC 8vb',
        Concert_Pitch_BC: 'Concert Pitch BC',
        Bb: 'Bb',
        Alto_Clef: 'Alto Clef',
    };


    const createPieceMutation = useMutation(mutateCreatePiece(), {
        onSuccess: (data) => {
            console.log('Piece created successfully:', data);
            alert('Piece submitted successfully!');
        },
        onError: (error) => {
            console.error('Error creating piece:', error);
            alert('Something went wrong when submitting the piece.');
        },
    });

    const flatInstanceRef = useRef(null);
    const basslineEditorRef = useRef(null);

    const handleChange = (section, field, value) => {
        if (section) {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [field]: value
            }));
        }
    };

    const handleFileChange = (field, file) => {
        setFormData(prev => ({
            ...prev,
            [field]: file
        }));
    };

    const validateStep = () => {
        if (currentStep === 1) {
            return formData.pieceName.trim() && formData.composerName.trim();
        }
        if (currentStep === 2) {
            return formData.arrangerName.trim();
        }
        return true;
    };

    const nextStep = () => {
        if (!validateStep()) {
            setTriedStep(true);
            return;
        }
        setTriedStep(false);
        setCurrentStep(prev => prev + 1);
    };

    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        const piecePayload = {
            name: formData.pieceName,
            slug: formData.pieceName.toLowerCase().replace(/\s+/g, '-'),
            ensemble_type: formData.ensembleTypeName,
            composer: {
                name: formData.composerName,
                url: formData.composerUrl || null,
            },
            accompaniment: formData.accompanimentFile || null,
            video: formData.audioLinks || null,
            parts: formData.parts || [],
        };
        console.log('Submitting to backend:', piecePayload);
        createPieceMutation.mutate(piecePayload);
    };


    return (
        <Layout>
            <Container className="mt-5">
                <Card className="p-4 shadow">
                    <h2 className="mb-4">Submit a New Piece</h2>
                    <Form onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <>
                                <h5>Piece Info</h5>

                                <Form.Group className="mb-3">
                                    <Form.Label>Piece Name</Form.Label>
                                    <Form.Control
                                        value={formData.pieceName}
                                        onChange={e => handleChange(null, 'pieceName', e.target.value)}
                                        isInvalid={triedStep && !formData.pieceName.trim()}
                                        placeholder="e.g. Take Five"
                                    />
                                    <Form.Control.Feedback type="invalid">Piece Name is required.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Composer Name</Form.Label>
                                    <Form.Control
                                        value={formData.composerName}
                                        onChange={e => handleChange(null, 'composerName', e.target.value)}
                                        isInvalid={triedStep && !formData.composerName.trim()}
                                        placeholder="e.g. Paul Desmond"
                                    />
                                    <Form.Control.Feedback type="invalid">Composer Name is required.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Composer URL (optional)</Form.Label>
                                    <Form.Control
                                        value={formData.composerUrl}
                                        onChange={e => handleChange(null, 'composerUrl', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="ensembleType" className="mb-3">
                                    <Form.Label>Ensemble Type</Form.Label>
                                    <Form.Select
                                        value={formData.ensembleTypeName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, ensembleTypeName: e.target.value })
                                        }
                                    >
                                        <option value="">Select an ensemble type</option>
                                        <option value="Band">Band</option>
                                        <option value="Orchestra">Orchestra</option>
                                    </Form.Select>
                                </Form.Group>

                                <Button className="mt-3" onClick={nextStep}>
                                    Next
                                </Button>

                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <h5>Arranger Info</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Arranger Name</Form.Label>
                                    <Form.Control
                                        value={formData.arrangerName}
                                        onChange={e => handleChange(null, 'arrangerName', e.target.value)}
                                        isInvalid={triedStep && !formData.arrangerName.trim()}
                                        placeholder="Your name or alias"
                                    />
                                    <Form.Control.Feedback type="invalid">Arranger Name is required.</Form.Control.Feedback>
                                </Form.Group>

                                <Button onClick={prevStep} className="me-2">Back</Button>
                                <Button onClick={nextStep}>Next</Button>
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <h5>Melody Transpositions (optional)</h5>
                                {['F', 'Eb', 'Concert_Pitch_TC_8', 'Concert_Pitch_TC', 'Concert_Pitch_BC_8vb', 'Concert_Pitch_BC', 'Bb', 'Alto_Clef'].map(key => (
                                    <div key={key} className="mb-3">
                                        <Form.Label>{transpositionKeyMap[key]}</Form.Label>
                                        <FlatFullCompose
                                            onReady={(embed) => {
                                                if (!flatInstanceRef.current) flatInstanceRef.current = {};
                                                flatInstanceRef.current[key] = embed;
                                            }}
                                        />
                                    </div>
                                ))}

                                <Button onClick={prevStep} className="me-2">Back</Button>
                                <Button
                                    onClick={async () => {
                                        const melodyTranspositions = [];

                                        for (const key of Object.keys(transpositionKeyMap)) {
                                            if (flatInstanceRef.current?.[key]) {
                                                const json = await flatInstanceRef.current[key].getJSON();
                                                console.log(`Melody JSON for ${key}:`, json);
                                                melodyTranspositions.push({
                                                    transposition: transpositionKeyMap[key],
                                                    flatio: JSON.stringify(json),
                                                });
                                            }
                                        }

                                        const melodyPart = {
                                            name: `${formData.pieceName} Melody`,
                                            part_type: 'Melody',
                                            transpositions: melodyTranspositions,
                                        };

                                        // Overwrite "parts" with just the melody part for now
                                        handleChange(null, 'melody', {}); // optional clear
                                        handleChange(null, 'parts', [melodyPart]);

                                        nextStep();
                                    }}
                                >
                                    Next
                                </Button>
                            </>
                        )}

                        {currentStep === 4 && (
                            <>
                                {['F', 'Eb', 'Concert_Pitch_TC_8', 'Concert_Pitch_TC', 'Concert_Pitch_BC_8vb', 'Concert_Pitch_BC', 'Bb', 'Alto_Clef'].map(key => (
                                    <div key={key} className="mb-3">
                                        <Form.Label>{transpositionKeyMap[key]}</Form.Label>
                                        <FlatFullCompose
                                            onReady={(embed) => {
                                                if (!basslineEditorRef.current) basslineEditorRef.current = {};
                                                basslineEditorRef.current[key] = embed;
                                            }}
                                        />
                                    </div>
                                ))}

                                <Button onClick={prevStep} className="me-2">Back</Button>
                                <Button
                                    onClick={async () => {
                                        const basslineTranspositions = [];

                                        for (const key of Object.keys(transpositionKeyMap)) {
                                            if (basslineEditorRef.current?.[key]) {
                                                const json = await basslineEditorRef.current[key].getJSON();
                                                console.log(`Bassline JSON for ${key}:`, json);
                                                basslineTranspositions.push({
                                                    transposition: transpositionKeyMap[key],
                                                    flatio: JSON.stringify(json),
                                                });
                                            }
                                        }

                                        const basslinePart = {
                                            name: `${formData.pieceName} Bassline`,
                                            part_type: 'Bassline',
                                            transpositions: basslineTranspositions,
                                        };

                                        // Add bassline to the existing parts array that already has melody
                                        const updatedParts = [...(formData.parts || []).filter(p => p.part_type !== 'Bassline'), basslinePart];

                                        handleChange(null, 'bassline', {}); // optional clear
                                        handleChange(null, 'parts', updatedParts);

                                        nextStep();
                                    }}
                                >
                                    Next
                                </Button>
                            </>
                        )}

                        {currentStep === 5 && (
                            <>
                                <h5>Publishing Requirements</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Accompaniment Recording</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={e => handleFileChange('accompanimentFile', e.target.files[0])}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Melody Sample Recording</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={e => handleFileChange('melodySampleFile', e.target.files[0])}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Bassline Sample Recording</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={e => handleFileChange('basslineSampleFile', e.target.files[0])}
                                    />
                                </Form.Group>

                                <Button onClick={prevStep} className="me-2">Back</Button>
                                <Button onClick={nextStep}>Next</Button>
                            </>
                        )}

                        {currentStep === 6 && (
                            <>
                                <h5>Optional Details</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Audio/Video Links</Form.Label>
                                    <Form.Control
                                        value={formData.audioLinks}
                                        onChange={e => handleChange(null, 'audioLinks', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Reflect/Respond Prompt</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={formData.reflectPrompt}
                                        onChange={e => handleChange(null, 'reflectPrompt', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Connect Prompt</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={formData.connectPrompt}
                                        onChange={e => handleChange(null, 'connectPrompt', e.target.value)}
                                    />
                                </Form.Group>

                                <Button onClick={prevStep} className="me-2">Back</Button>
                                <Button type="submit">Submit for Review</Button>
                            </>
                        )}
                    </Form>
                </Card>
            </Container>
        </Layout>
    );
}
