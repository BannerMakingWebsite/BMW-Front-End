import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getBookmarkList,
  getPoplarTemplate,
  getTemplateList,
} from "../../../apis/getTemplate";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Collection from "../../collection";
import MyInfo from "../../myInfo";
import Head from "../head";

function TemplateTab() {
  const { data: popularList } = useQuery(["getPopular"], () =>
    getPoplarTemplate()
  );
  const { data: recentList } = useQuery(["getList"], () => getTemplateList());
  const { data: bookmarkList } = useQuery(["getBookmarkList"], () =>
    getBookmarkList()
  );
  /*bookmarkCount
: 
0
category
: 
{id: 1, name: 'thumbnail'}
comments
: 
[]
createTime
: 
(7) [2022, 11, 22, 13, 55, 14, 636471000]
design
: 
"[{\"id\":\"d01ff38f-0efe-445c-826e-c15feaa1ff0f\",\"type\":\"square\",\"height\":100,\"width\":100,\"posX\":793,\"posY\":273,\"flipX\":false,\"flipY\":false,\"color\":\"green\",\"borderColor\":\"black\",\"opacity\":100,\"shadowColor\":\"\"},{\"id\":\"d6c56300-853e-4dcb-a103-537d5fd316bf\",\"type\":\"triangle\",\"height\":100,\"width\":100,\"posX\":393,\"posY\":84,\"flipX\":false,\"flipY\":false,\"color\":\"green\",\"borderColor\":\"black\",\"opacity\":100,\"shadowColor\":\"\"},{\"id\":\"5cb9452e-d7e5-45b2-af5f-29d816711f31\",\"type\":\"circle\",\"height\":300,\"width\":807,\"posX\":-100,\"posY\":71,\"flipX\":false,\"flipY\":false,\"color\":\"#010080\",\"borderColor\":\"#e51212\",\"opacity\":100,\"shadowColor\":\"#f7ff00\",\"rotate\":50},{\"id\":\"f90a7e27-4e4f-4c2a-a9ac-18f3baea0dd6\",\"type\":\"text\",\"width\":1031,\"height\":436,\"posX\":1,\"posY\":1,\"flipX\":false,\"flipY\":false,\"color\":\"#9f1b1b\",\"backgroundColor\":\"#c62d2d\",\"borderColor\":\"\",\"borderWidth\":1,\"fontAlign\":\"center\",\"fontFamily\":\"default\",\"fontSize\":26,\"fontStyle\":[\"italic\",\"underline\",\"line-through\",\"bold\"],\"opacity\":100,\"shadowColor\":\"\",\"shadowDirection\":100,\"shadowDistance\":99,\"shadowOpacity\":80,\"value\":\"ajsdlf;asdl;kfjlas;dfjl\\n\\n\\n\\n\\n\\nasdf;jas;dlfkasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\",\"rotate\":50}]"
goodCount
: 
0
id
: 
1
preview
: 
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaA
title
: 
"Test Template"
user
: 
*/

  return (
    <Background>
      <Head type="input" />
      <ContentWrapper>
        <Collection title="내 즐겨찾기" data={bookmarkList} />
        <Collection title="인기 템플릿" data={popularList} />
        <Collection title="최근에 업로드된 템플릿" data={recentList} />
      </ContentWrapper>
    </Background>
  );
}


export default TemplateTab;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  position: fixed;
  left: 5rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;
`;

const ContentWrapper = styled.div`
  padding-bottom: ${pxToRem(24)}rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  > div {
    margin-top: ${pxToRem(25)}rem;
  }
`;
