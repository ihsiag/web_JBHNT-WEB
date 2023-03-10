import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import * as UTILS from "src/utils";
import * as THEMES from "src/styles/theme";
import { useState, memo } from "react";
import { T_BANNAR } from "src/types";

type Props = {
  projectForContainer: {
    urlToProject: string;
    bannar: T_BANNAR;
    client: string;
    abstract: string;
    title: string;
    mentions: string[];
    year: string;
    tags: string[];
  };
};

const SE_PRJTS_Container = ({ projectForContainer }: Props) => {
  return (
    <>
      <div className="component">
          <Link href={projectForContainer.urlToProject} scroll={false}>
            <a>
              <div className=""></div>
            </a>
          </Link>
      </div>

      <style jsx>{`
        .component {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default SE_PRJTS_Container;
