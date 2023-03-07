import fsPromises from "fs/promises";
import path from "path";
import * as THEMES from "src/styles/theme";


import type { NextPage } from "next";
import Layout_Page_Parent from "src/components/LAYOUT_PAGE_PARENT";

import { memo, useEffect, useState} from "react";
import { PageProps_Minimal,Json_Project,FilterOption } from "src/types/dataTypes";
import Parts_Projects_ProjectContainer from "src/components/PARTS_PROJECTS_PROJECT-CONTAINER";
import Parts_Projects_ViewMethod from "src/components/PARTS_PROJECTS_VIEW-METHOD";
import Parts_Projects_Filtering from "src/components/PARTS_PROJECTS_FILTERING"
import { useRouter } from "next/router";

type Props = PageProps_Minimal & {
  projects: Json_Project[];
};

const Page_Projects: NextPage<Props> = ({ title_header,projects}: Props) => {

  const router = useRouter();

  const [filterOptions, setFilterOptions] = useState<FilterOption[]>(extractFilterOptions(projects));
  const [selectedProjects,setSelectedProjects] = useState<Json_Project[]>(projects);
  const [selectedTags,setSelectedTags] = useState<string[]>([]);
  
  const handleFilterOptionClick = (clickedTag: string): void => {
    const updatedFilterOptions = [...filterOptions];
    const _selectedOptionIndex = updatedFilterOptions.map((filterOption) => filterOption.tag).indexOf(clickedTag);
    updatedFilterOptions[_selectedOptionIndex].selected = !updatedFilterOptions[_selectedOptionIndex].selected;
    

    const _selectedTags = updatedFilterOptions.filter((filterOption)=>filterOption.selected).map((filterOption)=>filterOption.tag);      
    const _selectedProjects = projects.filter((project)=>{
      let bInclude = 0;
      let bFilter = false;
      _selectedTags.forEach((_selectedTag)=>{       
        project.tags.includes(_selectedTag)?bInclude+=1:bInclude+=0;
      })
      _selectedTags.length === bInclude ?bFilter = true:bFilter =  false;
      return bFilter;
    })
    setSelectedProjects(_selectedProjects);
    setSelectedTags(_selectedTags);
    setFilterOptions(extractFilterOptions(_selectedProjects,_selectedTags));
  };

  const[viewMethodIsIndex,setViewMethodIsIndex] = useState(false);
  
  const handleViewMethodIsIndex = () =>{
    setViewMethodIsIndex(!viewMethodIsIndex);
  }
  
  useEffect(()=>{
    const queriTag = [...selectedTags].map((st,_i)=>st.replace(/\s+/g, "")).join("+");
    const queri = `?tags=${queriTag}`;
    console.log(queriTag);
    // router.isReady && router.push({query: { tag:queriTag }});
  },[]);


  return (
    <>
      <Layout_Page_Parent title={title_header}>
        <>
        <div className="component">
          
          {/* <div className="filterArea">
            <Parts_Projects_Filtering filterOptions={filterOptions} handleFilterOptionClick={handleFilterOptionClick}/>
          </div> */}

          {/* <div className="viewMethodArea">
              <Parts_Projects_ViewMethod currentParentViewMethodIsIndex = {viewMethodIsIndex} setParentViewMethodIsIndex={handleViewMethodIsIndex}/>
          </div> */}

          <div className="projectsContainersArea">
          {
            selectedProjects
              .map((project, index) =>
                  <Parts_Projects_ProjectContainer
                    key={`parts_projects_projectContainer_${index}`}
                    methodIsIndex ={viewMethodIsIndex}
                    data={{
                      urlToProject: `/projects/${project.asUrl.toLowerCase()}`,
                      bannar: {
                        path:`/DB/projects/${project.bannar.path.slice(2)}`,
                        bVideo:project.bannar.bVideo
                      },
                      client: project.client,
                      abstract: project.abstract,
                      title:project.title,
                      year: project.year.toString(),
                      tags: project.tags,
                      selectedTags:selectedTags
                    }}
                  />
              )
          }
          </div>
        </div>
        </>
      </Layout_Page_Parent>
      <style jsx>{`
        .component {
          /* padding-bottom:150px; */
        }

        .filterArea{
          /* padding-top:${THEMES.blockUnits.hori.m}; */
          padding-top:50px;
        }

        .viewMethodArea {
          padding-bottom:${THEMES.blockUnits.m};
        }

        .projectsContainersArea {
          display: block;
          border: ${THEMES.colors.accent.gray} 2px solid;
        }
      `}</style>
    </>
  );
};

//create props only when built _gk
export const getStaticProps = async () => {
  const jsonFilePath = path.join(process.cwd(), "public/DB/projects/manager.json");
  const data: Buffer = await fsPromises.readFile(jsonFilePath);
  type Json_In = { projects: Json_Project[] };
  const objectData = JSON.parse(data.toString()) as Json_In;
  const projects: Json_Project[] = objectData.projects;
  projects.sort((a,b)=>(a.id<b.id?-1:+1));
  return {
    props: {
      title_header:"PROJECTS",
      pageNames_crumbs:["PROJECTS"],
      projects
    },
  };
};

export default Page_Projects;

//cloned from "gatsby-theme-portfolio-minimal" + updated by me
// Helper function to calculate a sorted array of filter options based on the given articles
// We use the helper function before we initialize the state so that it can happen on the server.
function extractFilterOptions(projects: Json_Project[],selectedTags?:string[]): FilterOption[] {
  const filterOptions: FilterOption[] = [];
  const tagList: string[] = [];
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (!tagList.includes(tag)) {
        selectedTags?.includes(tag)
          ? filterOptions.push({ tag: tag, selected: true, relatedProjectIds: [project.id.toString()] })
          : filterOptions.push({ tag: tag, selected: false, relatedProjectIds: [project.id.toString()] });      
        tagList.push(tag);
      } else {
        const optionIndex = filterOptions.map((filterOption) => filterOption.tag).indexOf(tag);
        filterOptions[optionIndex].relatedProjectIds.push(project.id.toString());
      }
    });
  });
  selectedTags != null || undefined
  ?filterOptions.sort((a, b) => (a.relatedProjectIds.length > b.relatedProjectIds.length ? -1 : 1)).sort((a, b) => (a.selected === true ? -1 : 1))
  :filterOptions.sort((a, b) => (a.relatedProjectIds.length > b.relatedProjectIds.length ? -1 : 1));
  return filterOptions;
}
