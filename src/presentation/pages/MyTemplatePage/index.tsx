import React from "react";
import TemplateExist from "@components/MyTemplatePage/TemplateExist";
import TemplateNotExist from "@components/MyTemplatePage/TemplateNotExist";
import BackHeader from "@components/common/BackHeader";
import COLOR from "@styles/colors";
import styled from "styled-components";
import useGetStorage from "../../../application/hooks/queries/storage/useGetStorage";

const MyTemplatePage = () => {
  const { data: storageData } = useGetStorage();

  return (
    <MyTemplatePageWrapper>
      <BackHeader text="저장된 여행" />
      {storageData && storageData.length > 0 ? (
        <TemplateExist storageData={storageData} />
      ) : (
        <TemplateNotExist />
      )}
    </MyTemplatePageWrapper>
  );
};

const MyTemplatePageWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  background-color: ${COLOR.GRAY_50};
`;
export default MyTemplatePage;
