import React, {useEffect, useRef, useState} from "react";

import {
  DUMMY_RESUME_DATA,
  resumeTemplates,
  themeColorPalettes,
} from "../../utils/data";
import {LuCircleCheckBig} from "react-icons/lu";
import Tabs from "../../components/Tabs";
import TemplateCard from "../../components/cards/TemplateCard.jsx";
import RenderResume from "../../components/resumeTemplates/RenderResume.jsx";

const TAB_DATA = [{label: "Templates"}, {label: "Color Palettes"}];

const ThemeSelector = ({
                         selectedTheme,
                         setSelectedTheme,
                         resumeData,
                         onClose,
                       }) => {
  const resumeRef = useRef(null);

  const [baseWidth, setBaseWidth] = useState(800);

  const [tabValue, setTabValue] = useState("Templates");
  const [selectedColorPalette, setSelectedColorPalette] = useState({
    colors: selectedTheme?.colorPalette,
    index: -1,
  });
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: selectedTheme?.theme || "",
    index: -1,
  });

  // Function to handle template selection

  const handleThemeSelection = () => {
    setSelectedTheme({
      colorPalette: selectedColorPalette?.colors,
      theme: selectedTemplate?.theme,
    });
    onClose();
  };

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);

  return (
    <div className="container mx-auto px-2 md:px-10">
      <div className="flex items-center justify-between mb-5 mt-2">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue}/>

        <button className="btn-small-light" onClick={() => handleThemeSelection()}>
          <LuCircleCheckBig className={"text-[16px]"}/>
          Done
        </button>
      </div>

      <div className={"grid grid-cols-12 gap-5"}>
        <div className={"col-span-12 md:col-span-5 bg-white"}>
          <div className={"grid grid-cols-2 gap-5 max-h-[80vh] overflow-scroll custom-scrollbar" +
            " md:pr-5"}>
            {tabValue === "Templates" && resumeTemplates.map((template, index) => (
              <TemplateCard
                key={`templates_${index}`}
                thumbnailImg={template.thumbnailImg}
                isSelected={selectedTemplate?.index === index}
                onSelect={() => {
                  setSelectedTemplate({theme: template.id, index})
                }}
              />
            ))}

            {tabValue === "Color Palettes" && themeColorPalettes.themeOne.map((colors, paletteIndex) => (
              <ColorPalette
                key={`palette_${paletteIndex}`}
                colors={colors}
                isSelected={selectedColorPalette?.index === paletteIndex}
                onSelect={() => setSelectedColorPalette({colors, index: paletteIndex})}
              />
            ))}
          </div>
        </div>

        <div ref={resumeRef} className={"col-span-12 md:col-span-7 bg-white -mt-3"}>
          <RenderResume
            templateId={selectedTemplate?.theme || ""}
            resumeData={resumeData || DUMMY_RESUME_DATA}
            containerWidth={baseWidth}
            colorPalette={selectedColorPalette?.colors || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

const ColorPalette = ({colors, isSelected, onSelect, paletteIndex}) => {
  return (
    <div
      className={`h-28 bg-purple-50 flex rounded-lg overflow-hidden border-2 ${isSelected ? "border-purple-500" : "border-none"}`}>
      {colors.map((color, index) => (
        <div className={"flex-1"} key={`color_${paletteIndex}_${index}`}
             style={{backgroundColor: colors[index]}}
             onClick={onSelect}/>
      ))}
    </div>
  )
}
