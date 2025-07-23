import { Link } from "react-router-dom";

interface Experiment {
  id: string;
  title: string;
  description: string;
  path: string;
  status: "completed" | "in-progress" | "coming-soon";
}

const experiments: Experiment[] = [
  {
    id: "folder-tree",
    title: "Folder Tree Explorer",
    description:
      "Interactive collapsible folder tree component with state management.",
    path: "/folder-tree",
    status: "completed",
  },
  {
    id: "virtualized-list",
    title: "Virtualized List",
    description: "Efficiently render large lists with virtualization.",
    path: "/virtualized-list",
    status: "completed",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Components
          </h1>
          <p className="text-gray-600">
            Experimental React components and demos.
          </p>
        </div>

        {/* Experiments List */}
        <div className="flex flex-col gap-6">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ExperimentCardProps {
  experiment: Experiment;
}

const ExperimentCard = ({ experiment }: ExperimentCardProps) => {
  const { title, description, path, status } = experiment;

  const cardContent = (
    <div className="flex items-center hover:scale-103  ease-in-out justify-between p-4 border border-gray-200 rounded-lg hover:shadow-lg/5  transition-all">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          {status === "coming-soon" && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              Coming Soon
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {status !== "coming-soon" && <div className="text-gray-400 ml-4">→</div>}
    </div>
  );

  if (status === "coming-soon") {
    return <div className="cursor-not-allowed opacity-60">{cardContent}</div>;
  }

  return <Link to={path}>{cardContent}</Link>;
};

export default HomePage;
