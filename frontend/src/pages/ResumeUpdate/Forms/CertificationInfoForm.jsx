import { LuCirclePlus, LuTrash2 } from "react-icons/lu";
import Input from "../../../components/Inputs/Input";

const CertificationInfoForm = ({
  certifications,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>

      <div className="mt-4 flex flex-col gap-4 mb-3">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="border border-gray-200/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Certificate Title"
                type="text"
                placeholder="e.g. B.Sc in Computer science"
                value={certification.title || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "title", target.value)
                }
              />

              <Input
                label="Issuer"
                type="text"
                placeholder="e.g. University of Chile"
                value={certification.issuer || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issuer", target.value)
                }
              />

              <Input
                label="Year"
                type="text"
                placeholder="e.g. 2020"
                value={certification.year || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "year", target.value)
                }
              />
            </div>

            {certifications.length > 1 && (
              <button
                onClick={() => removeArrayItem(index)}
                className="absolute right-3 top-3 text-sm text-red-600 hover:underline cursor-pointer"
                type="button"
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
              issuer: "",
              year: "",
            })
          }
        >
          <LuCirclePlus /> Add Certifications
        </button>
      </div>
    </div>
  );
};

export default CertificationInfoForm;
