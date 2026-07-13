import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScenarioStructuredSteps from '../../src/features/business-scenarios/components/ScenarioStructuredSteps';
import { DetailedSequence } from '../../src/features/business-scenarios/sequence-diagram/components/RaiaSequenceDiagram';

describe('ScenarioStructuredSteps', () => {
  const mockSequence: DetailedSequence = {
    scenarioId: 'TEST-BS-001',
    title: 'Test Scenario',
    participants: [
      { instanceId: 'P1', label: 'Participant 1', order: 1 },
      { instanceId: 'P2', label: 'Participant 2', order: 2 }
    ],
    messages: [
      { id: 'M1', sequence: 1, sourceParticipantInstanceId: 'P1', targetParticipantInstanceId: 'P2', label: 'First Message', messageType: 'command' },
      { id: 'M2', sequence: 2, sourceParticipantInstanceId: 'P2', targetParticipantInstanceId: 'P1', label: 'Second Message', messageType: 'response' }
    ]
  };

  it('renders an empty state when there are no messages', () => {
    render(<ScenarioStructuredSteps activeStep={1} onStepChange={jest.fn()} />);
    expect(screen.getByText('Pasos estructurados del escenario')).toBeInTheDocument();
    expect(screen.getByText('Este escenario todavía no contiene pasos estructurados.')).toBeInTheDocument();
  });

  it('renders the correct number of steps in sequence order', () => {
    render(<ScenarioStructuredSteps sequence={mockSequence} activeStep={1} onStepChange={jest.fn()} />);
    const steps = screen.getAllByTestId('scenario-structured-step');
    expect(steps).toHaveLength(2);
    expect(steps[0]).toHaveTextContent('First Message');
    expect(steps[1]).toHaveTextContent('Second Message');
  });

  it('highlights the active step with aria-current="step"', () => {
    render(<ScenarioStructuredSteps sequence={mockSequence} activeStep={1} onStepChange={jest.fn()} />);
    const steps = screen.getAllByTestId('scenario-structured-step');
    expect(steps[0]).toHaveAttribute('aria-current', 'step');
    expect(steps[1]).not.toHaveAttribute('aria-current');
  });

  it('calls onStepChange when a step is clicked', () => {
    const mockOnChange = jest.fn();
    render(<ScenarioStructuredSteps sequence={mockSequence} activeStep={1} onStepChange={mockOnChange} />);
    const steps = screen.getAllByTestId('scenario-structured-step');
    fireEvent.click(steps[1]);
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it('resolves source and target labels correctly', () => {
    render(<ScenarioStructuredSteps sequence={mockSequence} activeStep={1} onStepChange={jest.fn()} />);
    const steps = screen.getAllByTestId('scenario-structured-step');
    expect(steps[0]).toHaveTextContent('Participant 1 → Participant 2');
  });
});
