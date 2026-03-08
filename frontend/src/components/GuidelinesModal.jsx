import { FiX, FiBookOpen } from 'react-icons/fi';
import './GuidelinesModal.css';

const GUIDELINE_SECTIONS = [
    {
        title: 'Activity Categories',
        items: [
            'Institute Level — Activities organized at the institute level (e.g., annual fests, inter-college events, NCC/NSS).',
            'Department Level — Activities organized at the department level (e.g., workshops, seminars, department clubs).',
        ],
    },
    {
        title: 'Point Ranges by Activity Type',
        table: [
            ['Activity Type', 'Min Points', 'Max Points'],
            ['Workshop / Seminar Attendance', '5', '15'],
            ['Paper Presentation / Publication', '15', '40'],
            ['Hackathon / Competition', '10', '50'],
            ['Sports / Cultural Event', '10', '30'],
            ['Community Service / Outreach', '5', '25'],
            ['Leadership / Organization Role', '10', '30'],
            ['Online Certification Course', '5', '20'],
        ],
    },
    {
        title: 'Document Requirements',
        items: [
            'Upload supporting documents in PDF, JPG, or PNG format only.',
            'Maximum file size: 1 MB per file.',
            'Maximum 3 files per submission.',
            'Documents must clearly show participant name, event name, and date.',
            'Certificates must be issued by a recognized authority.',
        ],
    },
    {
        title: 'Submission Rules',
        items: [
            'Each activity can be submitted only once — duplicate submissions will be rejected.',
            'Submissions must be made within 30 days of the activity completion.',
            'Draft submissions can be saved and completed later.',
            'Pending submissions can be edited or withdrawn before FA review.',
            'Once approved or rejected, submissions cannot be modified by the student.',
        ],
    },
    {
        title: 'Graduation Requirements',
        items: [
            'Minimum 40 Institute Level activity points required.',
            'Minimum 40 Department Level activity points required.',
            'Total of 80 activity points needed for graduation eligibility.',
            'Points are tracked semester-wise and cumulated for the degree program.',
        ],
    },
];

export default function GuidelinesModal({ onClose }) {
    return (
        <div className="guidelines-overlay" onClick={onClose}>
            <div className="guidelines-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="guidelines-modal-header">
                    <div className="guidelines-header-left">
                        <FiBookOpen className="guidelines-header-icon" />
                        <h2 className="guidelines-modal-title">Activity Point Guidelines</h2>
                    </div>
                    <button className="guidelines-close-btn" onClick={onClose} aria-label="Close">
                        <FiX />
                    </button>
                </div>

                {/* Content */}
                <div className="guidelines-modal-body">
                    {GUIDELINE_SECTIONS.map((section, idx) => (
                        <div className="guidelines-section" key={idx}>
                            <h3 className="guidelines-section-title">{section.title}</h3>

                            {section.items && (
                                <ul className="guidelines-list">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="guidelines-list-item">{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.table && (
                                <div className="guidelines-table-wrapper">
                                    <table className="guidelines-table">
                                        <thead>
                                            <tr>
                                                {section.table[0].map((h, i) => (
                                                    <th key={i}>{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.slice(1).map((row, ri) => (
                                                <tr key={ri}>
                                                    {row.map((cell, ci) => (
                                                        <td key={ci}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
