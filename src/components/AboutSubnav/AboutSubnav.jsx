import './AboutSubnav.css';

const tabs = [
  { id: 'who', label: 'WHO I AM' },
  { id: 'what', label: 'WHAT I DO' },
  { id: 'toolkit', label: 'TOOLKIT' },
  { id: 'journey', label: 'MY JOURNEY' },
  { id: 'education', label: 'EDUCATION' },
];

function AboutSubnav({ activeTab, onChange }) {
  return (
    <div className="about-subnav">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`about-subitem ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export default AboutSubnav;