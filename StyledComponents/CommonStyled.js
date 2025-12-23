import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import styled from "styled-components";

export const Hr = styled.div`
  margin: 0.5rem 0rem;
  border-bottom: 1px solid #dbdbdb;
`;
export const CommonDiv = styled.div``;

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: #ff0000;
`;

export const ToggleDropbox = styled(DropdownToggle)`
  all: unset;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  &:focus-visible {
    color: #000;
    outline: none;
    outline-offset: none;
  }
`;
export const MenuDropbox = styled(DropdownMenu)`
  min-width: 180px;
  padding: 6px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #e4e7ec;
  box-shadow: 0 8px 20px rgba(16, 24, 40, 0.08);
`;
export const ItemDropbox = styled(DropdownItem)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  padding: 10px 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #000000ff;
    background-color: #f9fafb;
  }

  &:active {
    background-color: #ffff;
  }

  input {
    margin: 0;
    cursor: pointer;
  }
`;
