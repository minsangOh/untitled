import styled from 'styled-components/native';

interface IconProps {
  color: string;
}

interface LabelProps {
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 360px;
  height: 64px;
  margin-left: 19px;
  margin-top: 28px;
  background-color: #ffffff;
  border-radius: 12px;
`;

const Item = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 72px;
  height: 64px;
`;

const Icon = styled.Image<IconProps>`
  width: 24px;
  height: 24px;
  tint-color: ${(props) => props.color};
  margin-bottom: 4px;
`;

const Label = styled.Text<LabelProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.color};
  margin-top: 4px;
`;

export default { Container, Item, Icon, Label };
