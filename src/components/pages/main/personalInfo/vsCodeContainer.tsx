import styled from "styled-components";
import tw from "twin.macro";

const VsCodeContainer = styled.div`
  ${tw`flex max-h-96 h-96 overflow-y-auto overflow-x-auto`};

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-gray-850`};
  }

  &::-webkit-scrollbar {
    ${tw`w-4 transition-all duration-700 ease-linear`};
    &::-webkit-scrollbar {
      border-left: 1px solid #424242;
    }
  }
`;

export default VsCodeContainer;
