import {useEffect, useRef, useState} from "react";
import {
  LuMapPinHouse,
  LuMail,
  LuPhone,
  LuRss,
  LuGithub,
  LuUser,
} from "react-icons/lu";
import {RiLinkedinLine} from "react-icons/ri";
import ContactInfo from "../resumeSections/ContactInfo";
import EducationInfo from "../resumeSections/EducationInfo.jsx";
import {formatYearMonth} from "../../utils/helper.js";
import LanguageSection from "../resumeSections/LanguageSection.jsx";
import WorkExperience from "../resumeSections/WorkExperience.jsx";
import ProjectInfo from "../resumeSections/ProjectInfo.jsx";
import SkillSection from "../resumeSections/SkillSection.jsx";
import CertificationInfo from "../resumeSections/CertificationInfo.jsx";

const DEFAULT_THEME = ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8D8", "#4A5565"];
console.log(DEFAULT_THEME);

const Title = ({text, color}) => {
  return (
    <div className="relative w-fit mb-2.5">
      <span
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundColor: color,
        }}
      ></span>
      <h2 className={`relative text-sm font-bold`}>{text}</h2>
    </div>
  );
};

const TemplateThree = ({resumeData, colorPalette, containerWidth}) => {
  const themeColors = colorPalette?.length > 0 ? colorPalette : DEFAULT_THEME;

  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800); // Default value
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Calculate the scale factor based on the container width

    const actualBaseWidth = resumeRef.current.offsetWidth;
    setBaseWidth(actualBaseWidth); // get the actual base width
    setScale(containerWidth / baseWidth);
  }, [containerWidth]);

  return (
    <div
      className="p-3 bg-white"
      ref={resumeRef}
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : "none",
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto", // keeps the original size so scaling works correctly
        height: "auto",
      }}
    >

      <div className={"flex items-start gap-5 px-2 mb-5"}>
        <div className={"w-[100px] h-[100px] max-w-[105px] max-h-[105px] rounded-2xl flex" +
          " items-center justify-center"} style={{backgroundColor: themeColors[1]}}>
          {resumeData.profileInfo.profilePreviewUrl ? (
            <img src={resumeData.profileInfo.profilePreviewUrl} className={"w-[90px] h-[90px]" +
              " rounded-2xl"}/>
          ) : (
            <div className={"w-[90px] h-[90px] flex items-center justify-center text-5xl" +
              " rounded-full"} style={{color: themeColors[4]}}>
              <LuUser/>
            </div>
          )}
        </div>

        <div>
          <div className={"grid grid-cols-12 items-center"}>
            <div className={"col-span-8"}>
              <h2 className={"text-2xl font-bold"}>{resumeData.profileInfo.fullName}</h2>
              <p
                className={"text-[15px] font-semibold mb-2"}>{resumeData.profileInfo.designation}</p>

              <ContactInfo
                icon={<LuMapPinHouse/>}
                iconBG={themeColors[2]}
                value={resumeData.contactInfo.location}
              />
            </div>

            <div className={"col-span-4 flex flex-col gap-5 mt-2"}>
              <ContactInfo
                icon={<LuMail/>}
                iconBG={themeColors[2]}
                value={resumeData.contactInfo.email}
              />

              <ContactInfo
                icon={<LuPhone/>}
                iconBG={themeColors[2]}
                value={resumeData.contactInfo.phone}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div
          className="col-span-4 py-10"
          style={{backgroundColor: themeColors[0]}}
        >
          {/*<div className="flex flex-col items-center px-2">*/}
          {/*  <div*/}
          {/*    className="w-[100px] h-[100px] max-w-[110px] max-h-[110px] rounded-full flex items-center justify-center"*/}
          {/*    style={{backgroundColor: themeColors[1]}}*/}
          {/*  >*/}
          {/*    {resumeData.profileInfo.profilePreviewUrl ? (*/}
          {/*      <img*/}
          {/*        src={resumeData.profileInfo.profilePreviewUrl}*/}
          {/*        className="w-[90px] h-[90px] rounded-full"*/}
          {/*      />*/}
          {/*    ) : (*/}
          {/*      <div*/}
          {/*        className="w-[90px] h-[90px] flex items-center justify-center text-5xl rounded-full"*/}
          {/*        style={{color: themeColors[4]}}*/}
          {/*      >*/}
          {/*        <LuUser/>*/}
          {/*      </div>*/}
          {/*    )}*/}
          {/*  </div>*/}

          {/*  <h2 className="text-xl font-bold mt-3">*/}
          {/*    {resumeData.profileInfo.fullName}*/}
          {/*  </h2>*/}
          {/*  <p className="text-sm text-center">*/}
          {/*    {resumeData.profileInfo.designation}*/}
          {/*  </p>*/}
          {/*</div>*/}

          <div className="my-6 mx-6">
            <div className="flex flex-col gap-4">

              {resumeData.contactInfo.linkedin && (
                <ContactInfo icon={<RiLinkedinLine/>} iconBG={themeColors[2]}
                             value={resumeData.contactInfo.linkedin}/>
              )}

              {resumeData.contactInfo.github && (
                <ContactInfo icon={<LuGithub/>} iconBG={themeColors[2]}
                             value={resumeData.contactInfo.github}/>
              )}

              <ContactInfo icon={<LuRss/>} iconBG={themeColors[2]}
                           value={resumeData.contactInfo.website}/>

            </div>

            <div className="mt-5">
              <Title text='Education' color={themeColors[1]}/>

              {resumeData.education.map((data, index) => (
                <EducationInfo key={`education_${index}`} degree={data.degree}
                               institution={data.institution}
                               duration={`${formatYearMonth(data.startDate)} - ${formatYearMonth(data.endDate)}`}
                />

              ))}
            </div>

            <div className={'mt-5'}>
              <Title text={'Languages'} color={themeColors[1]}/>

              <LanguageSection
                languages={resumeData.languages}
                accentColor={themeColors[3]}
                bgColor={themeColors[2]}
              />
            </div>
          </div>
        </div>

        <div className="col-span-8 pt-10 mr-10 pb-5">
          <div className={""}>
            <Title
              text={'Professional Summary'}
              color={themeColors[1]}
            />
            <p className={"text-sm font-medium"}>
              {resumeData.profileInfo.summary}
            </p>
          </div>

          <div className={"mt-4"}>
            <Title
              text={'Work Experience'}
              color={themeColors[1]}
            />
            {resumeData.workExperience.map((data, index) => (
              <WorkExperience
                key={`work_${index}`}
                company={data.company}
                role={data.role}
                duration={`${formatYearMonth(data.startDate)} - ${formatYearMonth(data.endDate)}`}
                durationColor={themeColors[4]}
                description={data.description}
              />
            ))}
          </div>

          <div className={"mt-4"}>
            <Title
              text={"Projects"}
              color={themeColors[1]}
            />

            {resumeData.projects.map((project, index) => (
              <ProjectInfo
                key={`project_${index}`}
                title={project.title}
                description={project.description}
                githubLink={project.github}
                liveDemoUrl={project.liveDemo}
                bgColor={themeColors[2]}
              />
            ))}
          </div>

          <div className={"mt-4"}>
            <Title
              text={"Skills"}
              color={themeColors[1]}
            />

            <SkillSection
              skills={resumeData.skills}
              accentColor={themeColors[3]}
              bgColor={themeColors[2]}
            />
          </div>

          <div className={"mt-4"}>
            <Title
              text={"Certifications"}
              color={themeColors[1]}
            />

            <div className={"grid grid-cols-2 gap-2"}>
              {resumeData.certifications.map((data, index) => (
                <CertificationInfo
                  key={`cert_${index}`}
                  title={data.title}
                  issuer={data.issuer}
                  year={data.year}
                  bgColor={themeColors[2]}
                />
              ))}
            </div>
          </div>

          {resumeData.interests.length > 0 && resumeData.interests[0] !== "" &&
            <div className={"mt-4"}>
              <Title
                text={"Interests"}
                color={themeColors[1]}
              />

              <div className={"flex items-center flex-wrap gap-3 mt-4"}>
                {resumeData.interests.map((interest, index) => {
                    if (!interest) return null
                    return (
                      <div className={"text-[10px] font-medium py-1 px-3" +
                        " rounded-lg"}
                           key={`interest_${index}`}
                           style={{backgroundColor: themeColors[2]}}>
                        {interest}
                      </div>
                    )
                  }
                )}
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
