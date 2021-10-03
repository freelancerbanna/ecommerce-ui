import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ededed;
  padding: 29px;
  flex-wrap: wrap;
  ${mobile({
    justifyContent: "center",
    overflow: "hidden",
  })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
