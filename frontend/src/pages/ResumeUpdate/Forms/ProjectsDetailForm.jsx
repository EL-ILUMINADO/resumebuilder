import { LuCirclePlus, LuTrash2 } from "react-icons/lu";
import Input from "../../../components/Inputs/Input";

const ProjectsDetailForm = ({
  projectsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Projects</h2>

      <div className="mt-4 flex flex-col gap-4 mb-3">
        {projectsInfo.map((project, index) => (
          <div
            className="border border-gray-200/80 p-4 rounded-lg relative"
            key={index}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <Input
                  label="Project Title"
                  type="text"
                  placeholder="e.g. Content Creation App with AI"
                  value={project.title || ""}
                  onChange={({ target }) =>
                    updateArrayItem(index, "title", target.value)
                  }
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs font-medium text-slate-600">
                  Description
                </label>
                <textarea
                  className="form-input w-full mt-1"
                  placeholder="Short description about the project"
                  rows={3}
                  value={project.description || ""}
                  onChange={({ target }) =>
                    updateArrayItem(index, "description", target.value)
                  }
                />
              </div>

              <Input
                label="Github Link"
                type="url"
                placeholder="e.g. https://github.com/..."
                value={project.github || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "github", target.value)
                }
              />

              <Input
                label="Live Demo URL"
                type="url"
                placeholder="e.g. https://calendly.vercel.app"
                value={project.liveDemo || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "liveDemo", target.value)
                }
              />
            </div>

            {projectsInfo.length > 1 && (
              <button
                className="absolute right-3 top-3 text-sm text-red-600 hover:underline cursor-pointer"
                type="button"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}

        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
          type="button"
          onClick={() =>
            addArrayItem({
              title: "",
              description: "",
              github: "",
              liveDemo: "",
            })
          }
        >
          <LuCirclePlus /> Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsDetailForm;
